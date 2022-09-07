import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../styles/Contact.css';



function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === 'email') {
            setEmail(inputValue);
            return;
        } else if (inputType === 'name') {
            setName(inputValue);
            return;
        } else if (inputType === 'message') {
            setMessage(inputValue);
            return;
        } else if (inputType === 'subject') {
            setSubject(inputValue);
            return;
        }
    };

    const handleBlur = (e) => {
        e.preventDefault();

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if ((inputType === 'name') && (!inputValue.length)) {
            setErrorMessage('Please enter your name')
        }
        if (!validateEmail(email)) {
            setErrorMessage('The Email you entered is invalid')
        } else if ((!validateEmail(email)) && (!inputValue.length)){
            alert('Your Email was not sent') // work in functioning alert window later
        }    
        if ((inputType === 'subject') && (!inputValue.length)) {
            setErrorMessage('Please include a subject')
        }
        if ((inputType === 'message') && (!inputValue.length)) {
            setErrorMessage('Please include a message')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    }


    const styles = {
        contactStyle: {
            background: 'rgb(122, 235, 229)',
            height: '100vh'
        },
        contactBorder: {
            background: 'gray',
            height: '100vh',
            border: '1rem solid',
            borderRadius: '5px'
        },
        contactForm: {
            // backgroundColor: 'gray',
            padding: '50px',
            


        },
        contactError:{
            padding: '10px',
            color: 'darkred',
            fontSize: '1.5em',
            textShadow: '1px 1px 3px red',
            background: 'lightRed',
            backgroundColor: 'pink',
            border: 'solid',
            borderRadius: '5px'
        },
        contactButton: {
            color: 'rgb(122, 235, 229)',
            background: 'transparent',
            backgroundColor: 'darkGrey',
            borderRadius: '5px',
            padding: '14px',
        }, 
        
    };

    return (
        <div className="section" style={styles.contactStyle}>
            <div className="container">
                <div className="row" style={styles.contactBorder}>
                    <div className="col-md-12" >
                        <div className="section-title" >
                            <h2 className="title" >Contact</h2>
                            <hr />
                            <form id="contact-form"
                            >
                                <div className="form-group" >
                                    <div className="row" >
                                        <div className="col-md-6">
                                            <input value={name} placeholder="Name" name="name" type="text"
                                                className="form-control" onChange={handleChange} onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input value={email} placeholder="Email" name="email" type="email"
                                                className="form-control" onChange={handleChange} onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input value={subject} placeholder="Subject" name="subject" type="text"
                                                className="form-control" onChange={handleChange} onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input style={styles.contactForm} value={message} placeholder="message" name="message"
                                                className="form-control" rows="1" onChange={handleChange} onBlur={handleBlur}
                                            />
                                        </div>
                                        <div>
                                        {errorMessage && (<div className="error-text" style={styles.contactError}>{errorMessage}</div>)}
                                        </div>
                                    </div>
                                </div>
                                <button style={styles.contactButton} type="submit" className="primary-btn submit" onSubmit={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};



export default Contact;

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


