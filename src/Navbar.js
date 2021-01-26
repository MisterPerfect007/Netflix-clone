import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
            return () => {
                window.removeEventListener("scroll")
            }
        })
      }, [])
    return (
        <div className={`navbar ${show && 'dark--navbar'}`}>
            <img 
                className="navbar__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="logo" />
            <img    
                className="navbar__logo"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                alt="logo" />
        </div>
    )
}

export default Navbar
