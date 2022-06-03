import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_niw1vpj', 'template_lazs5zn', form.current, 'CJak_Jyq5AXnQ_Whi')
          .then((result) => {
              toast.success("Thanks for connecting me!!!")
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
      };
    return (
        <div className='contact-form'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{background : '#ABF1FF94'}}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name="user_email" className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message'></textarea>
                    <input type="submit" value="Send" className='button' />
                    <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;