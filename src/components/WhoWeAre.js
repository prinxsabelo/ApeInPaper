import React from 'react'
import { Link } from 'gatsby';
import kerfin from '../assets/images/kerfin.png';


const WhoWeAre = () => {
    return (
        <div className='px-6 sm:px-32 bg-bg'>
            <h3 className='font-bold text-2xl sm:text-3xl bg-raw-ape  tracking-wide'
                data-sal="zoom-out"
                data-sal-delay="100"
                data-sal-easing="ease"
            >Who We Are?</h3>
            <div className='flex flex-col sm:flex-row items-center mt-4'
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
            >
                <div className='hidden sm:flex sm:w-2/5'>
                    <div className='w-9/12'>
                        <img src={kerfin} alt="kerfin" className='w-full h-full' />

                    </div>
                </div>
                <div className='w-full sm:w-3/5 flex flex-col space-y-4'>
                    <p>
                        Not an agency, but a network of passionate, experienced, qualified, and insured Marketing and Content Development gurus that work closely with Crypto, NFT, and FinTech companies as an inhouse remote partners to help them scale to the moon.
                    </p>
                    <p className='hidden sm:flex'>
                        With our proven track record of clients encompassing a wide cross-section of the blockchain industry. We tailor each engagement to the specific needs, requirements and skills gaps of the teams we are working with. Whether it’s a small team looking to bring on experienced Content Specialist or Marketing staff who can fill a lot of copywriting and marketing skills gaps, or larger projects with multiple teams involved, we’ve worked with projects big and small.

                    </p>
                    <p className='hidden sm:flex'>
                        ApeInPaper believe in the power of collaboration,
                        co-creation, data and ideas to create maximum impact, and we take an integrated approach to marketing and communications with a heavy emphasis on working with clients to set up proper tracking and accreditation processes within their products to measure content and campaign performance at a very granular level against KPI’s.
                    </p>
                    <div>
                        <Link to="/" className="outline rounded-full outline-black font-semibold
                                             outline-offset-1 outline-1  bg-yellow
                                               w-56 py-2 flex justify-center hover:font-bold text-xl
                                    hover:outline-yellow hover:cursor-pointer hover:text-white">
                            Contact Us Today!
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhoWeAre