import React, { useState } from 'react'
import Particles from "react-tsparticles";
import Navbar from './Navbar';
import '../assets/css/main.scss';
import Sidebar from './Sidebar';
import Alp from './Alp';
import Youtube from './Youtube';
import About from './About';
import Service from './Service';
import CoreValues from './CoreValues';
import WhoWeAre from './WhoWeAre';
import Growth from './Growth';
import Crypto from './Crypto';
import Team from './Team';
import Verify from './Verify';
import Goal from './Goal';
import StandOut from './StandOut';
import FrequentQuestions from './FrequentQuestions';
import WorkTogether from './WorkTogether';
import Footer from './Footer';
import WhyApeInPaper from './WhyApeInPaper';
import { Helmet } from "react-helmet"

const LayOut = () => {
    const [isOPen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOPen);
    }
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ape In Paper</title>
                <link rel="canonical" href="https://apinpaper.io" />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@700&display=swap" rel="stylesheet" />

            </Helmet>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#1f1600",
                        },
                    },
                    // fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 0,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 0,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 3,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div style={{ color: "#fff", position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <header>
                    <Navbar toggleSidebar={toggleSidebar} isOpen={isOPen} />
                    <Sidebar toggleSidebar={toggleSidebar} isOpen={isOPen} />
                </header>

                <main className='mt-20  '>
                    <Alp />
                    {/* <Youtube /> */}
                    <About />
                    <WhyApeInPaper />
                    <Service />
                    <CoreValues />
                    <WhoWeAre />
                    <Growth />
                    <Crypto />
                    <Team />
                    <Verify />
                    <Goal />
                    <StandOut />
                    <FrequentQuestions />
                    <WorkTogether />
                    <Footer />
                </main>


            </div>

        </>

    )
}

export default LayOut