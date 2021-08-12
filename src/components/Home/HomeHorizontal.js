import React from 'react'
import school from '../../Images/school.jpg'
import language from '../../Images/language.jpg'
import creches from '../../Images/creches.jpg'
import certificate from '../../Images/certificate.jpg'
import exam from '../../Images/exam.jpg'

function HomeHorizontal() {
    const data = [
        {
            image: school,
            title: 'School and Universities',
        },
        {
            image: creches,
            title: 'Creches',
        },
        {
            image: certificate,
            title: 'Professional Certification',
        },
        {
            image: exam,
            title: 'Competitive Exams',
        },
        {
            image: language,
            title: 'Language Proficiency Tests',
        }
    ]
    return (
        <div className="homehorizontal">
            <h1>Horizontal Focus</h1>
            <div className="homehorizontal__content">
                {
                    data.map((item, index) => (
                        <div className="homehorizontal__content-item">
                            <img src={item.image} />
                            <span><b>{item.title}</b></span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeHorizontal
