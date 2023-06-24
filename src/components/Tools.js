import React from 'react'
import Tool from './Tool'
import Tdata from '../Tdata'


function Tools() {
    return (
        <div className='skillsec'>
            <h1 style={{marginBottom:'20px'}}>Tools</h1>
            <p style={{marginBottom:'20px'}}>My weapons of choice to help tackle any project.</p>
            <div className='skillset'>
                {Tdata.map(function tcard(val) {
                    return (
                        <Tool
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

export default Tools