import { Link } from 'gatsby';
import React from 'react'
import tog from '../assets/images/tog.svg';

const WorkTogether = () => {
    return (
        <div className='px-4 md:px-32 mt-14 md:mt-24 flex flex-col flex-col-reverse md:flex-row items-center'>
            <div className='w-full md:w-1/2 flex flex-col space-y-4' data-sal="fade"
                // data-sal-delay="100"
                data-sal-easing="ease">
                <h3 className='font-bold text-2xl md:text-3xl bg-bg '>
                    Ready to work together?
                </h3>
                <p className='w-full md:w-9/12 text-xl font-medium bg-bg '>
                    We are happy to talk to you! Simply drop
                    us a <span className='text-brand'> message</span> and we will get back to you
                    within 24 hours.

                </p>
                <div>
                    <Link to="/" className="outline rounded-full outline-black font-semibold
                                             outline-offset-1 outline-1  bg-brand 
                                               w-36 py-2 flex justify-center hover:font-bold text-lg md:text-xl 
                                    hover:outline-brand hover:cursor-pointer hover:text-white">
                        Let Us Talk
                    </Link>
                </div>
            </div>
            <div className='w-1/2' data-sal="slide-up"
                // data-sal-delay="100"
                data-sal-easing="ease">
                <img src={tog} alt="work" />
            </div>
        </div>
    )
}

export default WorkTogether