export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Nayan Sharma',
        position: 'Teammate at HackBattle',
        img: 'assets/review1.png',
        review:
            'Working with Ayush Parakh on the Medicare website during HackBattle was an amazing experience. His ability to quickly prototype and implement complex features helped us create a seamless and user-friendly platform. A great team player with outstanding skills!',
    },
    {
        id: 2,
        name: 'Vansh Sehgal',
        position: 'Teammate at HackBattle',
        img: 'assets/review2.png',
        review:
            'Ayush Parakh was instrumental in the success of our project at HackBattle. His expertise in both frontend and backend development allowed us to build a fully functional Medicare website within the hackathon timeframe. Highly recommend him for any web development work!',
    },
    {
        id: 3,
        name: 'HackBattle Judge',
        position: 'Hackathon Judge',
        img: 'assets/review3.png',
        review:
            'The Medicare website developed by Ayush Parakh and his team stood out due to its innovative features and smooth user experience. His problem-solving skills and technical expertise were evident in the final product. Great work!',
    },
    {
        id: 4,
        name: 'Aarav Mehta',
        position: 'Mentor at HackBattle',
        img: 'assets/review4.png',
        review:
            'Ayush Parakh showcased exceptional technical skills and teamwork during HackBattle. His ability to think critically and implement efficient solutions played a key role in the success of the Medicare project. A highly skilled and dedicated developer!',
    },
];


export const myProjects = [
    {
        title: 'RidePartner',
        desc: 'RidePartner is a comprehensive solution addressing transportation challenges faced by students. It provides an affordable, reliable, and safe travel option by mitigating high private cab costs and public transportation inconveniences.',
        subdesc:
            'Built with EJS, GSAP, PostgreSQL, Tailwind CSS, MongoDB, HTML, CSS, Express, and Node.js, RidePartner ensures improved travel accessibility and safety for students.',
        href: '#',
        texture: '/textures/project/ridepartner.mp4',
        logo: '/assets/header1.png',
        logoStyle: {
            backgroundColor: 'black',
            border: '0.2px solid #FFD700', /* Updated to light yellow */
            boxShadow: '0px 0px 60px 0px #FFD7004D', /* Updated to yellow light */
        },

        spotlight: '/assets/spotlight2.png',
        // tags: [
        //     { id: 1, name: 'Node.js', path: '/assets/nodejs.png' },
        //     { id: 2, name: 'Express.js', path: '/assets/express.png' },
        //     { id: 3, name: 'MongoDB', path: '/assets/mongodb.png' },
        //     { id: 4, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
        // ],
    },
    {
        title: 'Medicare',
        desc: 'Medicare is a full-stack AI-powered healthcare platform featuring an intelligent chatbot for personalized interactions, psychologist connections, and educational blogs on mental health awareness.',
        subdesc:
            'Developed using React, Node.js, Express, JavaScript, HTML, and CSS, Medicare enhances mental health awareness and accessibility through advanced AI integrations.',
        href: '#',
        texture: '/textures/project/medicare.mp4',
        logo: '/assets/medicare-logo.png',
        logoStyle: {
            backgroundColor: 'black', /* Updated to black */
            border: '0.2px solid #90EE90', /* Updated to light green */
            boxShadow: '0px 0px 60px 0px #90EE904D', /* Updated to light green */
        },

        spotlight: '/assets/spotlight3.png',
        // tags: [
        //     { id: 1, name: 'React.js', path: '/assets/react.svg' },
        //     { id: 2, name: 'Node.js', path: '/assets/nodejs.png' },
        //     { id: 3, name: 'Express.js', path: '/assets/express.png' },
        //     { id: 4, name: 'JavaScript', path: '/assets/javascript.png' },
        // ],
    },

];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'HackBattle Hackathon',
        pos: 'Full-Stack Developer',
        duration: '2024',
        title: "Participated in HackBattle, where I collaborated with a team to develop a Medicare website. Focused on frontend and backend development, ensuring a seamless user experience and robust functionality under tight deadlines.",
        icon: '/assets/Hack.jpg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Problem Solving & DSA',
        pos: 'DSA Enthusiast',
        duration: '2022 - Present',
        title: "Expert in Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA). Solved 100+ questions on platforms like LeetCode and CodeChef, improving problem-solving skills and algorithmic thinking.",
        icon: '/assets/Leetcode.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Personal Development',
        pos: 'Self-Taught Developer',
        duration: '2022 - Present',
        title: "Engaged in continuous learning and personal projects, building applications using modern web technologies. Developed a strong foundation in JavaScript, React, and backend frameworks to enhance my development skills.",
        icon: '/assets/Development.jpg',
        animation: 'salute',
    },
];
