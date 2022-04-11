import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ButtonLink from './ButtonLink';

const query = graphql`
{
    allContentfulService(filter: {}, sort: {fields: contentful_id}) {
        nodes {
            id
            image {
                id
                gatsbyImageData
            }
            headline
            description {
                description
            }
        }
      }
  }
`


const Service = () => {
    const data = useStaticQuery(query);
    const services = data.allContentfulService.nodes;
    return (
        <div className='service px-4 md:px-32 flex flex-col space-y-4 bg-bg' id="services">
            <div className='h-24'> </div>
            <h3 className='font-bold text-lg md:text-3xl bg-bg tracking-wide'
                data-sal="zoom-out"
                // data-sal-delay="100"
                data-sal-easing="ease"
            >Our Service</h3>
            <div className='flex flex-col space-y-12 md:space-y-16'>
                {
                    services.map(serv => {
                        const pathToDemoImage = getImage(serv.image);

                        return (
                            <div className='flex flex-col space-y-4 md:space-y-2' key={serv.id}
                                data-sal="fade-in"
                                // data-sal-delay="100"
                                data-sal-easing="ease"
                            >
                                <div className='font-semibold bg-bg tracking-widest'>
                                    {serv.headline}
                                </div>
                                <div className='flex flex-col flex-col-reverse md:flex-row 
                                                            md:gap-6 items-center '>
                                    <p className='text-base md:text-lg tracking-wide  bg-bg w-full 
                                                            md:w-11/12  leading-relaxed'>
                                        {serv.description.description}
                                    </p>
                                    <div className='hidden md:flex'>
                                        <GatsbyImage image={pathToDemoImage} alt={serv.headline}
                                            className="object-cover hidden md:flex w-72 bg-transparent"
                                            data-sal="slide-up"
                                            // data-sal-delay="200"
                                            data-sal-easing="ease" />
                                    </div>


                                </div>
                                <div>
                                    <ButtonLink to="/">
                                        Let Us Talk!
                                    </ButtonLink>
                                </div>
                            </div>
                        )
                    }



                    )
                }



            </div>
        </div>
    )
}

export default Service