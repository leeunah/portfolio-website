import React from 'react'
import './Projects.scss'
import { motion } from 'framer-motion'
import { projectsData } from '../../data/projects'

const Projects = () => {
    return (
        <div>
            <div className="projects" id='projects'>
                <motion.h1
                    className="title"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}>Projects</motion.h1>

                <div className="divider">
                    <div className='divider-line-b'></div>
                    <div className="triangle-down-b"></div>
                    <div className='divider-line-b'></div>
                </div>

                <div className="projects-wrapper">
                    {projectsData.map((data, i) => (
                        <div className="project" key={i}>
                            <div className="front">
                                <p className="project-type">{data.type}</p>
                                <div className="front-bottom">
                                    <p className="project-title">{data.title}</p>
                                    <p className="project-skills">{data.skills}</p>
                                </div>
                            </div>

                            <div className="back">
                                <p className='project-description'>{data.description}</p>
                                <div className="external-links">
                                    <a href={data.github} target="_blank" rel="noreferrer">Source Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
