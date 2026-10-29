import React, { useEffect, useRef } from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar'
import TagCloud from 'TagCloud';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {

    const sphereMounted = useRef(false);

    useEffect(() => {
        if (sphereMounted.current === false) {
            const tags = [
                'React', 'Next.js', 'TypeScript',
                'JavaScript', 'Redux', 'RTK Query',
                'HTML', 'CSS', 'Python',
                'Django', 'DRF', 'Celery',
                'REST APIs', 'PostgreSQL', 'Testing Library',
                'MSW', 'Postman', 'Git',
                'AWS', 'Docker',
            ];

            TagCloud('.sphere', tags, {
                radius: 330,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                direction: 135,
                keep: true,
            });

            return () => sphereMounted.current = true
        }
    }, [])

    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const childVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        hoverButton: {
            scale: 1.1,
            color: '#296A78',
            fontWeight: 600,
            borderColor: '#296A78',
        },
        hoverText: {
            color: '#296A78',
        }
    }

    return (
        <div>
            <Navbar navType='home' />
            <div className="hero">
                <motion.div
                    variants={parentVariants}
                    initial='hidden'
                    animate='visible'
                    className="hero-left">
                    <div className="intro">
                        <motion.h2 variants={childVariants} >
                            {["I'm ", 'a'].map((word, i) => (
                                <motion.span
                                    variants={childVariants}
                                    whileHover='hoverText'
                                    key={i}>{word}</motion.span>
                            ))}
                        </motion.h2>
                        <motion.h1 variants={childVariants} >
                            {['Full ', 'Stack ', 'Software ', 'Developer.'].map((word, i) => (
                                <motion.span variants={childVariants}
                                    whileHover='hoverText'
                                    key={i}>{word}</motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    <motion.div
                        className="buttons"
                        variants={childVariants}>
                        <motion.div
                            variants={childVariants}
                            whileHover='hoverButton'>
                            <RouterLink to='/resume' className='btn'>Resume</RouterLink>
                        </motion.div>
                        <motion.div variants={childVariants} whileHover='hoverButton'>
                            <ScrollLink to='projects' className='btn' >
                                Projects
                            </ScrollLink>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="hero-right">
                    <span className="sphere"></span>
                </motion.div>
            </div >
        </div >
    )
}

export default Hero
