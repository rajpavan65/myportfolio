import React from 'react'


function About() {
    return (
        <div className='skillsec'>
            

                <h1 style={{ marginBottom: '20px' }}>About Me</h1>
                <p style={{ marginBottom: '20px' }}>Find out who I am, where I'm from and what I'm all about.</p>
                <div className='aboutme'>
                    <img src='./Images/dp.jpeg' alt='dp' />
                    <h1>Hi, I'm Pavan.</h1>

                    <h2>A web designer and developer from Southampton in the India. I create bespoke websites to help people go further online.</h2>
                    <br></br>

                    <p style={{ textAlign: 'justify', marginBottom: '20px' }}>Since beginning my journey as a freelance developer nearly 2 years ago, I've done remote work for agencies, startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>

                    <button className='btn'>Resume</button>
                </div>
           

        </div>






    )

}

export default About
