import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from '../assets/images/test1.png';
import test2 from '../assets/images/test2.svg';
import test3 from '../assets/images/test3.png';

const Testimonials = () => {
    const testimonies = [
        {
            id: 1,
            image: test1,
            name: "Emily R.",
            role: "Marketing Director",
            message: "We put our trust in ApeInPaper and they delivered, making sure our needs were met and deadlines were always hit"
        },
        {
            id: 2,
            image: test2,
            name: "Thomas S.",
            role: "Motion Designer",
            message: "ApeInPaper enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable."
        },
        {
            id: 3,
            image: test3,
            name: "Jennie T.",
            role: "Senior Developer",
            message: "ApeInPaper enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable."
        },

    ]
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

            <h3 className='font-bold text-2xl md:text-3xl bg-raw-ape text-center tracking-wide'>
                Don’t Just Trust Us, Verify
            </h3>

            <div className='w-11/12 md:w-full mt-8'>
                <Slider {...settings} >
                    {testimonies.map(test =>
                        <div key={test.id}>
                            <div className='w-full flex flex-col space-y-2  leading-relaxed
                                        justify-center items-center px-1 md:px-2'>
                                <img src={test.image} alt={test.name} className="rounded-full" />
                                <p className='text-center w-full md:w-11/12 bg-raw-ape '>
                                    {test.message}
                                </p>
                                <div className='text-center bg-raw-ape'>
                                    <p className='font-semibold'>
                                        {test.name}
                                    </p>
                                    <p className='text-yellow mt-1 font-medium tracking-wide'>
                                        {test.role}
                                    </p>
                                </div>

                            </div>

                        </div>
                    )}


                </Slider>
            </div>
        </div>

    )
}

export default Testimonials