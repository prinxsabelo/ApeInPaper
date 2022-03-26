import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import {
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa"

const query = graphql`
{
  allContentfulTeam(filter: {}, sort: {fields: createdAt, order: ASC}) {
    nodes {
      name
      image {
        gatsbyImageData
      }
      id
      role
    }
  }
}
`


const Team = () => {
    const data = useStaticQuery(query);
    const members = data.allContentfulTeam.nodes;

    return (
        <div className='mt-24  px-6 md:px-32'>
            <h3 className='font-bold text-2xl md:text-3xl bg-bg  tracking-wide text-center md:text-left'>The Brightest Minds at Your Service</h3>
            <p className='mt-2 tracking-wide leading-7 text-base w-full md:w-11/12 bg-bg text-center md:text-left'>
                Our team of tech-savvy marketers, copywriters, PR pros and growth hackers
                works non-stop to keep clients a head of the game. Dedicated to grow your
                company by bringing our diverse range of backgrounds, unique sets of skills,
                and decades of experience launching multiple fintech b2c &amp; b2b online
                products and services to the blockchain sector.
            </p>
            <div className='mt-24 flex flex-col items-center justify-center'>
                <h4 className='font-bold text-2xl md:text-3xl bg-bg  tracking-wide'>
                    Meet The Team
                </h4>
                <div className='flex flex-col md:flex-row w-full items-center flex-wrap mt-6'>
                    {members.map((m, index) => {
                        const pathToDemoImage = getImage(m.image);
                        return (

                            <div key={m.id} className='bg-white w-full md:w-1/4 flex flex-col py-4  md:py-8
                                     justify-center items-center px-6 
                                     space-y-2 text-black rounded-3xl mb-6 md:mr-12  md:mb-12'
                                data-sal="fade"
                                data-sal-delay={`${index + 1}00`}
                                data-sal-easing="ease"
                            >
                                <div>
                                    <GatsbyImage image={pathToDemoImage} alt={m.name} className="rounded-full shadow" />
                                </div>
                                <div className=' font-bold tracking-wide text-brand'>
                                    {m.name}
                                </div>
                                <div className='text-sm text-center font-medium tracking-wide'>
                                    {m.role}
                                </div>
                                <div className='flex space-x-4'>

                                    <a href='twitter.com'>
                                        <FaTwitter className="text-brand text-2xl" ></FaTwitter>
                                    </a>
                                    <a href='instagram.com'>
                                        <FaInstagram className="text-brand text-2xl"></FaInstagram>
                                    </a>

                                    <a href='linkedin.com'>
                                        <FaLinkedin className="text-brand text-2xl"></FaLinkedin>
                                    </a>
                                </div>
                            </div>



                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Team