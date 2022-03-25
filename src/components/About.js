import React from 'react'

const About = () => {
    return (
        <>

            <div id="about" >
                <div className='h-24 '> </div>
                <div className='flex about'>
                    <div className='about-left'>
                    </div>
                    <div className='about-center flex flex-col justify-center'

                    >
                        <h3 className='text-2xl md:text-3xl text-center  px-6 md:px-0 md:mx-48 font-bold bg-raw-ape tracking-wide'>
                            ApeInPaper - the loudspeaker for the Crypto <br className='hidden md:flex' />& Blockchain based project.
                        </h3>
                        <p className='px-6 md:px-0 md:mx-44 mt-4 text-center text-base md:text-lg bg-bg
                              tracking-wide leading-loose'>
                            Every year as cryptocurrency, NFT, and blockchain gain more attraction, it becomes
                            more and more difficult for new cryptos and NFTs projects to attract the right audience
                            and increase their market share. At ApeInPaper, we make it easier for Web3 marketing.
                            We take a content-first approach that provides value to your potential audience and gets
                            them into your project funnel with as little friction as possible.

                        </p>
                    </div>
                    <div className='about-right'></div>
                </div>

            </div>
        </>

    )
}

export default About