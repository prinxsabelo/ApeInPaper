import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const query = graphql`
{
    allContentfulWhyApeInPaper(filter: {}, sort: {fields: createdAt, order: ASC}) {
        nodes {
            id
            headline
            description {
                description
            }
        }
    }
}
`;
const WhyApeInPaper = () => {
    const data = useStaticQuery(query);
    const chooseArr = data.allContentfulWhyApeInPaper.nodes;

    return (
        <div className='why mt-28 px-6 md:px-32'>

            <h3 className='font-bold text-xl md:text-3xl bg-bg tracking-wide'
                data-sal="zoom-out"
                data-sal-delay="100"
                data-sal-easing="ease"
            >Why Choose ApeinPaper?</h3>
            <div className='flex flex-col md:flex-row mt-4 md:mt-4 w-full flex-wrap'>
                {chooseArr.map((c, index) =>
                    <div className='w-full md:w-1/2 my-4 md:mt-8 bg-bg' key={index}
                        data-sal="fade"
                        data-sal-delay={`${index + 1}00`}
                        data-sal-easing="ease"
                    >
                        <div className='w-full md:w-11/12 flex flex-col space-y-2 md:space-y-3'>
                            <h4 className='text-xl  font-semibold tracking-wide'>{index + 1}. {c.headline}</h4>
                            <p className='text-base  tracking-wide leading-relaxed'>{c.description.description}</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default WhyApeInPaper