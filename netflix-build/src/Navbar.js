import React, { useState, useEffect } from 'react';
import "./Navbar.css"

function Navbar() {
    const [show, handleShow] =useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">

            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" className="nav__logo"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className="nav__avatar"/>
            </div>
        </div>
    )
}

export default Navbar
