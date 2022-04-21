import React from 'react'
import growth from '../assets/images/growth.png';
import ButtonLink from './ButtonLink';

const Growth = () => {
    return (
        <div className='core-values pt-16 md:pt-40  px-4 md:px-32 bg-bg max-w-screen-xl flex flex-col md:space-y-24'>

            <div className='flex flex-col md:flex-row flex-col-reverse items-center md:-mt-10 md:gap-24'
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
            >
                <div className='w-full md:w-3/5 flex flex-col space-y-4  text-base 
                        tracking-wider md:tracking-wider'>
                    <h3 className='font-bold text-lg md:text-3xl w-10/12 md:w-9/12 tracking-wide'
                        data-sal="zoom-out"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                    >
                        We Make Your Growth
                        Journey A Lot Easier
                    </h3>
                    <p className='hidden md:block text-base md:text-lg'>

                        You <b> PLUS</b> Us, equal a <b>great team</b>. Your project
                        objectives become our goals, and we'll work with
                        you every step of the way to give the experience,
                        knowledge, and comforting shoulder you need.
                    </p>
                    <p className='hidden md:block text-base md:text-lg'>
                        <b>PLUS</b>, our partners equal a <b>network</b>. We like
                        developing relationships so much that if our
                        shoulder isn't needed for any area of your project
                        development, you can be assured that one of our
                        friends will step up to help you and us.

                    </p>
                    <p className=' text-base md:text-lg tracking-wide'>
                        We Drive Persistent Growth for Remarkable
                        Companies. We’re not your traditional marketing
                        agency, neither are we satisfied with doing the
                        bare minimum.  We are your <b>GROWTH SOLUTION</b>.
                    </p>


                </div>
                <div className='hidden md:flex w-10/12 md:w-2/5'>
                    <img src={growth} alt="growth" className='object-contain w-full h-full' />

                </div>
            </div>
            <div className='flex flex-col w-full md:items-center space-y-4 mt-4 md:mt-8'
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease" >
                <p className='w-full md:w-9/12 md:text-center tracking-wider
                     leading-relaxed text-base md:text-lg'>
                    We’d love to learn more about the future of your business and show how our creativity and
                    influence can deliver results that drive success.
                </p>
                <ButtonLink to="https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ">
                    Let Us Talk
                </ButtonLink>

            </div>
        </div>
    )
}

export default Growth