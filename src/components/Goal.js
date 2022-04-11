import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Goal = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    if (typeof window !== 'undefined' && window.innerWidth < 700) {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
    }
    return (
        <div className='pt-14 px-4 md:px-32 flex flex-col items-center space-y-8'>
            <h3 className='font-bold text-lg md:text-3xl  tracking-wide'>
                Our Goal is to Help Businesses Grow
            </h3>
            <div className='w-11/12 md:w-full mt-8'>

                <Slider {...settings} >
                    {Array.apply(null, { length: 10 }).map((x, index) =>
                        <div className='w-10/12' key={index}>
                            <div className='h-24 md:h-36  bg-gray-100 p-3 mr-4  '></div>

                        </div>
                    )}
                </Slider>
            </div>
        </div>

    )
}

export default Goal