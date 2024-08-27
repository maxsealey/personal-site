import React from "react";
import './about-content.scss';

const AboutContent = () => {
    return (
        <div className = "about-content-container">
            <div className="about-content">
                <div className="left-content">
                    <h1>Personal Summary</h1>
                    <p>
                    Hi, I'm Max Sealey, a recent Computer Science graduate with a passion for coding and a drive 
                    to become a successful software engineer. With hands-on experience in web development, data analysis,
                    and software engineering, I bring a strong foundation in Java, Python, and JavaScript.<br/><br/>
                    Over the years, I’ve been constantly working to improve my skills in JavaScript, React, Node.js, and Python, 
                    with a growing proficiency in full-stack development, database management, and data science. 
                    I’ve also developed a solid understanding of object-oriented programming and machine learning concepts, 
                    which I’m eager to apply in a professional setting. My portfolio showcases a 
                    range of projects that reflect my ability to develop high-quality software solutions and ability to .<br/><br/>
                    When I’m not coding, I enjoy spending time with family, watching the NFL, competing in fantasy football leagues, playing trading card games 
                    with friends (particularly MTG Commander), spending time outdoors, or engaging in one of many other hobbies.<br/><br/>
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