import React from "react";
import './about-content.scss';

const AboutContent = () => {
    return (
        <div className = "about-content-container">
            <div className="about-content">
                <div className="left-content">
                    <h1>Personal Summary</h1>
                    <p>
                    My name is Max Sealey, and I earned a Bachelor of Science in Computer Science in the Summer of 2024. 
                    Thank you for taking the time to explore my portfolio!<br/><br/>
                    I’m currently seeking for opportunities in the Spokane/Coeur d'Alene area (commuting is no issue) to contribute 
                    as a software developer, SQA engineer, web developer, data analyst, information security specialist, 
                    database or network administrator, systems architect, or IT specialist.
                    <br/><br/>
                    {/**My interest in coding began in 2014 when I learned C to program "Battle Bot" robots (3D printed parts, 
                    powered by an Arduino) for a high school competition. Later that year I learned HTML, CSS, and jQuery to develop
                    a dating service website for Start-up Weekend Spokane, a local hackathon/entrepreneurship competition.
                    */}
                    </p>
                </div>
                <div className="right-content">
                    <h1>Skills</h1>
                    <p>Languages: Java, Python, JavaScript, SQL, HTML/CSS/Sass, Git<br/><br/>
                    Frameworks: React/Redux, Node.js, Express.js, Spring Boot, JavaFX, Flask, Bootstrap<br/><br/>
                    Tools & Platforms: Github, MySQL Workbench, Postman, Linux, IntelliJ, PyCharm<br/><br/>
                    Other Skills: RESTful API Development, Database Management, OOP Principles, Machine Learning<br/><br/>
                    </p>
                </div>
                {/**<h1>Programming Experience</h1>
                <p></p>
                <h1>Work Philosophy</h1>
                <p></p>
                <h1>Professional Goals</h1>
                <p></p>**/}
            </div>``
        </div>
    )
}

export default AboutContent;