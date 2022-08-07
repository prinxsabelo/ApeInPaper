const AboutList = ({aboutSectionList}:any) => {
    return (
        <div className="bg-about flex py-20 w-full px-6 md:px-32 xl:px-0">
                <div className="mx-auto lg:max-w-5xl w-full flex flex-col">
                    <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl">Why Choose ApeinPaper?</h2>
                    <div className="flex flex-wrap gap-20 mt-10">
                        {aboutSectionList.map((items:any,index:any)=>{
                            return(
                            <div key={index} className="lg:w-96 sm:w-[32rem] w-full">
                                <strong className="text-gray-100">{index+1}. {items.fields.title}</strong>
                                <p className="text-gray-100 mt-2">{items.fields.content}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}

export default AboutList