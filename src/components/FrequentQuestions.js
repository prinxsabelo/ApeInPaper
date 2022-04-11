import React from 'react'

const firstArr = [
    {
        question: `What’s methods of payment do you accept?`,
        answer: `We accept BNB / ETH / BTC`
    }, {
        question: `Why should I trust you?`,
        answer: `We have worked with a number of brands 
                    and can send you proof of our results if 
                    you ask. We also upload our latest success 
                    stories so that you can see what you get. 
        `
    }, {
        question: `How fast can I start working with you?`,
        answer: `Working with ApeInPaper is pretty easy. All 
        you have to do is send us a message by 
        using the contact us button on this page 
        or email us via Hello@apeinpaper.io for 
        any enquires.`
    }, {
        question: `Can we resell your services?`,
        answer: `As long as you pay upfront full amount to 
        us you can put any pricing for our services 
        and resell them with any commission. But 
        you have to let us know you’re working 
        with us as a middle man by signing up an 
        affiliate partner. Once $50 000 revenue is 
        reached through you, you get extra 2.5% 
        commission. Once $100 000 revenue is 
        reached, you get 5% commission instead 
        of 2.5%.
        `
    }
];
const secondArr = [
    {
        question: `How is APE IN PAPER different from other 
        cryptocurrency and NFT marketing agencies?`,
        answer: `For starters, we don’t have a one-size-fits-all marketing package. We understand that every cryptocurrency and NFT company has a different definition of success and growth, so we work with you to create a unique package for your needs, goals and budget. We also understand the process of scaling from zero to six figures and more. Thus, our team also advises you on how to adjust your marketing strategy to meet your evolving goals. We use a combination of marketing best practices, cutting-edge technologies, and meaningful data to inform and customize our marketing strategy for your business.
        `
    },
    {
        question: `What should my initial marketing budget be like 
        to get started with the crypto or NFT marketing?`,
        answer: `Your marketing budget depends on your business 
        goals. There is no hard and fast rule of the amount 
        of initial investment required to get started. You can 
        get in touch with our experience crypto marketing 
        experts for an initial consultation, and we will help 
        you decide the best budget for your crypto 
        marketing and advertising campaigns.
        `
    }

]


const FrequentQuestions = () => {
    return (
        <div className='pt-14 px-4 md:px-32 bg-bg '>
            <h3 className='font-bold text-lg md:text-3xl  tracking-wide'>
                Frequently Asked Questions?
            </h3>
            <div className='flex flex-col md:flex-row w-full items-start md:space-x-8'>
                <div className='w-full md:w-1/2 flex flex-col'>
                    {firstArr.map((q, index) => (
                        <div key={index} className='w-full md:w-11/12 my-3 flex-1 p-2  rounded-xl 
                                        flex flex-col space-y-2'
                            data-sal="fade"
                            // data-sal-delay={`${index + 1}00`}
                            data-sal-easing="slide-up">
                            <p className='font-bold tracking-wide'>
                                {q.question}
                            </p>
                            <p className='tracking-wide leading-relaxed'>
                                {q.answer}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    {secondArr.map((q, index) => (
                        <div key={index} className='w-full md:w-11/12 my-3 flex-1 p-2  rounded-xl 
                                        flex flex-col space-y-2'
                            data-sal="fade"
                            // data-sal-delay={`${index + 1}00`}
                            data-sal-easing="slide-up">
                            <p className='font-bold tracking-wide'>
                                {q.question}
                            </p>
                            <p className='tracking-wide leading-relaxed'>
                                {q.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FrequentQuestions