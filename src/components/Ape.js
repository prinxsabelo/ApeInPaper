import React from 'react'
import cover from '../assets/images/cover.svg';
import { Link } from 'gatsby';

const Ape = () => {
    return (
        <div className='mt-16 flex flex-col flex-col-reverse md:flex-row px-6 md:px-32 md:gap-12 md:mt-24'>
            <div className='w-full md:w-1/2 flex flex-col  justify-center space-y-1 md:space-y-3'
                data-sal="zoom-in"
                data-sal-delay="200"
                data-sal-easing="ease"
            >

                <h2 className=' text-3xl md:text-5xl md:py-4 md:pr-6 tracking-wide font-semibold'>Take your Project to the Moon</h2>
                <p className='text-base md:text-xl tracking-wide leading-relaxed	pb-4 md:pr-4'>
                    The Leading Crypto &amp; blockchain based project PR and Copywriting Network
                </p>
                <Link to="/" className="outline rounded-full outline-offset-4 outline-1 w-48 flex justify-center 
                            tracking-wide hover:outline-hover hover:cursor-pointer hover:text-brand 
                            text-base md:text-xl py-2">
                    Schedule a Call
                </Link>
            </div>
            <div className='mt-0'>
                <img src={cover} alt="cover" className='mt-4'
                    data-sal="zoom-in"
                    data-sal-delay="300"
                    data-sal-easing="ease"

                />

            </div>
        </div>
    );
}
export default Ape