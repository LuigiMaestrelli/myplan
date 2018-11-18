import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depyh-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p className="grey-text">15/11 12:11</p>
            </div>
        </div>
    )
}

export default ProjectSummary