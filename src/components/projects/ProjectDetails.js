import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log(id);
    
    return (
        <div className="container section prokect-details">
            <div className="card -z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione voluptatum nesciunt, fugit necessitatibus sequi. Soluta exercitationem blanditiis voluptas vero perspiciatis ex quasi. Quae qui, nostrum accusamus enim repudiandae officia.</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by me</div>
                    <div>15/11 12:43</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails