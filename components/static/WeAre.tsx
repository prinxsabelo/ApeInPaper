const WeAre = ({whoWeAre}:any) => {
  return (
    <div className="bg-about flex py-20 w-full px-6 md:px-20 xl:px-0">
        <div className="mx-auto lg:max-w-5xl w-full flex flex-col">
            <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl capitalize">who we are?</h2>
            {whoWeAre.map((item:any, index:any)=>{
              return (
                <div key={index} className="w-full flex justify-between items-center lg:flex-row flex-col">
                    <img src={item.fields.image.fields.file.url} className="lg:inline-flex md:w-80 w-52 xl:w-96 h-fit mt-7 lg:mt-0" alt="Star image" />
                    <div className="lg:w-[32rem] w-full flex flex-col gap-5 mt-7 lg:mt-0 text-gray-100">
                        {item.fields.content.map((items:any, index:any)=>{
                          return (
                            <p key={index}>{items.content}</p>
                          )
                        })}
                        <a  href="https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ"  target='_blank'>
                            <button className="bg-active rounded-full px-7 py-2 capitalize font-medium text-gray-100 text-xl w-fit mt-0  hover:bg-yellow-700 hover:font-bold">Contact Us Today</button>
                        </a>
                    </div>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default WeAre