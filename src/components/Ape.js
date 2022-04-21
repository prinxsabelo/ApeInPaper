import React from 'react'
import ButtonLink from './ButtonLink';
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


export const query = graphql`
  {
    allContentfulCover {
      nodes {
        id
        headline
        description {
          description
        }
        image {
          id
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`


const Ape = () => {
  const data = useStaticQuery(query);
  const cover = data.allContentfulCover.nodes;

  return (
    <>
      {cover.map(c => {
        const pathToImage = getImage(c.image);
        return (
          <div key={c.id} className='mt-16 flex flex-col flex-col-reverse md:flex-row px-4 md:px-32 md:gap-12 md:mt-24'>

            <div className='w-full md:w-1/2 flex flex-col  justify-center space-y-1 md:space-y-3 bg-bg md:bg-transparent'
              data-sal="fade"
              data-sal-delay="100"
              data-sal-easing="ease"
            >

              <h2 className=' text-3xl md:text-5xl md:py-4 md:pr-6 tracking-wide font-semibold'>{c.headline}</h2>
              <p className='text-base md:text-xl tracking-wide leading-relaxed	pb-4 md:pr-4'>
                {c.description.description}
              </p>
              {/* <Link to="/" className="outline rounded-full outline-offset-4 outline-1 w-48 flex justify-center 
                               tracking-wide hover:outline-hover hover:cursor-pointer hover:text-brand 
                               text-base md:text-xl py-2">
   
                   </Link> */}
              <ButtonLink to="https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ" className='bg-transparent outline outline-offset-4
                                          hover:bg-brand hover:text-yellow-50  outline-1 outline-brand'>
                Schedule a Call
              </ButtonLink>
            </div>
            <div className='mt-0'>
              <GatsbyImage alt='' image={pathToImage} />
              {/* <img src={cover} alt="cover" className='mt-4'
                                        data-sal="zoom-in"
                                        data-sal-delay="300"
                                        data-sal-easing="ease"

                                    /> */}

            </div>
          </div>


        )
      }


      )}
    </>

  );
}
export default Ape