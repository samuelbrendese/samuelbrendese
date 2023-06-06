import React from 'react';
import './Contact.css';
import Email from "./Photos/email.png"
import Linkedin from "./Photos/linkedin.png"
import Github from "./Photos/github.png"
import Dribbble from "./Photos/dribbble.png"

function Contact() {
    return (
        <div id="Contact">
            <div class="Contact">
                <p id="Title">CONTACT ME</p>
                <p id="ConnectMessage">Feel free to reach out via Email or check out the rest of my work!</p>
                <a href="mailto:sambrendese@gmail.com" class="Button"><img class="Button-img" src={Email} alt="Email Icon" /></a>   
                <a href="https://www.linkedin.com/in/samuel-brendese-4075721a8/"class="Button"><img class="Button-img" src={Linkedin} alt="LinkedIn Icon"/></a>
                <a href="https://github.com/samuelbrendese"class="Button"><img class="Button-img" src={Github} alt="GitHub Icon"/></a>
                <a href="https://dribbble.com/SamBrendese"class="Button"><img class="Button-img" src={Dribbble} alt="Dribbble Icon"/></a>               
            </div>
        </div>
    )
}

export default Contact