import React from "react";
import Slider from "react-slick";

const Goals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      ]
  };
  return (
    <div className="flex flex-col items-center py-20">
        <h2 className="py-5 font-semibold text-gray-100 lg:text-3xl text-2xl px-16 text-center capitalize
        ">Our Goal is to Help Businesses Grow</h2>
        <Slider className="w-4/5 lg:max-w-5xl mx-auto" {...settings}>
          <div className="w-[10rem] p-10">
            <div className="text-gray-100 text-center p-10 bg-gray-100 h-32"></div>
          </div>
          <div className="w-[10rem] p-10">
            <div className="text-gray-100 text-center p-10 bg-gray-100 h-32"></div>
          </div>
          <div className="w-[10rem] p-10">
            <div className="text-gray-100 text-center p-10 bg-gray-100 h-32"></div>
          </div>
          <div className="w-[10rem] p-10">
            <div className="text-gray-100 text-center p-10 bg-gray-100 h-32"></div>
          </div>
        </Slider>
      </div>
    // <div className="flex py-10 w-full px-10 md:px-20 xl:px-0 relative">
    //     <div className="mx-auto lg:max-w-5xl w-full flex flex-col py-10">
    //         <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl capitalize text-center">Our Goal is to Help Businesses Grow</h2>
    //         <div className="gap-10 flex overflow-x-auto w-full mt-10">
    //             <div className="bg-gray-100 w-[16rem] h-[16rem]"></div>
    //             <div className="bg-gray-100 w-[16rem] h-[16rem]"></div>
    //             <div className="bg-gray-100 w-[16rem] h-[16rem]"></div>
    //             <div className="bg-gray-100 w-[16rem] h-[16rem]"></div>
    //             {/* <div className="py-5 bg-gray-100 w-[24rem] h-[16rem]"></div> */}
    //         </div>
    //     </div>
    // </div>
  )
}

export default Goals