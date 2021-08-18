import React from 'react'
import marketCap from '../../Images/marketCap.jpg'
import onlineLearning from '../../Images/onlineLearning.jpg'

function HomeNeed() {
    return (
        <div className="homeneed">
            <h1 data-aos="fade-down">Need of the Hour</h1>
            <div className="homeneed__block" id="need_first">
                <div className="homeneed__image" data-aos="fade-right">
                    <img src={onlineLearning} alt="Online Learning" />
                </div>
                <div className="homeneed__content" data-aos="fade-left">
                    <p>Today's eLearning lacks effective examination delivery. Remote/Hybrid proctoring enables the possibility of personalised examinations.</p>
                </div>
            </div>
            <div className="homeneed__block" id="need_second">
                <div className="homeneed__content" data-aos="fade-right">
                    <p>Edutech Market Size worth $285 Billion by 2027</p>
                </div>
                <div className="homeneed__image" data-aos="fade-left">
                    <img src={marketCap} alt="marketCap" />
                </div>
            </div>
        </div>
    )
}

export default HomeNeed
