import { Link } from 'gatsby';
import React from 'react'
import growth from '../assets/images/growth.png';

const Growth = () => {
    return (
        <div className='core-values mt-16 sm:mt-40  px-6 sm:px-32 bg-bg max-w-screen-xl flex flex-col sm:space-y-24'>

            <div className='flex flex-col sm:flex-row flex-col-reverse items-center sm:-mt-10 sm:gap-24'
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
            >
                <div className='w-full sm:w-3/5 flex flex-col space-y-4  text-base 
                        tracking-wider sm:tracking-wider'>
                    <h3 className='font-bold text-2xl sm:text-3xl bg-bg sm:my-8 w-10/12 sm:w-9/12 tracking-wide'
                        data-sal="zoom-out"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                    >
                        We Make Your Growth
                        Journey A Lot Easier
                    </h3>
                    <p className='hidden sm:block text-base'>

                        You <b> PLUS</b> Us, equal a <b>great team</b>. Your project
                        objectives become our goals, and we'll work with
                        you every step of the way to give the experience,
                        knowledge, and comforting shoulder you need.
                    </p>
                    <p className='hidden sm:block text-base'>
                        <b>PLUS</b>, our partners equal a <b>network</b>. We like
                        developing relationships so much that if our
                        shoulder isn't needed for any area of your project
                        development, you can be assured that one of our
                        friends will step up to help you and us.

                    </p>
                    <p className='text-base leading-loosed'>
                        We Drive Persistent Growth for Remarkable
                        Companies. We’re not your traditional marketing
                        agency, neither are we satisfied with doing the
                        bare minimum.  We are your <b>GROWTH SOLUTION</b>.
                    </p>


                </div>
                <div className='hidden sm:flex w-10/12 sm:w-2/5'>
                    <img src={growth} alt="growth" className='object-contain w-full h-full' />

                </div>
            </div>
            <div className='flex flex-col w-full items-center space-y-4 mt-4 sm:mt-8'
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease" >
                <p className='w-full sm:w-9/12 sm:text-center tracking-wider leading-relaxed'>
                    We’d love to learn more about the future of your business and show how our creativity and
                    influence can deliver results that drive success.
                </p>
                <Link to="/" className="outline rounded-full outline-black font-semibold
                                             outline-offset-1 outline-1  bg-yellow
                                               w-36 py-2 flex justify-center hover:font-bold text-xl
                                    hover:outline-yellow hover:cursor-pointer hover:text-white">
                    Let Us Talk
                </Link>
            </div>
        </div>
    )
}

export default Growth