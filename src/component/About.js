import React from 'react'
import "./About.css";


export default function About() {
    return (
        <>
            <div className="navfloat">
                <div className="about">
                    <h1>About me</h1>
                    <h2>Who Am I?</h2>
                </div>
                <div className="info">
                    <div className="aboutme">
                        <h3>I'm Rohan and I am a Freelancer</h3>
                        <p>I am currently pursuing B.E degree in Information Technology from Atharva College of engineering.I enjoy taking complex programs and turning them into simple and beauiful interface design</p>
                    </div>
                    <div className="aboutimg">
                        <img src="img/ab.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
