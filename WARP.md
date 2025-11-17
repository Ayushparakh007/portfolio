# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a single-page portfolio site built with React 18 and Vite, styled with Tailwind CSS, and featuring 3D scenes rendered via `@react-three/fiber` and `@react-three/drei`. Animations use GSAP and 3D assets are loaded from `public/` (including a GLTF-based "HackerRoom"/computer scene). Email-based contact is handled via `@emailjs/browser`.

Key technologies:
- Build tool: Vite (`vite`, `vite build`, `vite preview`)
- UI: React 18, Tailwind CSS, custom utility classes in `src/index.css`
- 3D/graphics: `three`, `@react-three/fiber`, `@react-three/drei`, `maath`, `leva`
- Animations: `gsap`
- Responsiveness: `react-responsive`
- Email: `@emailjs/browser` (requires Vite env vars)

## Common Commands

All commands below assume the working directory is the repository root.

- Install dependencies
  - `npm install`

- Start dev server (with HMR)
  - `npm run dev`

- Build for production
  - `npm run build`

- Preview local production build
  - `npm run preview`

- Lint the codebase (JS/JSX, including React and react-three rules)
  - `npm run lint`

- Tests
  - There is currently **no test script** defined in `package.json`; a test runner is not configured yet, so there is no command to run a single test.

## High-Level Architecture

### Entry Point and Application Shell

- `src/main.jsx`
  - React entry point; imports global styles from `src/index.css` and renders `<App />` into the `#root` element.
  - Wraps the app in `React.StrictMode` (double-render behavior in dev may affect effects and animations).

- `src/App.jsx`
  - Defines the main page layout as a vertical stack of sections inside a centered container: `Navbar`, `Hero`, `About`, `Projects`, `Client`, `Experience`, `Contact`, and `Footer`.
  - Acts as the top-level composition root; there is no global state management library (state is local to sections/components).

### Sections and Navigation

- `src/sections/Navbar.jsx`
  - Uses `navLinks` from `src/constants/index.js` to render navigation items.
  - Desktop: renders a standard horizontal nav (`NavItems`).
  - Mobile: uses a toggled sidebar menu; open state (`isOpen`) is stored in local component state.
  - The `href` fields in `navLinks` (e.g., `#home`, `#about`, `#work`, `#contact`) must correspond to `id` attributes on the respective section components.

- Section components in `src/sections/` (`Hero`, `About`, `Projects`, `Client`, `Experience`, `Contact`, `Footer`)
  - Each section is responsible for a logical part of the page and exposes an `id` (e.g. `id="home"`, `id="contact"`) so that the navbar anchor links work.
  - Layout and visual design rely heavily on Tailwind utility classes and custom class compositions defined in `src/index.css` (e.g. `.head-text`, `.grid-container`, `.client-container`, `.work-container`).

### 3D Scene and Visuals (Hero Section)

- `src/sections/Hero.jsx`
  - Core 3D hero section, combining text content with a full-screen `<Canvas>` from `@react-three/fiber`.
  - Uses `useMediaQuery` from `react-responsive` to compute responsive behavior (`isSmall`, `isMobile`, `isTablet`) and adjusts 3D object positions accordingly.
  - Within the `<Canvas>`:
    - Wraps content in `<Suspense>` with `CanvasLoader` as fallback.
    - Uses `<PerspectiveCamera makeDefault position={[0, 0, 30]} />` to define the scene camera.
    - Wraps the main `HackerRoom` model in a `<HeroCamera>` component to provide camera/scene motion responding to pointer input.
    - Renders additional decorative 3D components (`Target`, `ReactLogo`, `Cube`, `Rings`) whose positions depend on the media-query flags.
    - Basic lighting is set via `ambientLight` and `directionalLight`.

- `src/components/HeroCamera.jsx`
  - Receives `children` (the 3D content) and an `isMobile` flag.
  - Uses `useFrame` to smoothly damp the camera position and, when not on mobile, to rotate the group based on pointer position using `maath.easing` helpers.
  - Acts as a small camera/interaction controller around the hero scene.

- `src/components/HackerRoom.jsx`
  - Auto-generated react-three component (via `gltfjsx`) for a GLTF model (a computer/desk scene).
  - Loads GLTF geometry with `useGLTF('/model1/Computer.gltf')` and textures via `useTexture` (e.g., monitor and screen textures from `/textures/desk/...`).
  - Exposes a `Model` component that accepts standard 3D props (e.g. `position`, `rotation`, `scale`) and composes multiple meshes and materials.
  - Preloads the GLTF model with `useGLTF.preload(...)` for better performance.

- Other 3D components in `src/components/` (`Target`, `ReactLogo`, `Cube`, `Rings`, etc.)
  - Encapsulate individual objects or effects in the 3D scene.
  - Positioned from `Hero.jsx` via props to achieve the desired composition, with responsive behavior informed by `isSmall`/`isMobile`/`isTablet`.

- `src/constants/index.js` — 3D sizing helper
  - `calculateSizes(isSmall, isMobile, isTablet)` returns a set of positions and scales for key 3D objects (desk, cube, React logo, rings, target).
  - Currently commented out in `Hero.jsx`, but provides a centralized place to tweak scene layout across breakpoints if re-enabled.

### Data and Content Constants

- `src/constants/index.js`
  - `navLinks`: Data source for the navbar; controls link labels and target fragment identifiers.
  - `clientReviews`: Static data for the client/testimonial section, including names, roles, image paths (under `public/assets`), and review text.
  - `myProjects`: Project cards for the work/portfolio section, including title, description, sub-description, video texture paths, logo image, inline `logoStyle`, and spotlight image.
  - `workExperiences`: Timeline-like data for the experience section, including metadata and icon paths.
  - This file is the central content configuration for the site; new content or reordering is typically done here rather than directly in section components.

### Contact Flow and Alerts

- `src/hooks/useAlert.js`
  - Reusable hook that encapsulates alert state as `{ show, text, type }`.
  - Exposes `{ alert, showAlert, hideAlert }` for components to control user-visible alerts.

- `src/components/Alert.jsx` (not shown here but imported by `Contact.jsx`)
  - Presentation component that consumes `alert` props to render feedback messages.

- `src/sections/Contact.jsx`
  - Implements the contact form, including inputs for name, email, and message.
  - Uses `useRef` to hold a reference to the form node and `useState` for `form` and `loading` state.
  - Submits via `emailjs.send(...)` with parameters wired to form fields and hard-coded recipient info.
  - Requires the following Vite environment variables at build/runtime (defined, for example, in a `.env` file):
    - `VITE_APP_EMAILJS_SERVICE_ID`
    - `VITE_APP_EMAILJS_TEMPLATE_ID`
    - `VITE_APP_EMAILJS_PUBLIC_KEY`
  - On success: shows a success alert through `useAlert`, and clears the form after a timeout.
  - On failure: logs the error and shows a failure alert.

### Styling System

- `tailwind.config.js`
  - Configures Tailwind to scan `index.html` and files under `src/**/*.{js,ts,jsx,tsx}`.
  - Extends the theme with a `generalsans` font family and a structured `black`/`white` color palette.
  - Adds a `backgroundImage` alias `terminal` pointing at `/assets/terminal.png` (used in the contact section background).

- `postcss.config.js`
  - Standard Tailwind + Autoprefixer pipeline.

- `src/index.css`
  - Imports the General Sans font from a CDN.
  - Enables smooth scrolling globally.
  - Uses `@tailwind` directives for base, components, and utilities.
  - Defines a set of `@layer utilities` classes that effectively act as the design system for this project (e.g. `.c-space`, `.head-text`, `.nav-ul`, `.btn`, `.hero_tag`, `.grid-container`, `.client-container`, `.work-container`, `.contact-container`, `.field-*`, `.social-icon`).
  - Defines extra animations and gradients (e.g. `.waving-hand` with `@keyframes wave-animation`, `.arrow-gradient`).
  - When editing layout or visual behavior, these custom utilities are often the correct place to apply changes instead of duplicating Tailwind classes in components.

### Linting and Code Quality

- `eslint.config.js`
  - Uses the new flat config format for ESLint.
  - Applies to `**/*.{js,jsx}` with browser globals and modern ECMAScript settings.
  - Includes:
    - `@eslint/js` base recommended rules.
    - `eslint-plugin-react` (recommended + `jsx-runtime`).
    - `eslint-plugin-react-hooks` (recommended hooks rules).
    - `eslint-plugin-react-refresh` (ensures components are correctly exportable for HMR).
    - `@react-three/eslint-plugin` under the `@react-three` key for react-three-fiber-specific checks.
  - The `npm run lint` script is the canonical way to validate code style and catch common issues across React and react-three code.

### Assets and Public Files

- `public/`
  - Contains static assets such as:
    - 3D models under `public/model1/` (e.g. the GLTF for the computer/desk scene used by `HackerRoom`).
    - Images/textures under `public/assets/` and `public/textures/`, referenced by components and constants (e.g. project videos, logos, terminal background, client images).
  - Assets are typically referenced with absolute paths from the root (e.g. `/assets/...`, `/textures/...`). When adding new assets, follow this convention so they load correctly under Vite.
