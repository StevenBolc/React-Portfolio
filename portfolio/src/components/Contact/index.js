import React, { useState } from 'react';
import { checkPassword, validateEmail } from '../../utils/helpers';
import '../styles/Contact.css';


const styles = {
    contactStyle: {
        background: 'rgb(122, 235, 229)',
    },
};


function Contact({ contact }) {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [formState, setFormState] = useState({
    });

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        if (!validateEmail(email) || !userName) {
            setFormState('Email or username is invalid');
            return;
        }
        if (!checkPassword(password)) {
            setFormState(
                `Choose a more secure password for the account: ${userName}`
            );
            return;
        }
        alert(`Hello ${userName}`);
        setUserName('');
        setPassword('');
        setEmail('');
    };


    return (
        <div style={styles.contactStyle} className='contact'>
            <h1 style={styles.contactStyle}> Contact Me </h1>
            <p>Hello {userName}</p>
            <form className="form">
                <input
                    email={email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    username={userName}
                    name="userName"
                    onChange={handleChange}
                    type="text"
                    placeholder="username"
                />
                <input
                    password={password}
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                />
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            <nav>
            </nav>
            {formState && (
                <div>
                    <p className="error-text">{formState}</p>
                </div>

            )}
        </div>
    );
};



export default Contact;