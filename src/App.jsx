import { lazy, Suspense } from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

// Lazy load sections below the fold
const About = lazy(() => import("./sections/About.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const Client = lazy(() => import("./sections/Client.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero/>
            <Suspense fallback={<div className="w-full h-20" />}>
                <About/>
                <Projects/>
                <Client/>
                <Experience/>
                <Contact/>
                <Footer/>
            </Suspense>
        </main>
    )
}
export default App
