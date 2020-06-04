import React from 'react'

function Projects(props) {
    return (
        <div className='modal-background' onClick={props.toggleMain}>
            <div className='modal' onClick={props.stopPropagation}>
                <div className='title-bar'>
                    <h2>
                        Projects
                    </h2>
                    <div className='close' onClick={props.toggleMain}>
                        <h2>X</h2>
                    </div>
                </div>
            </div>
        </div>)
}

export default Projects