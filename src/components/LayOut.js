import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import '../assets/css/main.scss';
import Navbar from './Navbar';
import Ape from './Ape';
import Sidebar from './Sidebar';
import WhyApeInPaper from './WhyApeInPaper';
import Service from './Service';
import CoreValues from './CoreValues';
import About from './About';
import WhoWeAre from './WhoWeAre';
import Growth from './Growth';
import Crypto from './Crypto';
import Team from './Team';
import Verify from './Testimonials';
// import Goal from './Goal';
import StandOut from './StandOut';
import FrequentQuestions from './FrequentQuestions';
import WorkTogether from './WorkTogether';
import Footer from './Footer';
const LayOut = () => {
    const [isOPen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOPen);
    }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ape In Paper</title>
                <link rel="canonical" href="https://apinpaper.io" />

                <link rel="shortcut icon" href="./../" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

            </Helmet>

            <div className='layout bg-bg'>
                <header>
                    <Navbar toggleSidebar={toggleSidebar} isOpen={isOPen} />
                    <Sidebar toggleSidebar={toggleSidebar} isOpen={isOPen} />
                </header>
                <main className='bg-bg'>
                    <Ape />
                    <About />
                    <WhyApeInPaper />
                    <Service />
                    <CoreValues />
                    <WhoWeAre />
                    <Growth />
                    <Crypto />
                    <Team />
                    <Verify />
                    {/* <Goal /> */}
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