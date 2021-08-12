import React from 'react'
import exam from '../../Images/onlineExam.jpg'
import classroom from '../../Images/classroom.jpg'

function HomeSolution() {
    return (
        <div className="homeSolution">
            <h1>Solution</h1>
            <div className="homeSolution__first homeSolution__block">
                <div className="homeSolution__solution__image">
                    <img src={exam} />
                </div>
                <div className="homeSolution__solution__text">
                    <h2>Automated Proctoring: </h2>
                    <p>Automated Proctoring: Transform examinations into a process of improvement by eliminating the cost an inflexibility of manual proctoring</p>
                </div>
            </div>
            <div className="homeSolution__second homeSolution__block">
                <div className="homeSolution__solution__text">
                    <h2>Class Dynamics </h2>
                    <p>Transform examinations into a process of improvement by eliminating the cost an inflexibility of manual proctoring</p>
                </div>
                <div className="homeSolution__solution__image">
                    <img src={classroom} />
                </div>
            </div>
            <div>
                <span>Learn More → </span>
            </div>
        </div>
    )
}

export default HomeSolution
