import React from "react";
import Slider from "react-slick";

const Verify = ({commentSection}:any) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            }
          },
          {
            breakpoint: 728,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            }
          },
          ]
      };
  return (
    <div className="flex flex-col items-center">
        <h2 className="py-5 font-semibold text-gray-100 lg:text-3xl text-2xl  text-center capitalize">Don't just trust us, verify</h2>
        <Slider className="w-4/5 lg:max-w-5xl mx-auto" {...settings}>
          {commentSection.map((item:any, index:any)=>{
            return (
              <div key={index} className="w-[10rem] p-10">
                <div className="text-gray-100 h-full text-center">
                    <p className="font-light">{item.fields.comment}</p>
                    <h3 className="font-semibold mt-5 text-base">{item.fields.name}</h3>
                    <p className="font-light text-sm">{item.fields.role}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
  )
}

export default Verify