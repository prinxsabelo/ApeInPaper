import React from "react"
import { Link } from "gatsby"
const data = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },
    {
        id: 2,
        text: "About Us",
        url: "/#about",
    },
    {
        id: 3,
        text: "Services",
        url: "/#services"
    },

    {
        id: 4,
        text: "White Paper",
        url: "/#white-paper",
    },


]

const tempLinks = data.map(link => {
    return (
        <li key={link.id}>
            <Link to={link.url} >{link.text}</Link>
        </li>
    )
})
// I KNOW WE CAN COMBINE IT !!!!!

const PageLinks = ({ styleClass, toggleSidebar }) => {
    return (
        <button onClick={toggleSidebar} onKeyDown={toggleSidebar}>
            <ul className={`page-links tracking-wider text-xl font-bold ${styleClass ? styleClass : ""}`} >
                {tempLinks}
            </ul>
        </button>

    )
}
export default PageLinks;