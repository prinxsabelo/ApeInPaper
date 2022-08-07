import AboutList from "./AboutList"
import styled from 'styled-components';

const Bgimage = styled.div`
  @media screen and (max-width: 1280px) {
    background-color: rgba(31, 22, 0, 0.8);
    background-image: url('/assets/images/left-cube.png');
    background-position: center;
    background-size: contain;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
  }
`
const About = ({aboutsection, aboutSectionList}:any) => {
  return (
    <>
        <div className="" id="aboutus">
        <div className='lg:h-16'> </div>

        <Bgimage className="flex flex-col justify-center items-center relative py-20 px-6 lg:px-0 md:max-w-3xl md:mx-auto lg:max-w-full">
            <img src="/assets/images/left-cube.png" className="left-cube w-[28rem] xl:absolute xl:block hidden z-0" alt="Left Cube"/>
            <h2 className="text-center font-semibold text-3xl text-gray-100 lg:max-w-3xl">{aboutsection.map((items:any)=>items.fields.title)}</h2>
            <p className="text-lg text-gray-100 mt-5 lg:max-w-4xl text-center z-10">{aboutsection.map((items:any)=>items.fields.subTitle)}</p>
            <img src="/assets/images/right-cube.png" className="right-cube w-[32rem] xl:absolute xl:block hidden z-0" alt="Right Cube"/>
        </Bgimage>
        <AboutList aboutSectionList={aboutSectionList}/>
    </div>
    </>
    
  )
}

export default About