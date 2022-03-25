import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



const query = graphql`
{
  allContentfulTestimony {
    nodes {
      id
      name
      role
      image {
        gatsbyImageData
      }
      message
    }
  }
}
`
const Testimonials = () => {
    const data = useStaticQuery(query);
    const testimonies = data.allContentfulTestimony.nodes;

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    if (typeof window !== 'undefined' && window.innerWidth < 700) {
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    }

    return (
        <div className='w-full flex flex-col items-center justify-center mt-20  bg-bg px-6 md:px-16 testimony'>

            <h3 className='font-bold text-2xl md:text-3xl bg-bg text-center tracking-wide'>
                Don’t Just Trust Us, Verify
            </h3>

            <div className='w-11/12 md:w-full mt-8'>
                <Slider {...settings} >
                    {testimonies.map(test => {
                        const pathToDemoImage = getImage(test.image);

                        return (
                            <div key={test.id}>
                                <div className='w-full flex flex-col space-y-2  leading-relaxed
                                        justify-center items-center px-1 md:px-2'>
                                    <GatsbyImage image={pathToDemoImage}
                                        className="rounded-full" alt={test.name}
                                    />
                                    <p className='text-center w-full md:w-11/12 bg-bg '>
                                        {test.message}
                                    </p>
                                    <div className='text-center bg-bg'>
                                        <p className='font-semibold'>
                                            {test.name}
                                        </p>
                                        <p className='text-brand mt-1 font-medium tracking-wide'>
                                            {test.role}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        )
                    }

                    )}


                </Slider>
            </div>
        </div>

    )
}

export default Testimonials