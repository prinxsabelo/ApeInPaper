import React from 'react'
import PageLinks from '../constants/PageLinks';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import { Link } from 'gatsby';
import ape from "../assets/images/ape.svg";
const Navbar = ({ toggleSidebar, isOpen }) => {

    return (
        <nav className="navbar px-6 py-2 bg-bg">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={ape} className="w-10 h-10" alt='logo' />

                    <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                        {isOpen ?
                            <FaTimes></FaTimes> :
                            <FaAlignRight ></FaAlignRight>

                        }

                    </button>
                </div>
                <PageLinks styleClass="nav-links"  ></PageLinks>
                <div className=" contact-link">
                    <Link to="/" className="outline rounded-full outline-offset-4 outline-1 px-6 py-1
                                tracking-wider
                                hover:outline-brand hover:cursor-pointer hover:text-brand">
                        Let's Talk
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
