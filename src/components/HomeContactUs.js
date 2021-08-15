import React, { useState } from 'react'
import linkedin from '../Images/linkedin.png'
import emailjs from 'emailjs-com';

function HomeContactUs() {



    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        const templateParams = {
            from_name: "Website",
            to_name: "Team",
            notes: 'Got New Enquiry',
            message: `${name} has sent equiry states "${message}" , email is:- ${email}`,
        };
        emailjs.send('service_xz92cpd', 'template_71mcls2', templateParams, 'user_haYL38NpbHghrwUFYwvZz')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setName('')
                setEmail('')
                setMessage('')
                alert('Thank you for your enquiry, we will get back to you soon.')
                console.log(name, "name")
            }, (err) => {
                console.log('FAILED...', err);
            });


    }

    return (
        <div className="homecontactus" id="contact_us">
            <div className="homecontactus__left">
                <div className="homecontactus__left__title">
                    <h2>Contact Us</h2>
                </div>
                <div className="homecontactus__left__content">
                    <p>FirstSense Technology Pvt. Ltd,</p>
                    <p>Bangalore, India</p>
                    <p>Email:- info@firstsense.tech</p>
                </div>
                <div className="homecontactus__left__image">
                    <a href="https://www.linkedin.com/company/firstsense-technology/about/" target="_blank"> <img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
            <div className="homecontactus__right">
                <input type="text" value={name} onChange={e => { setName(e.target.value) }} placeholder="Your Name" />
                <input type="text" value={email} onChange={e => { setEmail(e.target.value) }} placeholder="Your Email" />
                <input type="text" value={message} onChange={e => { setMessage(e.target.value) }} placeholder="Comment" />
                <button onClick={() => handleSubmit()} className="homecontactus__right__button">Submit</button>
            </div>
        </div >
    )
}

export default HomeContactUs
