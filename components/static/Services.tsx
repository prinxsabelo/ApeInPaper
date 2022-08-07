const Services = ({ourServices}:any) => {
  return (
    <div className="bg-back flex flex-col py-20 w-full px-6 md:px-20 xl:px-0" id="services">
        <div className='h-2 '> </div>

        <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl mx-auto lg:max-w-5xl w-full flex items-center justify-between">Our Service</h2>
        {ourServices.map((items:any, index:any)=>{
            return (
                <div key={index} className="mx-auto lg:max-w-5xl w-full flex items-center justify-between">
                    <div className="w-[32rem]">
                        <p className="text-gray-100 tracking-wide mt-10 lg:mt-8 font-medium">{items.fields.title}</p>
                        <p className="text-gray-100 mt-4">{items.fields.content}</p>
                        <a  href={`https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ`}  target='_blank'>
                            <button className="mt-4 bg-active hover:bg-yellow-700 hover:font-bold rounded-full px-7 py-1.5 capitalize font-medium text-gray-100 text-xl">let's talk</button>
                        </a>
                    </div>
                    <div>
                        <img src={items.fields.image.fields.file.url} className="xl:w-[28rem] w-96 hidden lg:inline-flex" alt="NFT logo" />
                    </div>
                </div>
            )
        })}
            
    </div>
    )
}

export default Services