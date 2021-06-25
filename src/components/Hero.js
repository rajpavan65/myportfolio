import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../hero.svg' 

function Hero() {
    return (
        <div className='home'>
            <div className='heroText'>
            <h1>Hi I am Pavan</h1>
            <h3>A Web Developer</h3>
            <Link to='./Contact'><button className='btn'>Get Started</button> </Link>
            </div>
            <div className='heroImg'>
                <img src={HeroImage} alt='hero'/>
            </div>
        </div>
    )
}

export default Hero
