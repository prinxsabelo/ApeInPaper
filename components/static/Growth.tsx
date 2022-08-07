const Growth = ({ourGrowth}:any) => {
  return (
    <div className="flex py-20 w-full px-6 md:px-20 xl:px-0">
            <div className="mx-auto lg:max-w-5xl w-full flex flex-col">
                {ourGrowth.map((items:any, index:any)=>{
                    return (
                        <div key={index}>
                            <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl capitalize lg:w-80 sm:w-[22rem] w-full">{items.fields.title}</h2>
                            <div className="w-full flex lg:flex-row flex-col-reverse justify-between items-center lg:mt-5 mt-16">
                                <div className="lg:w-[30rem] w-full lg:mt-0 mt-10 flex flex-col gap-5 text-gray-100">
                                    {items.fields.content.map((items:any, index:any)=> (
                                        <p key={index}>{items.content}</p>
                                        )
                                    )}
                                </div>
                                <img src={items.fields.image.fields.file.url} className="lg:inline-flex w-80 xl:w-96 h-fit" alt="Bank image" />
                            </div>
                        </div>
                    )
                })}
                <p className="text-gray-100 text-center mt-20 lg:px-32 md:px-20 px-0 lg:text-base text-lg lg:font-normal font-semibold">We’d love to learn more about the future of your business and show how our creativity and influence can deliver results that drive success.</p>
                <a className="flex justify-center" href={`https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ`}  target='_blank'>
                <button className="bg-active rounded-full px-7 py-2 capitalize font-medium text-gray-100 text-xl w-fit mt-8 mx-auto  hover:bg-yellow-700 hover:font-bold">Let's Talk</button>
                </a>
            </div>
        </div>
  )
}

export default Growth