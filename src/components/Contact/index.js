// import axios from 'axios';
import React, { useState } from 'react';
import { checkMessage, validateEmail } from '../../utils/helpers';
import '../styles/Contact.css';



const styles = {
    contactStyle: {
        background: 'rgb(122, 235, 229)',
    },
};


function Contact({ contact }) {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');

    // const [formState, setFormState] = useState({
    // });

    // const handleChange = (e) => {
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;


    //     if (inputType === 'email') {
    //         setEmail(inputValue);
    //     } else if (inputType === 'subject') {
    //         setSubject(inputValue);
    //     } else {
    //         setMessage(inputValue);
    //     }
    // };

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);

    }
    // const handleSubmit = (e) => {

    //     e.preventDefault();
    //     axios({
    //         method: "POST",
    //         url: "/send",
    //         data: this.useState

    //     }).then((response) => {

    //         if (!validateEmail(email) || !subject) {
    //             setFormState('Email or subject is invalid');
    //             return;
    //         }
    //         if (!checkMessage(message)) {
    //             setFormState(
    //                 `Choose a more secure Message for the account: ${subject}`
    //             );
    //             return;
    //         }
    //         alert(`Hello ${subject}`);
    //         setSubject('');
    //         setMessage('');
    //         setEmail('');
    //     })

    // };


    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Contact</h2>
                            <p>test</p><hr />
                            <form id="contact-form" onSubmit={handleSubmit}
                                method="POST">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input placeholder="Name" id="name" type="text"
                                                className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <input placeholder="Email" id="email" type="email"
                                                className="form-control" aria-describedby="emailHelp"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Subject" id="subject" type="text"
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="message" id="message"
                                        className="form-control" rows="1"
                                    />
                                </div>
                                <button type="submit" className="primary-btn submit">{status}</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>


        // <div style={styles.contactStyle} className='contact'>
        //     <h1 style={styles.contactStyle}> Contact Me </h1>
        //     <p>Hello {userName}</p>
        //     <form className="form">
        //         <input
        //             email={email}
        //             name="email"
        //             onChange={handleChange}
        //             type="email"
        //             placeholder="email"
        //         />
        //         <input
        //             username={userName}
        //             name="userName"
        //             onChange={handleChange}
        //             type="text"
        //             placeholder="username"
        //         />
        //         <input
        //             Message={Message}
        //             name="Message"
        //             onChange={handleChange}
        //             type="Message"
        //             placeholder="Message"
        //         />
        //         <button type="button" onClick={handleSubmit}>Submit</button>
        //     </form>
        //     <nav>
        //     </nav>
        //     {formState && (
        //         <div>
        //             <p className="error-text">{formState}</p>
        //         </div>

        //     )}
        // </div>
    );
};



export default Contact;