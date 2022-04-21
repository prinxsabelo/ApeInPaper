import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
                {
                    allContentfulCoreValue {
                        nodes {
                            id
                            headline
                            description {
                                description
                            }
                       
                        }
                    }
                }
`

const CoreValues = () => {
    const data = useStaticQuery(query);
    const values = data.allContentfulCoreValue.nodes;

    return (
        <div className='core mt-16  px-4 md:px-32 bg-bg'>
            <div className='core-right'></div>
            <h3 className='font-bold text-2xl md:text-3xl bg-raw-ape'
                data-sal="zoom-out"
                data-sal-delay="100"
                data-sal-easing="ease"
            >Our Core Values</h3>
            <div className='hidden md:flex values mt-4 md:mt-8 flex-wrap items-start'
            >
                {values.map((v, index) =>
                    <div key={v.id} className='w-full md:max-w-sm mb-4 md:mb-8 bg-core p-3 md:mr-12 rounded-xl'
                        data-sal="slide-right"
                        // data-sal-delay={`${index + 1}00`}
                        data-sal-easing="ease"
                    >
                        <div className='w-full p-1 flex flex-col space-y-4'>
                            <h4 className='font-semibold text-xl'> {index < 10 ? '0' : ''}{index + 1}. <span className='mx-1'></span> {v.headline}</h4>
                            {v.description && v.description.description &&
                                <p className='tracking-wide'>
                                    {v.description.description}
                                </p>
                            }

                        </div>
                    </div>
                )}

            </div>
            <div className='flex md:hidden'>
                <div className='w-10/12'>
                    <div className='md:hidden values mt-4 md:mt-8 flex flex-col space-y-4 items-start'
                    >
                        {values.map((v, index) =>
                            <div key={v.id} className='w-full md:max-w-sm bg-core p-3 md:mr-12 rounded-xl'
                                data-sal="fade-up"
                                // data-sal-delay={`${index + 1}00`}
                                data-sal-easing="ease"
                            >
                                <div className='w-full p-1 flex flex-col space-y-4'>
                                    <h4 className='font-semibold text-xl'> {index < 10 ? '0' : ''}{index + 1}. <span className='mx-1'></span> {v.headline}</h4>
                                    <p className='tracking-wide text-sm'>
                                        {v.description.description}
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                <div className='w-2/12  flex flex-col '>
                    <div className='core1'></div>
                    <div className='core2'></div>

                </div>
            </div>

            <div className='my-12 md:my-24 flex justify-center'>
                <a href="https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ" className='md:bg-brand text-brand md:text-yellow-50 font-black text-base md:text-xl 
                                    md:px-6 md:py-3  md:rounded-full  hover:outline outline-offset-1 hover:outline-1 '>
                    Get A Free 40 Minute Consultation Call
                </a>

            </div>

        </div>
    )
}

export default CoreValues