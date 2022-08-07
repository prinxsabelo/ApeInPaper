const Footer = ({footerSection}:any) => {
  return (
    <div className="lg:bg-about flex py-20 w-full px-6 md:px-20 xl:px-0">
        <div className="mx-auto lg:max-w-5xl w-full flex flex-col">
            <div className="flex gap-5 justify-between items-start w-full">
                {footerSection.map((item:any, index:any)=>{
                    return (
                        <img key={index} src={item.fields.image.fields.file.url} className="w-12 h-12 block lg:hidden" alt="ApeIn Logo" />
                    )
                })}
                <div className="md:w-full flex justify-between items-start lg:flex-row flex-col w-11/12">
                    {/* Section 1 */}
                    {footerSection.map((item:any, index:any)=>{
                        return (
                            <div key={index} className="lg:w-1/4 sm:w-[32rem] w-full flex flex-row gap-5 lg:mt-0">
                                <img src={item.fields.image.fields.file.url} className="w-5 h-5 hidden lg:inline-flex" alt={item.fields.image.fields.title} />
                                <p className="text-gray-100">{item.fields.content}</p> 
                            </div>
                        )
                    })}
                    {/* Section 2 */}
                    <div className="lg:w-1/4 sm:w-[32rem] w-full flex flex-col gap-3 mt-6 lg:mt-0 text-gray-100">
                        <p className="text-gray-100">We are available on all your favorite social platforms.</p>
                        <div className="flex gap-3">
                            <img src="/assets/icons/telegram_light.png" className="w-5 h-5" alt="Telegram Logo" />
                            <img src="/assets/icons/instagram_light.png" className="w-5 h-5" alt="Instagram Logo" />
                            <img src="/assets/icons/twitter_light.png" className="w-5 h-5" alt="Twitter Logo" />
                            <img src="/assets/icons/linkedin_light.png" className="w-5 h-5" alt="Linkedin Logo" />
                        </div>
                        <div className="flex gap-3">
                            <img src="/assets/icons/email_light.png" className="w-5 h-5" alt="Telegram Logo" />
                            <p className="font-light text-sm">hello@Apeinpaper.io</p>
                        </div>
                        <div className="flex gap-3">
                            <img src="/assets/icons/location.png" className="w-5 h-5" alt="Location Icon" />
                            <p className="font-light text-sm">Apeinpaper HQ, #3630 Cave Center, 907 Wilshire BoulevardMichigan, 50017 </p>
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className="md:w-1/4 sm:w-[32rem] w-full flex flex-col gap-3 mt-6 lg:mt-0">
                        <p className="text-active font-semibold">SiteMap</p> 
                        <a href="#home" className="text-sm outline-none text-gray-100">Home</a>
                        <a href="#aboutus" className="text-sm outline-none text-gray-100">About us</a>
                        <a href="#services" className="text-sm outline-none text-gray-100">Our Services</a>
                        <a href="#whitepaper" className="text-sm outline-none text-gray-100">White Paper</a>
                        <a  href={`https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ`}  target='_blank' className="text-sm outline-none text-gray-100">Let's Talk</a>
                    </div>
                </div>
            </div>
            <strong className="text-sm text-gray-100 mt-20 text-center tracking-widest">© {new Date().getFullYear()} Ape in Paper. All rights reserved. </strong>
        </div>
    </div>
  )
}

export default Footer