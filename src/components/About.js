import React from 'react'

const About = () => {
    return (
        <>

            <div className='about mt-28 sm:mt-0' id="about" >
                <div className='about-left'>
                </div>
                <div className='about-center'

                    data-sal="fade-in"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                >
                    <h3 className='text-2xl sm:text-3xl text-center  px-8 sm:px-0 sm:mx-48 font-bold bg-raw-ape tracking-wide'>
                        ApeInPaper - the loudspeaker for the Crypto <br className='hidden sm:flex' />& Blockchain based project.
                    </h3>
                    <p className='px-6 sm:px-0 sm:mx-44 mt-4 text-center text-lg bg-raw-ape  tracking-wide leading-relaxed'>
                        Every year as cryptocurrency, NFT, and blockchain gain more attraction, it becomes
                        more and more difficult for new cryptos and NFTs projects to attract the right audience
                        and increase their market share. At ApeInPaper, we make it easier for Web3 marketing.
                        We take a content-first approach that provides value to your potential audience and gets
                        them into your project funnel with as little friction as possible.

                    </p>
                </div>
                <div className='about-right'></div>
            </div>
        </>

    )
}

export default About