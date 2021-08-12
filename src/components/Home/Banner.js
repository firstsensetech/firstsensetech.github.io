import React from 'react'
import banner_img from '../../Images/banner-img.png'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className="home__banner">
            <div className="home__banner-left">
                <span><b>Building intelligent machine observers for today's needs</b></span>
                <div>
                    <Link to='/learn-more'>
                        <span>Learn More → </span>
                    </Link>
                </div>
            </div>
            <div className="home__banner-right">
                <img src={banner_img} />
            </div>
        </div>
    )
}

export default Banner;
