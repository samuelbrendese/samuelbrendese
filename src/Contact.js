import React from 'react';
import './Contact.css';
import Email from "./Photos/email.png"
import Linkedin from "./Photos/linkedin.png"


function Contact() {
    return (
        <div id="Contact">
            {/*^ID "Contact" is named so the nav can take you to that position on the page*/}
            <div class="Contact">
                {/*Container with the rest of the project conent*/}
                <h2>Get In Touch!</h2>
                {/*Email Link*/}
                <a href="mailto:sambrendese@gmail.com" class="Button"><img class="Button-img" src={Email} alt="Email Icon" /></a>   
                {/*LinkedIn Link*/}            
                <a href="https://www.linkedin.com/in/samuel-brendese-4075721a8/"class="Button"><img class="Button-img" src={Linkedin} alt="LinkedIn Icon"/></a>               
            </div>
        </div>
    )
}

export default Contact