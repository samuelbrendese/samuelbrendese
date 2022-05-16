import React from 'react';
import './Experience.css';
import './Projects.css';
import Resume from "./RESUME_SAMUEL_BRENDESE.pdf"

function Experience(){
    return(
        <div id="Experience">
            {/*^ID "Experience" is named so the nav can take you to that position on the page*/}
            <div class="Divider">
                 {/*Black horrizontal line divider div*/}
            </div>
            <div class="Experience-container">    
                 {/*Container with the rest of the experience conent*/}       
                <div class="Title">
                    <h2>Experience</h2>
                </div>
                <div class="Experience">
                    <h4><br />Frontend Developer Intern</h4>
                    <h4>Applied Visions (Northport, NY)</h4>
                    <h4>March 2022 – Present</h4>
                    <p>-  Implemented a system diagnostics page for administrators and developers while application 
                        was in production. Utilized React, TypeScript, 
                        and GraphQL to recursively query diagnostics data into nested drop menus.<br /><br />
                        
                        - Developed a theme page comprised of a custom Material UI component library for developers to reference when creating new pages within assigned project.<br /><br />

                        - Collaborated with team members to ensure efficient coding practices and proper documentation.<br /><br />
                    </p>
                    <h4><br />Website Design and Data Management Intern</h4>
                    <h4>Global Foundries (Malta, NY)</h4>
                    <h4>June 2021 - December 2021</h4>
                    <p>- Facilitated the migration and re-design of the research and development team’s internal website amidst a company-wide
                        migration from Google to Microsoft. The site supports over 15,000 employees.<br /><br />
                        
                        - Utilized Microsoft Power BI and Excel to stream large databases into the new 350-page Microsoft SharePoint site.
                        Designed and built management functions for non-technical employees to access, edit, and update information while
                        reducing data repetition and maintaining data integrity.<br /><br />

                        - Created internal and external web pages for the company’s “Global Journey Re-Entry Program” which is designed to offer
                        return-to-work opportunities – primarily for women – who have taken a career break for an extended period and are
                        looking to return to the workforce.<br /><br />

                        - Collaborated with team members and branding managers to gather internal focus groups in order to improve end-user
                        experience for all assigned projects.<br /><br />
                    </p>
                    {/*Button to download resume*/}
                    <div class="Rb-container">
                        <a href={Resume} class="Resume-button" download>Complete Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience