import React from 'react'
import marketCap from '../../Images/marketCap.jpg'
import onlineLearning from '../../Images/onlineLearning.jpg'

function HomeNeed() {
    return (
        <div className="homeneed">
            <h1>Need of the Hour</h1>
            <div className="homeneed__block" id="need_first">
                <div className="homeneed__image">
                    <img src={onlineLearning} alt="Online Learning" />
                </div>
                <div className="homeneed__content">
                    <p>Today's eLearning lacks effective examination delivery. Remote/Hybrid proctoring enables the possibility of personalised examinations.</p>
                </div>
            </div>
            <div className="homeneed__block" id="need_second">
                <div className="homeneed__content">
                    <p><span>Edutech Market</span> Size worth $285 Billion by 2027</p>
                </div>
                <div className="homeneed__image">
                    <img src={marketCap} alt="marketCap" />
                </div>
            </div>
        </div>
    )
}

export default HomeNeed
