import React from 'react';
import './Header.css';

 function Header(){
     return(
      <div>
         <header class="header">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            {/*List of icons for navigation menu */}
               <ul class="menu">
                  <li><a href="#About">About</a></li>
                  <li><a href="#Projects">Projects</a></li>
                  <li><a href="#Skills">Skills</a></li>
                  <li><a href="#Experience">Experience</a></li>
                  <li><a href="#Contact">Contact</a></li>
               </ul>
         </header>
    </div>
     )
 }

 export default Header

