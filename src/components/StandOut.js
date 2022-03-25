import { Link } from 'gatsby';
import React from 'react'
import stand from '../assets/images/stand.svg';

const StandOut = () => {
    return (
        <div className='mt-14 md:mt-24 px-6 md:px-32 flex flex-col flex-col-reverse md:flex-row items-center' >
            <div className='h-24'> </div>
            <div className='flex-auto flex flex-col space-y-8 md:space-y-16 w-full md:w-2/5 ' id="white-paper"

            >
                <div className='w-full md:pr-8 flex flex-col space-y-2 md:space-y-4 '
                    data-sal="fade"
                    data-sal-delay="100"
                    data-sal-easing="ease">
                    <h3 className='font-bold text-2xl md:text-3xl bg-bg'>
                        Stand out with ApeInPaper
                    </h3>
                    <p className='w-full md:w-10/12 tracking-wide md:tracking-wider bg-bg leading-relaxed'>
                        In a crowded crypto space of lookalike projects
                        your company has to stand out to be successful.
                        Having a great idea alone is not enough anymore.

                    </p>
                </div>
                <div className='w-full md:pr-8 flex flex-col space-y-2 md:space-y-4'
                    data-sal="fade"
                    data-sal-delay="100"
                    data-sal-easing="ease">
                    <h3 className='font-bold text-2xl md:text-3xl bg-bg'>
                        Take Advantage of Our Free
                        Consultation Today!
                    </h3>
                    <p className='w-full md:w-10/12   bg-bg  leading-relaxed'>
                        Get a Free 30 mins consulting session with our
                        industry experts. Clear your doubts, know where
                        your project can be improved, take everything to
                        the next level and much more!

                    </p>
                </div>
                <div>
                    <p>
                        <Link to="/" className="outline rounded-full  font-semibold
                                             outline-offset-1 outline-1  bg-brand
                                               w-36 py-2 flex justify-center hover:font-bold
                                    hover:outline-brand hover:cursor-pointer ">
                            Let Us Talk
                        </Link>
                    </p>
                </div>
            </div>
            <div className='w-full md:w-1/2 hidden md:flex'
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease">
                <img src={stand} alt="stand-cover" />
            </div>
        </div>
    )
}

export default StandOut