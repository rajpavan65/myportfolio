import React from 'react'


function Skill(props) {
    return (

        <div className='skill'>
            <img style={{ width: '70px', height: '80px', marginBottom: '15px' }} alt='skill' src={props.imgsrc}></img>
            <h4>{props.name}</h4>
        </div>

    )
}

export default Skill
