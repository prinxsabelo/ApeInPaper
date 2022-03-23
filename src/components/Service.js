import { Link } from 'gatsby';
import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
        <div className='service mt-16  px-6 sm:px-32 flex flex-col space-y-6' id="services">
            <h3 className='font-bold text-2xl sm:text-3xl bg-raw-ape  tracking-wide'
                data-sal="zoom-out"
                data-sal-delay="100"
                data-sal-easing="ease"
            >Our Service</h3>
            <div className='flex flex-col space-y-24'>
                {
                    services.map(serv => {
                        const pathToDemoImage = getImage(serv.image);

                        return (
                            <div className='flex flex-col space-y-4 sm:space-y-2' key={serv.id}
                                data-sal="fade-in"
                                data-sal-delay="100"
                                data-sal-easing="ease"
                            >
                                <div className='font-semibold bg-raw-ape tracking-widest'>
                                    {serv.headline}
                                </div>
                                <div className='flex flex-col flex-col-reverse sm:flex-row 
                                                            sm:gap-6 items-center bg-raw-ape'>
                                    <p className='text-base sm:text-lg  tracking-wide  bg-raw-ape w-full 
                                                            sm:w-11/12  tracking-wide leading-relaxed'>
                                        {serv.description.description}
                                    </p>

                                    <GatsbyImage image={pathToDemoImage} alt={serv.headline}
                                        className="object-cover hidden sm:flex w-72 bg-transparent"
                                        data-sal="slide-up"
                                        data-sal-delay="200"
                                        data-sal-easing="ease" />


                                </div>
                                <Link to="/" className="outline rounded-full outline-black font-semibold
                                                 outline-offset-1 outline-1 w-36 bg-raw-deep-yellow
                                                   py-2 flex justify-center hover:font-bold text-xl
                                        hover:outline-raw-deep-yellow hover:cursor-pointer hover:text-white">
                                    Let Us Talk!
                                </Link>
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