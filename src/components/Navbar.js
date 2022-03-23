import React, { useState, useEffect } from 'react'
import PageLinks from '../constants/PageLinks';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import { Link } from 'gatsby';
import ape from "../assets/images/ape.png";
const Navbar = ({ toggleSidebar, isOpen }) => {
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    const [transparentNav, setTransparentNav] = useState(true);
    useEffect(() => {
        if (url === "/") {
            setTransparentNav(true);
        } else {
            setTransparentNav(false);
        }
    }, [url])
    const changeNavbarColor = () => {
        if (url === "/") {
            if (window.scrollY >= 80) {
                setTransparentNav(false);
            } else {
                setTransparentNav(true);
            }
        }

    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeNavbarColor);
    }

    return (
        <nav className={`${transparentNav ? "navbar  navbar-transparent" : "navbar shadow"}`}>
            <div className="nav-center">
                <div className="nav-header pl-4">
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
                    <Link to="/" className="outline rounded-full outline-offset-4 outline-1 
                                hover:outline-raw-yellow hover:cursor-pointer hover:text-raw-yellow">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
