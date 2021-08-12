import React from 'react'
import NavBar from './NavBar'
import school from '../Images/schoolUniversity.jpg'
import transport from '../Images/transport.jpg'
import healthcare from '../Images/healthcare.jpg'
import HomeContactUs from './HomeContactUs'

function LearnMore() {
    return (
        <div className="learnMore">
            <NavBar />
            <div className="learnMore__datils">
                <h1>Our Focus</h1>
                <div className="learnMore__details__block">
                    <div id="content">
                        <h3>EduTech</h3>
                        <p>Hybrid Practoring Class Dynamics</p>
                    </div>
                    <div id="image">
                        <img src={school} />
                    </div>
                </div>
                <div className="learnMore__details__block">
                    <div id="image">
                        <img src={healthcare} />
                    </div>
                    <div id="content">
                        <h3>Health Care</h3>
                        <p>Fall detection Patient Monitoring Sports Medicine</p>
                    </div>
                </div>
                {/* <div className="learnMore__details__block">
                    <div id="content">
                        <h3></h3>
                        <p></p>
                    </div>
                    <div id="image">
                        <img src={transport} />
                    </div>
                </div> */}
            </div>
            <HomeContactUs />
        </div>
    )
}

export default LearnMore
