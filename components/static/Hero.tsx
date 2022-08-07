import styled from 'styled-components';
import React from 'react';

const Bgimage = styled.div`
  @media screen and (max-width: 1024px) {
    background-color: rgba(31, 22, 0, 0.7);
    background-image: url('/assets/images/ape-man.png');
    background-position: center;
    background-size: contain;
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
  }
`

const Hero = ({herosection, heroSectionVideo}:any) => {
  return (
    <div className="flex flex-col lg:h-fit lg:justify-between pt-40 pb-8 xl:px-0" id="home">
        <Bgimage className='mx-auto lg:max-w-5xl px-5'>
          <div className="flex items-center justify-between lg:h-5/6 h-full">
            <div className="flex flex-col lg:w-1/2 w-full px-3">
                  <h1 className="capitalize text-4xl lg:text-5xl pr-8 font-semibold text-gray-100">{herosection.map((items:any)=>items.fields.title)}</h1>
                  <p className="text-gray-100 text-lg mt-4 w-11/12 pr-8">{herosection.map((items:any)=>items.fields.subTitle)}</p>
                  <a  href={`https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ`}  target='_blank'>
                    <button className="border-2 mt-7 border-active hover:bg-active hover:text-white hover:font-bold rounded-full px-5 py-2 text-white w-fit">Schedule a Call</button>
                  </a>
              </div>
              <img src="/assets/images/ape-man.png" className="lg:inline-flex hidden w-2/5" alt="Ape-Man"/>
          </div>
        </Bgimage>
        <div className='md:h-64 mt-24 lg:mt-44 h-80 relative'>
          <div className='h-96 grid stripes w-full'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <iframe className='w-full h-full hero-vid' src={heroSectionVideo[0].fields.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </span>
          </div>
        </div>
    </div>
  )
}
export default Hero