const Work = ({workingWithUsSection}:any) => {
  return (
    <div className="flex w-full px-6 md:px-20 xl:px-0">
        <div className="mx-auto lg:max-w-5xl w-full flex flex-col">
            {workingWithUsSection.map((item:any, index:any)=>{
                return (
                    <div key={index} className="w-full flex justify-between sm:items-center sm:flex-row flex-col-reverse items-start py-10">
                        <div className="lg:w-[24rem] w-full flex flex-col sm:gap-10 gap-16 sm:mt-7 mt-3 lg:mt-0">
                            <div>
                                <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl capitalize">{item.fields.title}</h2>
                                <p className="text-gray-100 mt-7 font-medium">{item.fields.content}</p>
                                <a  href={`https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ`}  target='_blank'>
                                    <button className="bg-active rounded-full px-7 py-2 capitalize font-medium text-gray-100 text-xl w-fit mt-7  hover:bg-yellow-700 hover:font-bold">Let's Talk</button>
                                </a>
                            </div>
                        </div>
                        <img src={item.fields.image.fields.file.url} className="sm:inline-flex md:w-80 w-52 xl:w-96 h-fit mt-7 lg:mt-0" alt={item.fields.image.fields.title} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Work