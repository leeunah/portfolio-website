import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7ocg5ng', 'template_63vbd9h', form.current, 'WTJd8eCZYGJyVwxql')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                alert("Send Email Successfully");
            }, (error) => {
                console.log(error.text);
            });
    };

    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.3
            }
        },
    }

    const childVariants = {
        hidden: { x: -30, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
    }

    return (
        <div>
            <div className="contact" id="contact">
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <p>
                            <TypeAnimation
                                sequence={['Say Hi to Me !', 600, '', 600]}
                                speed={1}
                                repeat={Infinity}
                            />
                        </p>
                    </div>

                    <div className="contact-mid">
                        <motion.h1
                            className="title"
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ amount: 0.5 }}>CONTACT</motion.h1>

                        <hr />

                        <motion.div
                            className="info-list"
                            variants={parentVariants}
                            initial='hidden'
                            whileInView='visible'>
                            <motion.div className="info" variants={childVariants}>
                                <p>Name</p>
                                <p>Leah Kim</p>
                            </motion.div>
                            <motion.div className="info" variants={childVariants}>
                                <p>Email</p>
                                <p>leah.kim0118@gmail.com</p>
                            </motion.div>
                            <motion.div className="info" variants={childVariants}>
                                <p>Phone</p>
                                <p>+1 416-896-2757</p>
                            </motion.div>
                            <motion.div className="info" variants={childVariants}>
                                <p>
                                    <a href="https://github.com/leeunah" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </p>
                            </motion.div>
                            <motion.div className="info" variants={childVariants}>
                                <p>
                                    <a href="https://www.linkedin.com/in/leahkim-dev/" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="divider"></div>

                    <div className="contact-right">
                        <h3>Feel free to contact and <br />I will get back to you as soon as I can.</h3>

                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" placeholder='name' />
                            <input type="email" name="user_email" placeholder='email' />
                            <textarea name="message" placeholder='write your message' />
                            <input type="submit" value="Send" className='send' />
                        </form>

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
