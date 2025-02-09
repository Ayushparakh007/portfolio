import React, { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const [arcsData, setArcsData] = useState([]);

    useEffect(() => {
        const N = 30; // Number of arcs
        const arcs = [...Array(N).keys()].map(() => {
            return {
                startLat: (Math.random() - 0.5) * 180,
                startLng: (Math.random() - 0.5) * 360,
                endLat: (Math.random() - 0.5) * 180,
                endLng: (Math.random() - 0.5) * 360,
                color: [['red', 'white', 'blue'][Math.floor(Math.random() * 3)],
                    ['red', 'white', 'blue'][Math.floor(Math.random() * 3)]]
            };
        });
        setArcsData(arcs);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText('ayushparakh2004@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/first.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I’m Ayush Vijaykumar Parakh</p>
                            <p className="grid-subtext">
                                Dynamic and skilled software developer with strong expertise in Java and a solid foundation in web development, DSA, and OOPs concepts.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                Proficient in Java, C/C++, JavaScript, TypeScript, HTML, CSS, and experienced with databases like MySQL & MongoDB. Skilled in frameworks such as Node.js, React, Express, and FramerMotion.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                                arcsData={arcsData}
                                arcStartLat={d => d.startLat}
                                arcStartLng={d => d.startLng}
                                arcEndLat={d => d.endLat}
                                arcEndLng={d => d.endLng}
                                arcColor={d => d.color}
                                arcDashLength={0.4}
                                arcDashGap={0.2}
                                arcDashAnimateTime={1000}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Open to Remote Work Worldwide</p>
                            <p className="grid-subtext">Currently based in Vellore, Tamil Nadu, and available for global opportunities.</p>
                            <div className="flex flex-col items-center gap-4">
                                <a href="https://www.linkedin.com/in/ayush-parakh-263430251" target="_blank" rel="noopener noreferrer">
                                    <Button name="Contact Me on LinkedIn" isBeam containerClass="w-full mt-10" />
                                </a>

                                <a href="/Resume.pdf" download>
                                    <Button name="Download My Resume" isBeam containerClass="w-full mt-10" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/keyboard.webp" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                Passionate about problem-solving and software development. Excels in Full-Stack Development and enjoys participating in coding competitions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/contact.jpg"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ayushparakh2004@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
