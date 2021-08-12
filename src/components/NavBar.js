import React from 'react'
import { Link } from 'react-router-dom'
import fsMainLogo from '../Images/MainLogo.svg'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/">
                    <img src={fsMainLogo} />
                </Link>
            </div>
            <div className="navbar__right">
                <span>About Us</span>
                <span>Team</span>
                <a href="#contact_us"><span>Contact Us</span></a>
            </div>
        </div>

    )
}

export default NavBar
