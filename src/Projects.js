import React from 'react';
import './Projects.css';
import profile from "./Photos/profile.png"
import carrot from "./Photos/carrot.png"
import blog from "./Photos/blog.png"
import stamp from "./Photos/stamp.png"
import ttt from "./Photos/ttt.png"
import todo from "./Photos/todo.png"
import profileDraft from "./Photos/profile-draft.png"

function Projects(){
    return(
        <div id="Projects">  
        {/*^ID "Projects" is named so the nav can take you to that position on the page*/}
            <div class="Divider">
                {/*Black horrizontal line divider div*/}
            </div>
            <div class="Projects-container">
            {/*Container with the rest of the project conent*/}
                <div class="Title">
                    <h2>Projects</h2>
                </div>
    
                <div class="Card-row">
                {/*1st Project Row*/}

                    <div>
                        <a href="https://samuelbrendese.github.io/tictactoe/">
                            <img src={ttt} alt="tic tac toe" />
                        </a>                   
                        <h3>Tic Tac Toe</h3>
                        <h4>React JS / HTML / CSS</h4>                  
                        <h4><a href="https://github.com/samuelbrendese/tictactoe">- Link to Code -</a></h4>               
                        <p>Created a tic tac toe game in React. Functions update an array of 9 buttons
                            which include the useState hook that make changes on each input or reset. Each turn increments a "count" value
                            which controls "X" and "O" input to each box.</p>
                    </div>

                    <div>
                        <a href="https://samuelbrendese.github.io/fe-challenge-master/">
                            <img src={stamp} alt="stamp" />
                        </a>                   
                        <h3>Stamp Landing Page</h3>
                        <h4>JavaScript / HTML / CSS</h4>                  
                        <h4><a href="https://github.com/samuelbrendese/fe-challenge-master">- Link to Code -</a></h4>               
                        <p>Completed online developer challenge where coders replicate a PNG image of a company landing page into a functioning, responsive web site.
                             Used HTML, CSS, and Vanilla JavaScript to create and style the landing page.
                              Allows user to sign up for a membership by entering username, email, and password.</p>
                    </div>

                    <div>
                        <a href="https://github.com/samuelbrendese/My_Food_Fall_2020">
                            <img src={carrot} alt="carrot" />
                        </a>                   
                        <h3>MyFood Personal Fridge</h3>
                        <h4>Flutter / Dart</h4>                  
                        <h4><a href="https://github.com/samuelbrendese/My_Food_Fall_2020">- Link to Code -</a></h4>               
                        <p>Worked with a team of 8 students to develop an application that manages the contents of a refrigerator.  
                        Used Google Flutter and Dart to build user interface screens.</p>
                    </div>

                               
                </div>

                <div class="Card-row">
                {/*2nd Project Row...*/}
                    <div>
                        <a href="https://samuelbrendese.github.io/todolist/">
                            <img src={todo} alt="to do list" />
                        </a>
                        <h3>To-Do List</h3>
                        <h4>React JS / HTML / CSS</h4>                   
                        <h4><a href="https://github.com/samuelbrendese/todolist">- Link to Code -</a></h4>                   
                        <p>Created a to-do list in React. Used setState to create functions that add and remove
                            list items from an array. Each item is added and removed with its own unique id.
                        </p>
                    </div>

                    <div>
                        <a href="https://samuelbrendese.github.io/samuelbrendese/">
                            <img src={profile} alt="profile" />
                        </a> 
                        <h3>Code For This Page</h3>
                        <h4>React JS / HTML / CSS</h4>
                        <h4><a href="https://github.com/samuelbrendese/samuelbrendese">- Link to Code -</a></h4>
                        <p>Updated personal portfolio website. Completely responsive React application 
                        displaying code for my projects and professional information.</p>
                    </div>

                    <div>
                        <a href="https://github.com/samuelbrendese/FlaskBlog">
                            <img src={blog} alt="blog" />
                        </a>
                        <h3>Flask Blog</h3>
                        <h4>SQlite / Flask / Python</h4>                   
                        <h4><a href="https://github.com/samuelbrendese/FlaskBlog">- Link to Code -</a></h4>                   
                        <p>Created a web blog using SQLite and Flask in Python3. Users create, edit, 
                        and delete posts that have been displayed in a list on the homepage of the blog.</p>
                    </div>  

                </div>

                <div class="Card-row">
                    {/*3rd Project Row...*/}
                    <div>
                        <a href="https://samuelbrendese.github.io/brendesetest.github.io/">
                            <img src={profileDraft} alt="profile" />
                        </a>
                        <h3>1st Portfolio Site Draft</h3>
                        <h4>Bootstrap / HTML / CSS</h4>                  
                        <h4><a href="https://github.com/samuelbrendese/brendesetest.github.io">- Link to Code -</a></h4>                    
                        <p>Original draft of my personal portfolio website created with Bootstrap framework.</p>
                    </div> 

                    <div>
                        
                    </div>

                    <div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects