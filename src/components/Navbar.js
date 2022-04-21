import React from 'react'
import PageLinks from '../constants/PageLinks';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import Logo from '../../static/ape.jpg';

const Navbar = ({ toggleSidebar, isOpen }) => {

    return (
        <nav className="navbar h-20 px-4 bg-bg">
            <div className="nav-center">
                <div className="nav-header">
                    <div className='w-20'>
                        <img src={Logo} className="object-contain" alt='logo' />

                    </div>

                    <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                        {isOpen ?
                            <FaTimes></FaTimes> :
                            <FaAlignRight ></FaAlignRight>

                        }

                    </button>
                </div>
                <PageLinks styleClass="nav-links text-xl"  ></PageLinks>
                <div className=" contact-link">
                    <a href="https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ" className="outline rounded-full outline-offset-4 outline-1 px-4 py-1
                                tracking-wider text-xl font-bold
                                hover:outline-brand hover:cursor-pointer hover:text-brand">
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
