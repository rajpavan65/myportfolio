import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        
            <div className='navbar'>
                <Link to='./' className="logo" style={{ color: "#0A81AB" }} >Port<span style={{ color: "#FFC7C7" }}>folio</span></Link>
                <div className="nav" >
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/About'>About</Link>
                    <Link className="link" to='/Skills'>Skills</Link>
                    <Link className="link" to='/Tools'>Tools</Link>
                    <Link className="link" to='/Project'>Projects</Link>
                    <Link className="link" to='/Contact'>Contact</Link>
                </div>


            </div>
        


    )
}

export default Navbar
