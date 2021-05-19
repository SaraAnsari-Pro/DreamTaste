import React from 'react';
import './HomeSection.css';



function HomeSection() {
    return (
        <div className="home-container">
            <video src='/videos/1.mp4' autoPlay loop muted />
            <h1>Dream Taste Bakery</h1>
            <p>What Are You Waiting For?</p>
        </div>
    )
}

export default HomeSection;
