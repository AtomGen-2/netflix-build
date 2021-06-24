import React from 'react';
import "./HomeScreen.css";
import Navbar from "./Navbar.js";
import Banner from "./Banner.js";

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Navbar */}
            <Navbar />
            {/* Banner */}
            <Banner />
            {/* Rows */}
        </div>
    )
}

export default HomeScreen
