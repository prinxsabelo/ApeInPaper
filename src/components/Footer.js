import React from 'react'
import {
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
    FaLocationArrow
} from "react-icons/fa"
import apeFooter from "../assets/images/ape-footer.png";

const Footer = () => {
    return (
        <div className='bg-raw-black  w-full mt-16 py-12 px-6 sm:px-32 '>
            <div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-8'>
                <div className='w-full sm:w-2/5 '>
                    <div className='flex gap-4 sm:gap-4'>
                        <div>
                            <img src={apeFooter} alt="ApeInPaper" className='w-full' />
                        </div>
                        <div className=' w-full sm:pr-6 tracking-widest'>
                            ApeInPaper is your go-to marketing
                            and content partner that helps existing
                            and new crypto, NFT, and Fintech companies grow their projects online.
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-4/12'>
                    <div className='w-full sm:w-10/12 tracking-widest'>
                        We are available on all your favorite
                        social platforms.
                    </div>
                    <div className='w-10/12 flex flex-col mt-4 space-y-4'>
                        <div className='flex space-x-6'>
                            <a href='linkedin.com'>
                                <FaLinkedin size={30}></FaLinkedin>
                            </a>
                            <a href='twitter.com'>
                                <FaTwitter size={30}></FaTwitter>
                            </a>
                            <a href='instagram.com'>
                                <FaInstagram size={30}></FaInstagram>
                            </a>
                        </div>
                        <div>
                            <a href='twitter.com' className='flex items-center space-x-2'>
                                <FaEnvelope size={30}></FaEnvelope>
                                <span className='tracking-wide font-medium'> hello@ApeInPaper.io</span>
                            </a>
                        </div>
                        <div className='flex space-x-3 tracking-widest'>
                            <FaLocationArrow size={50}></FaLocationArrow>
                            <span>Apeinpaper HQ, #3630 Cave
                                Center, 907 Wilshire Boulevard
                                Michigan, 50017 </span>
                        </div>
                    </div>
                </div>
                <div className='flex-auto flex flex-col space-y-6'>
                    <p className='text-raw-deep-yellow font-medium tracking-widest'>Sitemap</p>
                    <div className='flex flex-col space-y-3 tracking-widest'>
                        <a href="/">Home</a>
                        <a href='/'>About Us</a>
                        <a href='/'>Our Services</a>
                        <a href='/'>Let's Talk</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer