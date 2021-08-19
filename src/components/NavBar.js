import React from 'react'
import { Link } from 'react-router-dom'
import fsMainLogo from '../Images/MainLogo.svg'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/">
                    <img src={fsMainLogo} />
                </Link>
                <a href="#contact_us"><ContactSupportIcon /></a>
            </div>
            <div className="navbar__right">
                {/* <span>About Us</span>
                <span>Team</span> */}
                <a href="#contact_us"><span>Contact Us</span></a>
            </div>
        </div>

    )
}

export default NavBar
