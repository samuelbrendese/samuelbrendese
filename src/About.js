import React from 'react';
import './About.css';
import './Projects.css';

function About(){
    return(
    <div>
        <div class="Skills-container" id="About">  
            <div class='Title'>
                <p id="Title">ABOUT ME</p>
            </div>
            <div class="Skills">
                <div>
                    <p>
                    My experience as a developer has allowed me to capitalize on my ability 
                    to communicate with engineers and understand what
                    helps maximize the value of a product while ensuring the satisfaction of the customers I serve.
                    What I thrive on is consistent teamwork and collaboration in a positive work environment. 
                    What I bring to the table is the drive to empathize with customers and stakeholders to
                    create the best user experience possible.
                    These qualities when combined with a passion for technology are what have
                    inspired me to pursue becoming a product manager. In my free time,
                    I enjoy playing ice hockey, golfing, reading, and cooking.
                    </p>
                    <h3>Skills</h3>
                    <p id="skillsList">JavaScript, HTML/CSS, React, Figma, DevOps/Jira,
                    Basecamp, Confluence, Salesforce, 
                    SharePoint, Excel, Power BI, SQL, 
                    TypeScript, Bootstrap, Git/GitHub, Linux OS</p>
                </div>
            </div>            
        </div>
    </div>
    )
}

export default About
