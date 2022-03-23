import { Link } from 'gatsby'
import React from 'react'

const CoreValues = () => {
  const values = [
    {
      id: 1,
      headline: "Transparent",
      description: ` See exactly what you pay for and 
                    where your money goes`
    },
    {
      id: 2,
      headline: "Flexbile",
      description: `No standard packages. Every plan
                     is customized as per your objectives`
    },
    {
      id: 3,
      headline: "Data-driven",
      description: `Track and optimize all major 
                    marketing effort metrics & KPIs`
    },
    {
      id: 4,
      headline: "Launch Support",
      description: `Whether launching a new brand 
                    or an entire new company, your 
                    first splash matters. We’ve launched
                    over 500 brands – yours could be next.
       `
    }
  ]
  return (
    <div className='core-values mt-16  px-6 sm:px-32'>
      <div className='core-right'></div>
      <h3 className='font-bold text-2xl sm:text-3xl bg-raw-ape'
        data-sal="zoom-out"
        data-sal-delay="100"
        data-sal-easing="ease"
      >Our Core Values</h3>
      <div className='values flex flex-wrap items-start'
      >
        {values.map((v, index) =>
          <div key={v.id} className='w-full sm:max-w-xs my-4 bg-raw-core-values p-3 sm:mr-12 rounded-xl'
            data-sal="slide-right"
            data-sal-delay={`${index + 1}00`}
            data-sal-easing="ease"
          >
            <div className='w-full p-1 flex flex-col space-y-4'>
              <h4 className='font-semibold text-xl'> {index < 10 ? '0' : ''}{index + 1}. <span className='mx-1'></span> {v.headline}</h4>
              <p className='tracking-wider'>
                {v.description}
              </p>
            </div>
          </div>
        )}

      </div>
      <div className='mt-24 mb-16'>
        <Link to="/" className='sm:px-44 text-raw-deep-yellow capitalize tracking-widest bg-raw-ape
                   font-semibold text-xl'>
          Get A Free 40 Minute Consultation Call
        </Link>
      </div>

    </div>
  )
}

export default CoreValues