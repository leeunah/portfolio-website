import React from 'react'
import './Resume.scss'

const Resume = () => {
    return (
        <div className="resume">
            <a href="/Resume.pdf" download="LeahKim_FullStackDeveloper_Resume.pdf" className="download-btn">
                Download My Resume
            </a>
            <iframe src="/Resume.pdf" title="Resume" height='fit-content' />
        </div>
    )
}

export default Resume
