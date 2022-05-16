import React from 'react';
import './Education.css';
import './Projects.css';

function Education(){
    return(
        <div>
            <div class="Divider">
                {/*Black horrizontal line divider div*/}
            </div>
        <div class="Education-container">
            {/*Container with the rest of the project conent*/}
            <div class="Title">
                <h2>Education</h2>
            </div>

            <div class="Education">
                <h4><br />State University of New York (SUNY) College at Plattsburgh</h4>
                <h4>Bachelor’s Degree (B.S.) Computer Science</h4>
                <h4>August 2018 - December 2021</h4>

                <p><b>GPA:</b> 3.59 (Cum Laude) <br /><br /><b>Courses:</b> Software Engineering, Databases,
                 Object Oriented Programming, Web Design, Operating Systems,
                  Data Structures, Public Speaking/Persuasive Writing (Teaching Assistant)<br /><br />
                <b>Award of Academic Excellence in Computer Science:</b> Awarded by the department of computer science
                     to a student who has shown outstanding academic performance in computer science courses.</p>
            </div>
        </div>
        </div>
    )
}

export default Education