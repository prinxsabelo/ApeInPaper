const Team = ({service, ourTeam}:any) => {
  return (
    <div className="bg-about parallelogram flex py-10 w-full px-6 md:px-20 xl:px-0 relative">
        <div className="mx-auto lg:max-w-5xl w-full flex flex-col py-32">
            {service.map((item:any, index:any)=>{
                return (
                    <div key={index}>
                        <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl capitalize">{item.fields.title}</h2>
                        <p className="text-gray-100 mt-4 lg:w-[42rem] w-full">{item.fields.content}</p>
                    </div>
                )
            })}
            <h2 className="font-semibold text-gray-100 text-center lg:text-3xl text-2xl capitalize mt-20">Meet the team</h2>
            <div className="flex flex-wrap lg:gap-16 gap-5 mt-16">
                {ourTeam.map((item:any, index:any)=>{
                    return (
                        <div key={index} className="rounded-lg bg-white px-5 py-5 flex flex-col items-center w-[24rem] md:w-[20rem] lg:w-1/4">
                            <img src={item.fields.image.fields.file.url} alt="ProfileImg" className="rounded-full w-24 h-24" />
                            <h4 className="capitalize text-active items-center text-lg font-semibold mt-2">{item.fields.name}</h4>
                            <p className="text-gray-700 text-center text-sm">{item.fields.role}</p>
                            {/* Social Media Handles */}
                            {/* <div className="flex justify-between items-center gap-3 mt-2">
                                {item.fields.mediaHandles.map((handle:any, index:any)=>{
                                    return(
                                        <img key={index} src={handle.fields.file.url} className="w-5 h-5" alt="email" />
                                    )
                                })}
                            </div> */}
                        </div>
                    )
                })}
                {/* Solomon */}
            </div>
        </div>
    </div>
  )
}

export default Team