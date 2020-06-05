import React from 'react'
import './Modals.css'
function Skills(props) {
    return (
        <div className='modal-background' onClick={props.toggleMain}>
            <div className='modal' onClick={props.stopPropagation}>
                <div className='title-bar'>
                    <h2>
                        Skills
                    </h2>
                    <div className='close' onClick={props.toggleMain}>
                        <h2>X</h2>
                    </div>
                </div>
                <div className='content'>
                    <p>> Programming Languages:</p>
                    <p> Python  |   JS</p>
                    <p></p>
                    <p>> Frameworks / Libraries:</p>
                    <p> React  |
                    Express  |
                    Knex  |
                     Redux</p>
                    <p>> Databases:</p>
                    <p> Sqlite3  |
                     PostgreSQL</p>
                    <p>> CSS</p>
                    <p>> HTML5</p>
                    <p>> Node</p>
                    <p>> Git</p>
                </div>
            </div>
        </div>)
}

export default Skills