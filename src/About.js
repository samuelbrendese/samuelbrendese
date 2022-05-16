import React from 'react';
import './About.css';
import './Contact.css'
import Me from './Photos/me.png';

function About(){
    return(
        <div>
            <div class="About-container" id="About">
                {/*class "About" holds all content*/}
                <div class="About">
                    {/*Picture of me*/}
                    <img src={Me} alt="Me" />
                    <h1>Samuel Brendese</h1>
                    <p><b><a href="mailto:sambrendese@gmail.com" class="About-link">sambrendese@gmail.com</a> |  
                        <a href="https://www.linkedin.com/in/samuel-brendese-4075721a8/" class="About-link"> LinkedIn: Samuel Brendese</a></b><br /><br />
                        I am a Front End Developer and recent Computer Science graduate with industry experience building 
                        websites, databases, and web applications.<br /><br />

                        My goal is to maintain relationships with clients during and after user requirements 
                        have been 100% satisfied in the most efficient and quality manner.<br /><br />

                        In my free time I enjoy playing ice hockey, 
                        golfing, cooking, weight lifting, and building websites.<br />
                    </p>
                </div>
            </div>
        </div>           
    )
}

export default About