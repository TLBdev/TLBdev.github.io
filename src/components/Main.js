import React from 'react'

function Main() {
    return (
        <div className="content-cont">
            {/* <div className="sym"><p>{'</>'}</p></div> */}

            <h1 className='align-down'>Tony Burch</h1>
            <div className='line-cont'>
                <div className='borderRightBot'></div><div className='borderLeftBot'></div>
            </div>
            <h2>Full Stack Web Developer</h2>
            <h2>tlb.dev@gmx.com</h2>
            <a href='https://github.com/TLBdev'>GitHub</a>
            <a href='https://www.linkedin.com/in/tonylburch/'>LinkedIn</a>

            <div className='borderLeftTop'></div><span className='borderRightTop'></span>
        </div>
    )
}

export default Main