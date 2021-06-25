import React from 'react'
import Skill from './Skill'
import Sdata from '../Sdata'


function Services() {
    return (
        <div className='skillsec'>
            <h1 id='h1-main' style={{marginBottom:'20px'}}>Skills</h1>
            <p style={{marginBottom:'20px'}}>Languages and Technologies that I have learned and applied to my projects</p>
            <div className='skillset'>
                {Sdata.map(function scard(val) {
                    return (
                        <Skill
                            key={val.id}
                            name={val.name}
                            imgsrc={val.imgsrc}
                        />

                    );
                }

                )}

            </div>




        </div>
    )
}

export default Services