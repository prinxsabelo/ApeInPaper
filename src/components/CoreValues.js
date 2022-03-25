import { Link } from 'gatsby'
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
        <div className='core mt-16  px-6 md:px-32'>
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
                        data-sal-delay={`${index + 1}00`}
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
            <div className='md:hidden values mt-4 md:mt-8 flex flex-wrap items-start'
            >
                {values.map((v, index) =>
                    <div key={v.id} className='w-full md:max-w-sm mb-4 md:mb-8 bg-core p-3 md:mr-12 rounded-xl'
                        data-sal="fade-up"
                        data-sal-delay={`${index + 1}00`}
                        data-sal-easing="ease"
                    >
                        <div className='w-full p-1 flex flex-col space-y-4'>
                            <h4 className='font-semibold text-xl'> {index < 10 ? '0' : ''}{index + 1}. <span className='mx-1'></span> {v.headline}</h4>
                            <p className='tracking-wide'>
                                {v.description.description}
                            </p>
                        </div>
                    </div>
                )}

            </div>
            <div className='my-24 flex justify-center'>
                <Link to="/" className=' text-raw-deep-yellow capitalize tracking-widest bg-bg text-base md:text-xl
                   font-semibold '>
                    Get A Free 40 Minute Consultation Call
                </Link>
            </div>

        </div>
    )
}

export default CoreValues