import React from 'react'

const WhyApeInPaper = () => {
  const chooseArr = [
    {
      id: 1,
      headline: "We are experienced",
      description: `We have solid years of experience in launching projects from conception through to maturity. 
                  There’s no such thing as a bad idea – just a badly planed and marketed one. 
                  Let us take good care of your innovative venture and watch the sales roll in.
      `
    },
    {
      id: 2,
      headline: "High market intelligence",
      description: `We have depth understanding of the 
                    fintech and cryptocurrency market.  So, 
                    we know how to identify the perfect 
                    audience and walk into the right door, 
                    whether it's an investor, a partner, or a 
                    direct client.
      `
    }, {
      id: 3,
      headline: "Great discovery methodology.",
      description: `We use a tried-and-true four-step 
                    discovery process that is based solely on 
                    real data. The end product is a 
                    comprehensive marketing strategy with 
                    key deliverables, tasks, and timelines that 
                    is incredibly well-crafted.
      `
    }, {
      id: 4,
      headline: "We are hungry minds",
      description: `We're are a network of smart brains, 
                    ambitious, and enthralled by everything 
                    that makes our hearts race. Fintech and 
                    Blockchain are our first love, and we 
                    sincerely think that new ideas in this 
                    space can alter the world for the better.
      `
    }, {
      id: 5,
      headline: "We are content wizard.",
      description: `We are experts in breaking down 
                    complicated concepts into easily 
                    consumable morsels of information 
                    that audiences can comprehend and 
                    interact with.
      `
    }, {
      id: 6,
      headline: "We focus on growth",
      description: `We are growth oriented and apply growth
                    marketing concepts to every domain and 
                    area of our work, guaranteeing that we are 
                    always ready to scale projects success 
                    while optimizing ROI.
      `
    }
  ]
  return (
    <div className='why mt-40 sm:mt-24  px-6 sm:px-32'>

      <h3 className='font-bold text-2xl sm:text-3xl bg-raw-ape tracking-wide'
        data-sal="zoom-out"
        data-sal-delay="100"
        data-sal-easing="ease"
      >Why Choose ApeinPaper?</h3>
      <div className='flex flex-col sm:flex-row mt-2 sm:mt-4 w-full flex-wrap'>
        {chooseArr.map((c, index) =>
          <div className='w-full sm:w-1/2  mt-8 bg-raw-ape' key={index}
            data-sal="fade"
            data-sal-delay={`${index + 1}00`}
            data-sal-easing="ease"
          >
            <div className='w-full sm:w-11/12 flex flex-col space-y-2 sm:space-y-3'>
              <h4 className='text-xl  font-semibold tracking-wider'>{index + 1}. {c.headline}</h4>
              <p className='text-base  tracking-wide leading-relaxed'>{c.description}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default WhyApeInPaper