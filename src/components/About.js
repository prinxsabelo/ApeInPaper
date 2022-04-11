import React from 'react'
import aboutImg from '../assets/images/about.svg'
const About = () => {
    return (
        <>

            <div id="about" >
                <div className='h-24 '> </div>
                <div className='flex about'>
                    <div className='about-left'>
                    </div>
                    <div className='about-center flex flex-col justify-center bg-bg'

                    >
                        <h3 className='text-lg md:text-3xl text-left md:text-center  px-4 md:px-0 md:mx-48 font-bold bg-raw-ape tracking-wide'>
                            ApeInPaper - the loudspeaker for the Crypto <br className='hidden md:flex' />& Blockchain based project.
                        </h3>
                        <div className='w-full md:hidden flex justify-center relative'
                            data-sal="zoom-out"
                            // data-sal-delay="100"
                            data-sal-easing="ease">
                            <img src={aboutImg} className="w-8/12" alt='' />
                        </div>

                        <div className='px-4 md:px-0 md:mx-44 mt-4 text-left md:text-center text-base  md:text-lg bg-bg
                              tracking-wide leading-loose flex flex-col space-y-4 md:space-y-1'>
                            <div>
                                Every year as cryptocurrency, NFT, and blockchain gain more attraction, it becomes
                                more and more difficult for new cryptos and NFTs projects to attract the right audience
                                and increase their market share. At ApeInPaper, we make it easier for Web3 marketing.
                            </div>
                            <div>
                                We take a content-first approach that provides value to your potential audience and gets
                                them into your project funnel with as little friction as possible.

                            </div>

                        </div>
                    </div>
                    <div className='about-right'></div>
                </div>

            </div>
        </>

    )
}

export default About