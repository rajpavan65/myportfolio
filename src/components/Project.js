import React from 'react'

function Project() {
    return (
       
        <div className='skillsec'>
            <h1 style={{ marginBottom: '20px' }}>Projects</h1>
            <p style={{ marginBottom: '20px' }}>From ideation to creation, here are some applications that I have developed.</p>
            <div className='cardContainer'>
                <div className='card'>
                    <div className='overlay'>
                        <a target='_blank'  rel="noreferrer" href='https://rudrakshherbs.com'>Ecommerce Store</a>
                    </div>
                    <img src='./Images/rudraksh.jpeg' alt='project1' />
                </div>
                <div className='card'>
                    <div className='overlay'>
                        <a target='_blank'  rel="noreferrer" href='https://digigrowdigital.in/'>Marketing Agency</a>
                    </div>
                    <img src='./Images/digigrow.jpeg' alt='project2' />
                </div>
                <div className='card'>
                    <div className='overlay'>
                        <a target='_blank'  rel="noreferrer" href='https://digigrow.lovestoblog.com/'>Digital Agency</a>
                    </div>
                    <img src='./Images/agency.png' alt='project3' />
                </div>

            </div>




        </div>
        





    )
}

export default Project
