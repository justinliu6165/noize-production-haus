import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        company: "",
        msg: ""
    })
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.name && values.email && values.msg) {
            setValid(true);
        }
        setSubmitted(true);
    }

    const inputHandler = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <>
        <form className={styles['ct-form']} onSubmit={handleSubmit}> 
            <div className='space-y-16'>
                <input type='text' placeholder='Name*' name="name" className={styles['ct-input']} onChange={inputHandler}/>
                {submitted && !values.name && <span id="email-error">Please enter a name</span>}
                <input type='text' placeholder='Email*' name="email" className={styles['ct-input']} onChange={inputHandler}/>
                {submitted && !values.email && <span id="email-error">Please enter a valid email</span>}
                <input type='text' placeholder='Company' name="company" className={styles['ct-input']} onChange={inputHandler}/>
                <textarea type='text' placeholder='Your message' rows={5} name="msg" className={styles['ct-input']} onChange={inputHandler}/>
                {submitted && !values.msg && <span id="email-error">Please enter a message for us</span>}
            </div>
            <div className="py-16 flex justify-center">
                <div className="inline-block">
                    <button type='submit' className='nz-button'>
                        <span className="uppercase">Send away</span>
                    </button>
                </div>
            </div>
        </form>
        {submitted && valid && <div>Sent away</div>}
        </>

    )
}
