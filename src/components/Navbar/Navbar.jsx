import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'


const Navbar = ({ navType }) => {

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [type] = useState(navType);

    useEffect(() => {
        const checkIfMobile = () => {
            if (type === 'home')
                setIsMobile(window.innerWidth <= 1000);
        }
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile)

        return () => window.removeEventListener('resize', checkIfMobile);
    }, [type])


    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2
            }
        },
    }

    return (
        <div className="navbar" id='home'>
            <div className="logo">
                {
                    type === 'GoToHome' ?
                        <RouterLink to='/'>
                            <span className="logo-mark">L</span>
                        </RouterLink> :
                        <ScrollLink to='home' smooth={true}>
                            <span className="logo-mark">L</span>
                        </ScrollLink>
                }
            </div>

            {
                isMobile && (!isMenuShown ?
                    <div className="nav-icon" onClick={() => { setIsMenuShown((prev => !prev)); }}>
                        <i className="fa-solid fa-bars" style={{ color: 'black' }}></i>
                    </div> :
                    <div className="nav-icon" onClick={() => { setIsMenuShown((prev => !prev)); }}>
                        <i className="fa-solid fa-x" style={{ color: 'white' }}></i>
                    </div>)
            }

            {
                ((isMenuShown || !isMobile) && type === 'home') ?
                    <motion.ul
                        variants={menuVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.5 }}
                        className="menu">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((item, i) => (
                            <motion.li
                                key={i}
                                variants={itemVariants}
                                className="nav-menu">
                                <ScrollLink
                                    to={item}
                                    className='menu-links'
                                    onClick={() => setIsMenuShown((prev => !prev))}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </ScrollLink>
                            </motion.li>
                        ))}
                    </motion.ul> : ''
            }

            {
                (type === 'GoToHome') &&
                <motion.ul
                    variants={menuVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.5 }}
                    className="menu">
                    <motion.li
                        variants={itemVariants}
                        className="nav-menu">
                        <RouterLink
                            to='/'
                            className='menu-links'>
                            Go Back To Home
                        </RouterLink>
                    </motion.li>
                </motion.ul>
            }
        </div>
    )
}

export default Navbar
