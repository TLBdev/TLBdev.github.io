import React from 'react'

function AboutMe(props) {
    return (
        <div className='modal-background' onClick={props.toggleMain}>
            <div className='modal' onClick={props.stopPropagation}>
                <div className='title-bar'>
                    <h2>
                        About Me
                    </h2>
                    <div className='close' onClick={props.toggleMain}>
                        <h2>X</h2>
                    </div>
                </div>
                <div className='content'>
                    <p>I am a Full Stack Web Dev who received training at Lambda School(a nine-month 40 hr/week training program). At Lambda I learned many of the skills necessary to get a start in the tech industry; including pair-programming, working in sprints, planning and designing projects, working on a cross-functional team, learning new frameworks quickly as the project demands, and much more. </p>
                    <p>Before this career change I spent a lot of my life working in food service(eventually rising to the level of Department Manager) and construction. My restaurant work taught me to work as part of a team in a fast-paced high stress environment. My management experience taught me to maintain calm in myself and others in difficult situations, and to analyze a situation objectively to identify problems and quickly come up with relevant, actionable solutions. Both my management and construction experience taught me the value of hard work and planning, and going above and beyond to get the job done.</p>
                    <p>Throughout my adult life I have lived in many locations across the south, midwest and north-east United States. I have found myself very adept at integrating with a wide variety of people and cultures. This skill has served me well in my many moves by allowing me to fit in quickly and easily with diverse groups.</p>
                </div>
            </div>
        </div>)
}

export default AboutMe