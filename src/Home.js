import React from 'react';
import './Home.css';
import './Contact.css'
import Me from './Photos/me.png';
import Resume from "./SAMUEL_BRENDESE_RESUME.pdf"


function Home(){
    return(
        <div>
            <div class="aboutContainer" id="Home">
                <div class="about" id="profileDiv">                    
                        <img src={Me} alt="Me" />
                </div>
                <div class="about" id="bioDiv">
                    <p>
                        <span class="bioName">SAMUEL BRENDESE</span><br/>
                        I'm a product specialist with industry 
                        experience in front end development and UX/UI design.
                        My goal is to empathize with users to bring product ideas
                        to life in the most efficient and quality manner.
                    </p>
                    <p>
                        Professional Scrum Product Owner I {"(PSPO I ™)"} <br />
                        Professional Scrum Master I {"(PSM I ™)"}
                    </p>
                    <p id="seeking">
                    </p>                  
                    <div id="resumeDiv">
                        <a href={Resume} class="resume" download>My Resume</a>
                    </div>
                </div>
            </div>
        </div>           
    )
}

export default Home