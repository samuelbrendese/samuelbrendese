import React from 'react';
import './Skills.css';
import './Projects.css';


function Skills(){
    return(
    <div id="Skills">
        {/*^ID "Skills" is named so the nav can take you to that position on the page*/}
        <div class="Divider">
            {/*Black horrizontal line divider div*/}
        </div>
        <div class="Skills-container">  
        {/*Container with the rest of the conent*/}         
            <div class='Title'>
                {/*Title of section*/}
                <h2>Skills</h2>
            </div>
            <div class="Skills">
                <div>
                    <h3>Languages:</h3>
                    <p>JavaScript, Python</p>
                </div>
                <div>
                    <h3>Technical Skills:</h3>
                    <p>HTML / CSS, React, TypeScript, GraphQL, Material UI, 
                        Bootstrap, Figma, Linux OS, Git / GitHub, jQuery, 
                        SharePoint, Excel, Power BI</p>
                </div>
            </div>            
        </div>
    </div>
    )
}

export default Skills
