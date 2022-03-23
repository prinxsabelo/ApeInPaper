import { Link } from 'gatsby';
import React from 'react'
import stand from '../assets/images/stand.svg';

const StandOut = () => {
    return (
        <div className='mt-24 px-6 sm:px-32 flex flex-col flex-col-reverse sm:flex-row items-center' id="white-paper">
            <div className='flex-auto flex flex-col space-y-16 w-full sm:w-2/5 '
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
            >
                <div className='w-full sm:pr-8 flex flex-col space-y-4'>
                    <h3 className='font-bold text-2xl sm:text-3xl bg-raw-ape  tracking-wide'>
                        Stand out with ApeInPaper
                    </h3>
                    <p className='w-full sm:w-10/12 tracking-wide sm:tracking-wider bg-raw-ape leading-relaxed'>
                        In a crowded crypto space of lookalike projects
                        your company has to stand out to be successful.
                        Having a great idea alone is not enough anymore.

                    </p>
                </div>
                <div className='w-full sm:pr-8 flex flex-col space-y-4'>
                    <h3 className='font-bold text-2xl sm:text-3xl bg-raw-ape  tracking-wide'>
                        Take Advantage of Our Free
                        Consultation Today!
                    </h3>
                    <p className='w-full sm:w-10/12 tracking-wider  bg-raw-ape  leading-relaxed'>
                        Get a Free 30 mins consulting session with our
                        industry experts. Clear your doubts, know where
                        your project can be improved, take everything to
                        the next level and much more!

                    </p>
                </div>
                <div>
                    <p>
                        <Link to="/" className="outline rounded-full outline-black font-semibold
                                             outline-offset-1 outline-1  bg-raw-deep-yellow 
                                               w-36 py-2 flex justify-center hover:font-bold
                                    hover:outline-raw-deep-yellow hover:cursor-pointer hover:text-white">
                            Let Us Talk
                        </Link>
                    </p>
                </div>
            </div>
            <div className='w-full sm:w-1/2 '
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease">
                <img src={stand} alt="stand-cover" />
            </div>
        </div>
    )
}

export default StandOut