import React from 'react'
import ButtonLink from './ButtonLink';
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const queryMedia = graphql`
  {
    contentfulStandOutMedia {
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
const StandOut = () => {
    const media = useStaticQuery(queryMedia);
    // const image = media.contentfulStandOutMedia.image;
    const pathToDemoImage = getImage(media.contentfulStandOutMedia.image);

    return (
        <div className='pt-14 md:pt-24 px-4 md:px-32 flex flex-col flex-col-reverse md:flex-row items-center bg-bg' >
            <div className='h-24'> </div>
            <div className='flex-auto flex flex-col space-y-8 md:space-y-16 w-full md:w-2/5 ' id="white-paper"

            >
                <div className='w-full md:pr-8 flex flex-col space-y-2 md:space-y-4 '
                    data-sal="fade"
                    // data-sal-delay="100"
                    data-sal-easing="ease">
                    <h3 className='font-bold text-lg md:text-3xl  tracking-wide'>
                        Stand out with ApeInPaper
                    </h3>
                    <p className='w-full md:w-10/12 tracking-wide 
                           text-base md:text-lg md:tracking-wider bg-bg leading-relaxed'>
                        In a crowded crypto space of lookalike projects
                        your company has to stand out to be successful.
                        Having a great idea alone is not enough anymore.

                    </p>
                </div>
                <div className='w-full md:pr-8 flex flex-col space-y-2 md:space-y-4'
                    data-sal="fade"
                    // data-sal-delay="100"
                    data-sal-easing="ease">
                    <h3 className='font-bold text-lg md:text-3xl  tracking-wide'>
                        Take Advantage of Our Free
                        Consultation Today!
                    </h3>
                    <p className='w-full text-base md:text-lg md:w-10/12   bg-bg  leading-relaxed'>
                        Get a Free 30 mins consulting session with our
                        industry experts. Clear your doubts, know where
                        your project can be improved, take everything to
                        the next level and much more!

                    </p>
                </div>
                <ButtonLink to="https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ">Let us Talk</ButtonLink>
            </div>
            <div className='w-full md:w-1/2 hidden md:flex'
                data-sal="slide-up"
                // data-sal-delay="100"
                data-sal-easing="ease">
                <GatsbyImage image={pathToDemoImage} alt=""
                />
            </div>
        </div>
    )
}

export default StandOut