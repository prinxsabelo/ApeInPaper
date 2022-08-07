const Faq = ({faqSection}:any) => {
  return (
    <div className="bg-about flex py-20 w-full px-6 md:px-20 xl:px-0">
        <div className="mx-auto lg:max-w-5xl w-full flex flex-col">
            <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl capitalize lg:ml-0 md:mx-auto md:w-[32rem]">Frequently Asked Questions?</h2>
                <div className="w-full h-fit flex flex-wrap justify-between gap-5 mt-7">
                    {faqSection.map((items:any, index:any)=>{
                        return(
                            <div key={index} className="flex flex-col md:w-[28rem] w-full">
                                <h4 className="font-semibold text-gray-100 capitalize">{items.fields.title}</h4>
                                <p className="text-gray-100 mt-3 font-light">{items.fields.content}</p> 
                            </div>
                        )
                    })}
                </div>
        </div>
    </div>
  )
}

export default Faq