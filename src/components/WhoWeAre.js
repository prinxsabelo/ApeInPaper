import React from 'react'
import ButtonLink from './ButtonLink';
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const queryMedia = graphql`
  {
    contentfulWhoWeAreImage {
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
    }
  }
`

const WhoWeAre = () => {
    const media = useStaticQuery(queryMedia);
    const pathToDemoImage = getImage(media.contentfulWhoWeAreImage.image);
    return (
        <div className='px-4 md:px-32 bg-bg'>
            <h3 className='font-bold text-lg md:text-3xl  tracking-wide'
                data-sal="zoom-out"
                // data-sal-delay="100"
                data-sal-easing="ease"
            >Who We Are?</h3>
            <div className='flex flex-col md:flex-row items-center mt-4'
                data-sal="fade"
                // data-sal-delay="100"
                data-sal-easing="ease"
            >
                <div className='hidden md:flex md:w-2/5'>
                    <div className='w-9/12'>
                        <GatsbyImage image={pathToDemoImage} alt="" />
                    </div>
                </div>
                <div className='w-full md:w-3/5 flex flex-col space-y-4 text-base md:text-lg' >
                    <p>
                        Not an agency, but a network of passionate, experienced, qualified, and insured Marketing and Content Development gurus that work closely with Crypto, NFT, and FinTech companies as an inhouse remote partners to help them scale to the moon.
                    </p>
                    <p className='hidden md:flex'>
                        With our proven track record of clients encompassing a wide cross-section of the blockchain industry. We tailor each engagement to the specific needs, requirements and skills gaps of the teams we are working with. Whether it’s a small team looking to bring on experienced Content Specialist or Marketing staff who can fill a lot of copywriting and marketing skills gaps, or larger projects with multiple teams involved, we’ve worked with projects big and small.

                    </p>
                    <p className='hidden md:flex'>
                        ApeInPaper believe in the power of collaboration,
                        co-creation, data and ideas to create maximum impact, and we take an integrated approach to marketing and communications with a heavy emphasis on working with clients to set up proper tracking and accreditation processes within their products to measure content and campaign performance at a very granular level against KPI’s.
                    </p>
                    <div className='pt-2'>
                        <ButtonLink to="/">
                            Contact Us Today!
                        </ButtonLink>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhoWeAre