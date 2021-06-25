import React from 'react'


function Tool(props) {
    return (

        <div className='skill'>
            <img style={{ width: '80px', height: '80px', marginBottom: '15px' }} alt='skill' src={props.imgsrc}></img>
            <h4>{props.name}</h4>
        </div>

    )
}

export default Tool
