import React from 'react';
import './Projects.css';
import carrot from "./Photos/carrot.png"
import stamp from "./Photos/stamp.png"
import ttt from "./Photos/ttt.png"
import todo from "./Photos/todo.png"
import profile from "./Photos/profile.png"


function Projects(){
    return(
        <div id="projects">  
            <div class="projectsContainer" id="Projects">
                <div id="Title">
                    <p>PROJECTS</p>
                </div>
                <div class="cardRow">
                    <div>
                        <img src={ttt} alt="tic tac toe" /> 
                        <h3>Tic Tac Toe</h3>
                        <h4>React JS / HTML / CSS</h4>
                        <p>Created a tic tac toe game in React.
                             Functions update an array of 9 buttons which utilize the 
                             useState hook to make changes on each input or reset.</p>
                        <div class="buttonsDiv" id="button">
                            <div>
                                <a href="https://github.com/samuelbrendese/tictactoe" class="code">{"{ Code }"}</a>
                            </div>
                            <div>
                                <a href="https://samuelbrendese.github.io/tictactoe/" class="demo">{"Demo ->"}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={stamp} alt="stamp" />  
                        <h3>Stamp Landing Page</h3>
                        <h4>JavaScript / HTML / CSS</h4>
                        <p>Completed an online developer challenge where coders replicate an
                             image of a company landing page into a functioning and responsive website.</p>
                        <div class="buttonsDiv" id="button">
                            <div>
                                <a href="https://github.com/samuelbrendese/fe-challenge-master" class="code">{"{ Code }"}</a>
                            </div>
                            <div>
                                <a href="https://samuelbrendese.github.io/fe-challenge-master/" class="demo">{"Demo ->"}</a>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="cardRow">
                    <div>
                        <img src={todo} alt="todo" />
                        <h3>To-Do List</h3>
                        <h4>React JS / HTML / CSS</h4>
                        <p>Created a to-do list in React. Used setState to create functions
                            that add and remove list items from an array. 
                            Each item is added or removed by its own unique id.</p>
                        <div class="buttonsDiv" id="button">
                            <div>
                                <a href="https://github.com/samuelbrendese/todolist" class="code">{"{ Code }"}</a>
                            </div>
                            <div>
                                <a href="https://samuelbrendese.github.io/todolist/" class="demo">{"Demo ->"}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={carrot} alt="carrot" />
                        <h3>MyFood Personal Fridge</h3>
                        <h4>Flutter / Dart</h4>
                        <p>Worked with a team of 8 students to develop an application that organizes the contents
                            of a refrigerator. Built user interface screens.</p>
                        <div class="buttonsDiv" id="button">
                            <div>
                                <a href="https://github.com/samuelbrendese/My_Food_Fall_2020" class="code">{"{ Code }"}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardRow">
                    <div>
                        <img src={profile} alt="profile" />
                        <h3>My Portfolio</h3>
                        <h4>React JS / HTML / CSS</h4>
                        <p>Source code for my portfolio website.</p>
                        <div class="buttonsDiv" id="button">
                            <div>
                                <a href="https://github.com/samuelbrendese/samuelbrendese" class="code">{"{ Code }"}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/*Empty Project Slot */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects