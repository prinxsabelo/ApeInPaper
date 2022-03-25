import { Link } from 'gatsby';
import React from 'react'
let arr = [];
arr.length = 5;
const Crypto = () => {
    return (
        <div className='px-6 md:px-32 mt-24'>
            <div className='flex flex-col items-center mt-8 space-y-4 leading-relaxed'>

                <h3 className='font-bold text-2xl md:text-3xl bg-raw-ape text-center w-full md:w-1/2  tracking-wide'
                    data-sal="zoom-out"
                    data-sal-delay="100"
                    data-sal-easing="ease" >
                    Trusted  by the Top Crypto, NFT, <br />
                    and FinTech brands
                </h3>
                <p className='w-full md:w-9/12 text-center px-0 md:px-16 tracking-wider'>
                    The power of ApeInPaper has been successfully tested, and felt in the field by 30+
                    crypto, NFT, and fintech related businesses.
                </p>
            </div>
            <div className='flex flex-wrap justify-center my-4'>
                {Array.apply(null, { length: 10 }).map((x, index) =>
                    <div key={index}
                        data-sal="slide-left"
                        data-sal-delay={`${index + 1}00`}
                        data-sal-easing="ease"
                        className='w-16 h-16 md:w-36 md:h-36 bg-gray-100 p-3 mr-4 md:mr-8  mb-8'></div>
                )}
            </div>
            <div className='flex flex-col items-center  w-full space-y-2'>
                <p className='tracking-wider text-xl text-center'>
                    Your project could be the next.
                </p>
                <p>
                    <Link to="/" className='md:px-64 text-raw-deep-yellow capitalize tracking-wider bg-raw-ape
                   font-semibold text-xl'>
                        Get-In-Touch Now!
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Crypto