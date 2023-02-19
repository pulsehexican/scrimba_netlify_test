import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function renderElement(content,id){
    ReactDOM.render(content, document.getElementById(id));
}

const header_content=(
    <div>
        <h1 className="header">Hello, React!</h1>
    </div>
);

const main_content=(
    <div>
        <h2 className="header2">This is the main content !</h2>
    </div>
);

const footer_content=(
    <div>
        <p className="footer">footer of the site</p>
    </div>
    
);

function publishContent(){
renderElement(header_content,"header");
renderElement(main_content,"content");
renderElement(footer_content,"footer");
}


publishContent();

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)
