import { Link } from 'gatsby'
import React from 'react'
import PageLinks from '../constants/PageLinks'
import SocialLinks from '../constants/SocialLinks'
const Sidebar = ({ isOpen, toggleSidebar }) => {

    return (
        <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>

            <div className="side-container">
                <PageLinks styleClass={`${isOpen ? 'sidebar-links' : ''}`} toggleSidebar={toggleSidebar} />
                <div className="side-contact-link">
                    <Link to="/" className="outline rounded-lg outline-offset-4 outline-1 
                                hover:outline-raw-yellow hover:cursor-pointer hover:text-raw-yellow">
                        Contact Us
                    </Link>
                </div>
                <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
            </div>
        </aside>
    )
}

export default Sidebar
