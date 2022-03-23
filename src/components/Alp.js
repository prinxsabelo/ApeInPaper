import React from 'react'
import cover from '../assets/images/cover.svg';
import { Link } from 'gatsby';

const Alp = () => {
    return (
        <div className='alp flex flex-col flex-col-reverse sm:flex-row   px-6 sm:px-32 sm:gap-12'>
            <div className='w-full sm:w-1/2 flex flex-col  justify-center space-y-2 sm:space-y-3'
                data-sal="zoom-in"
                data-sal-delay="200"
                data-sal-easing="ease"
            >

                <h2 className='bg-raw-ape text-4xl sm:text-5xl py-4 pr-6 tracking-wide'>Take your Project to the Moon</h2>
                <p className='text-xl bg-raw-ape tracking-wide leading-relaxed	pb-4'>
                    The Leading Crypto &amp; blockchain based project PR and Copywriting Network
                </p>
                <Link to="/" className="outline rounded-full outline-offset-4 outline-1 w-48 flex justify-center 
                            tracking-wider hover:outline-raw-yellow hover:cursor-pointer hover:text-raw-yellow text-xl py-2">
                    Schedule a Call
                </Link>
            </div>
            <div className='mt-8 sm:mt-0'>
                <img src={cover} alt="cover" className='mt-4'
                    data-sal="zoom-in"
                    data-sal-delay="300"
                    data-sal-easing="ease"

                />

            </div>
        </div>
    )
}

export default Alp