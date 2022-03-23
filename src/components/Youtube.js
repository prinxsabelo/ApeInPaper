import React from 'react'
import utube from '../assets/images/utube.svg';
const Youtube = () => {
    return (
        <div className='w-full   px-6 sm:px-32'
            data-sal="fade-in"
            data-sal-delay="0"
            data-sal-easing="ease"
        >
            <img src={utube} alt="youtube" className=' w-full' />
        </div>
    )
}

export default Youtube