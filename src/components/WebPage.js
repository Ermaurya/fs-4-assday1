import React from "react";
import ReactDOM from "react-dom";
 const  WebPage =()=>{
    
    let demo = React.createElement(
        "h1", { style: { color: "black" } }, "Welcome to geekster",
     
    )
   
    ReactDOM.render(
        demo,
       
        document.getElementById('root')
    );
    
 }
 export default WebPage;
