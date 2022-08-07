import Link from "next/link"
import { useState } from "react"
import { BiMenuAltRight } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
  const [sideNav, setSideNav] = useState<boolean>(false)
  return (
    <div className="bg-back/80 fixed z-40 top-0 left-0 w-full lg:py-8 py-5 px-2">
      <div className="lg:max-w-5xl lg:mx-auto px-6 lg:px-0 flex justify-between items-center">
          <img src="/assets/ApeInLogo.png" className="w-8 h-8" alt="ApeIn logo"/>
          <ul className="lg:flex hidden gap-10 items-center">
              <li className="active:text-active active:underline hover:text-active text-white font-semibold tracking-wide"><Link href='#home'>Home</Link></li>
              <li className="active:text-active active:underline  hover:text-active text-white font-semibold tracking-wide"><Link href='#aboutus'>About Us</Link></li>
              <li className="active:text-active active:underline  hover:text-active text-white font-semibold tracking-wide"><Link href='#services'>Services</Link></li>
              <li className="active:text-active active:underline   hover:text-active text-white font-semibold tracking-wide"><Link href='#whitepaper'>White Paper</Link></li>
              <li><a className="active:text-active active:underline  hover:text-active text-white border border-gray-100 px-5 py-1.5 rounded-full font-semibold tracking-wide" href='https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ' target='_blank'>Let's Talk</a></li>
          </ul>
          {!sideNav&&(
            <BiMenuAltRight className="text-white text-4xl lg:hidden cursor-pointer" onClick={()=>setSideNav(true)}/>
          )}
          {sideNav&&(
            <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-back/90 flex">
                <div className="w-5/6 bg-back/90 h-screen flex flex-col p-10">
                  <a href="/" className="flex gap-4 items-center cursor-pointer">
                    <img src="/assets/ApeInLogo.png" className="w-10 h-10" alt="Ape In Logo" />
                    <h2 className="font-semibold text-xl text-gray-100">ApeInPaper</h2>
                  </a>
                  <ul className="lg:hidden flex flex-col mt-16 gap-10">
                    <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline text-white font-semibold tracking-wide"><Link href='#home'>Home</Link></li>
                    <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline text-white font-semibold tracking-wide"><Link href='#aboutus'>About Us</Link></li>
                    <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline text-white font-semibold tracking-wide"><Link href='#services'>Services</Link></li>
                    <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline text-white font-semibold tracking-wide"><Link href='#whitepaper'>White Paper</Link></li>
                    <li><a onClick={()=>setSideNav(false)} className="text-gray-100 border border-gray-100 px-5 py-1.5 rounded-full font-semibold tracking-wide" href='https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ' target='_blank'>Let's Talk</a></li>
                </ul>
                </div>
                <div className="w-1/6 bg-back/10 py-10 px-4" onClick={()=>setSideNav(false)}>
                  <IoCloseOutline className="text-white text-5xl ml-auto cursor-pointer" onClick={()=>setSideNav(false)}/>
                </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar