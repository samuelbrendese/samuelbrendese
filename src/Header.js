import React from 'react';
import './Header.css';

 function Header(){
     return(
      <div>
         <header class="header">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
               <ul class="menu">
                  <li><a href="#Home">HOME</a></li>
                  <li><a href="#Projects">PROJECTS</a></li>
                  <li><a href="#About">ABOUT</a></li>
                  <li><a href="#Contact">CONTACT</a></li>
               </ul>
         </header>
    </div>
     )
 }

 export default Header