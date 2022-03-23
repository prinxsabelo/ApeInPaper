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
  allContentfulTeam(sort: {order: ASC, fields: contentful_id}) {
    nodes {
      name
      role
      twitter
      facebook
      linkedin
      id
      image {
        gatsbyImageData
      }
    }
  }
}
`


const Team = () => {
    const data = useStaticQuery(query);
    const members = data.allContentfulTeam.nodes;

    return (
        <div className='mt-16  px-6 sm:px-32'>
            <h3 className='font-bold text-2xl sm:text-3xl bg-raw-ape text-center sm:text-center tracking-wide text-center'>The Brightest Minds at Your Service</h3>
            <p className='mt-4 tracking-widest sm:tracking-wide leading-7 text-center '>
                Our team of tech-savvy marketers, copywriters, PR pros and growth hackers
                works non-stop to keep clients a head of the game. Dedicated to grow your
                company by bringing our diverse range of backgrounds, unique sets of skills,
                and decades of experience launching multiple fintech b2c &amp; b2b online
                products and services to the blockchain sector.
            </p>
            <div className='mt-24 flex flex-col items-center justify-center'>
                <h4 className='font-bold text-2xl sm:text-3xl bg-raw-ape  tracking-wide'>
                    Meet The Team
                </h4>
                <div className='flex flex-col sm:flex-row w-full items-center flex-wrap mt-6'>
                    {members.map((m, index) => {
                        const pathToDemoImage = getImage(m.image);
                        return (
                            <div key={m.id} className='bg-white w-10/12 sm:w-1/4 flex flex-col py-6  sm:py-8
                                     justify-center items-center px-4
                                     space-y-3 text-black rounded-2xl sm:mr-12 mb-12'
                                data-sal="fade"
                                data-sal-delay={`${index + 1}00`}
                                data-sal-easing="ease"
                            >
                                <div>
                                    <GatsbyImage image={pathToDemoImage} alt={m.name} className="rounded-full" />
                                </div>
                                <div className='text-lg font-semibold tracking-wider '>
                                    {m.name}
                                </div>
                                <div className='text-sm text-center font-medium tracking-wider'>
                                    {m.role}
                                </div>
                                <div className='flex space-x-3'>

                                    <a href='twitter.com'>
                                        <FaTwitter className="text-raw-yellow text-2xl" ></FaTwitter>
                                    </a>
                                    <a href='instagram.com'>
                                        <FaInstagram className="text-raw-yellow text-2xl"></FaInstagram>
                                    </a>

                                    <a href='linkedin.com'>
                                        <FaLinkedin className="text-raw-yellow text-2xl"></FaLinkedin>
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