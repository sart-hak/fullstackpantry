import React, { useRef, useState } from 'react';
import Axios from 'axios'
import emailjs from '@emailjs/browser';

const ContactContainer = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [detail, setDetail] = useState([]);
    const [emailSent, setEmailSent] = useState(false);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_l2fzvuk';
        const templateId = 'template_g10udas';
        const publicKey = '5W2lD97gsjm8sNCzs';
        const templateParams = {
            firstName,
            lastName,
            email,
            contact,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(response => console.log(response.text))
            .then(error => console.log(error));

        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setMessage('');
        setEmailSent(true);

        // emailjs.sendForm('service_l2fzvuk', 'template_g10udas', form.current, '5W2lD97gsjm8sNCzs')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    const Upload = (e) => {

            Axios.post("http://localhost:5000/contact", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                contact: contact,
                message: message
            })
                .then(res => {
                    setDetail([...detail, { firstName, lastName, email, contact, message }]);
                });
            console.log(detail);
    }


    return (
        <div className="ContactContainer">

            <div className="container">
                <p>FILL THE FORM BELOW</p>
                <h1>Contact us</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                            <div className="underline"></div>
                            <label >First Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required />
                            <div className="underline"></div>
                            <label >Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                            <div className="underline"></div>
                            <label >Email ID</label>
                        </div>
                        <div className="input-data">
                            <input type="text" value={contact} onChange={e => setContact(e.target.value)} required />
                            <div className="underline"></div>
                            <label >Phone no.</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea value={message} onChange={e => setMessage(e.target.value)} rows="8" cols="80" required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label >How can we help you ?</label>
                            <br />
                        </div>
                    </div>
                    <div className='contactbtn-div'>
                        <button type='submit' className='submitbtn contactbtn' onClick={Upload}>{emailSent ?"sent" : "send"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactContainer