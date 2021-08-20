import React from 'react'
import exam from '../../Images/onlineExam.jpg'
import classroom from '../../Images/classroom.jpg'

function HomeSolution() {
    return (
        <div className="homeSolution">
            <h1 data-aos="fade-down">Solutions</h1>
            <div className="homeSolution__first homeSolution__block">
                <div className="homeSolution__solution__image" data-aos="fade-right">
                    <img src={exam} />
                </div>
                <div className="homeSolution__solution__text" data-aos="fade-left">
                    <h2>Automated Proctoring </h2>
                    <p>Transform examinations into a process of improvement by eliminating the cost and inflexibility of manual proctoring</p>
                </div>
            </div>
            <div className="homeSolution__second homeSolution__block">
                <div className="homeSolution__solution__text" data-aos="fade-right">
                    <h2>Class Dynamics </h2>
                    <p>Provide better class experience by assessing teacher-student and student-student interactions</p>
                </div>
                <div className="homeSolution__solution__image" data-aos="fade-left">
                    <img src={classroom} />
                </div>
            </div>
            {/* <div>
                <span>Learn More → </span>
            </div> */}
        </div>
    )
}

export default HomeSolution
