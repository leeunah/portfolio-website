import React from 'react'
import './Footer.scss'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <p>© {new Date().getFullYear()} Leah All rights reserved</p>
            </div>

            <motion.div
                whileInView={{ y: [0, -5, 0] }}
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop'
                }}>

                <Link to='home' className='back-to-top'>
                    <p>BACK TO TOP</p>
                    <i className="fa-solid fa-angle-up"></i>
                </Link>
            </motion.div>
        </div>
    )
}

export default Footer
