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
                <div className='content'>
                    <p><a href='https://github.com/TLBdev/cs.backend'>Django API for Multi-User Dungeon</a></p>
                    <p>A simple Rest api using django</p>
                    <p>Python | Django | DjangoRestFramework </p>
                    <p>DjangoKnox | Psycopg2 | PostgreSQL</p>
                    <p>This API was built by 2 developers with no prior knowledge of django with a 1 week deadline. We were able to work together to complete this in 2 days and transition to the front-end to further speed development.</p>
                    <p>Solely responsible for seeding database and designing algorithm to link nodes into a 3-d arrangement.</p>
                    <p>Used DjangoRestFramework to develop this project into a minimum viable product as quickly as possible.</p>
                    <div className='line-break'></div>
                    <p><a href='https://github.com/TLBdev/BE'>Node API for simple social-network style web app</a></p>
                    <p>A Node Rest API for a project to create a Web App to help connect parents to share chaperone responsibilities at Theme Parks. </p>
                    <p>JavaScript | Express | BcryptJS </p>
                    <p>Knex | PostgreSQL | JsonWebToken</p>
                    <p>This API was built by 2 developers with a time limit of 1 week. Completed in 3 days. further time was used to help the front end team and make changes as needed by that team.</p>
                    <p>Solely responsible for some of the more advanced queries, and coaching my teammate to help him better understand how to implement the queries using Knex</p>
                    <p>Used Express to create a Rest API. We predicted the needs of the front-end team and wrote our queries with Knex to provide data in a structured and user friendly format to our front-end team.</p>
                    <div className='line-break'></div>
                    <p><a href='https://github.com/TLBdev/TLBdev.github.io'>Portfolio Web Site</a></p>
                    <p>A single-page responsive React web app with a simple design and clean architecture</p>
                    <p>React | CSS </p>
                    <p>This Portfolio is the deployed site you are currently viewing and was built with no Deadline. I expect a total of 10 man-hours at time of completion.</p>
                    <p>Solely responsible for all stages of development.</p>
                    <p>Used React and CSS to create a single-page web app that uses modals to display a variety of information in a simple easy-to-use format.</p>
                </div>
            </div>
        </div>)
}

export default Projects