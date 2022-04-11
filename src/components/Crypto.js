import React from 'react'
import ButtonLink from './ButtonLink';
let arr = [];
arr.length = 5;
const Crypto = () => {
    return (
        <div className='px-4 md:px-32 pt-24 bg-bg'>
            <div className='flex flex-col items-center mt-8 space-y-4 leading-relaxed'>

                <h3 className='font-bold text-lg md:text-3xl  tracking-wide  text-center w-full md:w-1/2'
                    data-sal="zoom-out"
                    // data-sal-delay="100"
                    data-sal-easing="ease" >
                    Trusted  by the Top Crypto, NFT, <br />
                    and FinTech brands
                </h3>
                <p className='w-full md:w-9/12 text-base md:text-lg text-center px-0 md:px-16 tracking-wider'>
                    The power of ApeInPaper has been successfully tested, and felt in the field by 30+
                    crypto, NFT, and fintech related businesses.
                </p>
            </div>
            <div className='flex flex-wrap justify-center my-4'>
                {Array.apply(null, { length: 10 }).map((x, index) =>
                    <div key={index}
                        data-sal="slide-left"
                        // data-sal-delay={`${index + 1}00`}
                        data-sal-easing="ease"
                        className='w-16 h-16 md:w-36 md:h-36 bg-gray-100 p-3 mr-4 md:mr-8  mb-8'></div>
                )}
            </div>
            <div className='flex flex-col items-center  w-full space-y-4'>
                <p className='tracking-wider text-base md:text-lg text-center font-medium'>
                    Your project could be the next.
                </p>

                <ButtonLink to="/" className=' tracking-wider font-black  
                        bg-transparent md:bg-brand text-yellow-50  p-2
                             md:px-8 text-base md:py-4 md:text-xl '>
                    Get-In-Touch Now!
                </ButtonLink>


            </div>
        </div>
    )
}

export default Crypto