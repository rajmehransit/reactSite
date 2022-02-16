import React from "react";

function Note(props){
    return (<div className="note">
        <h1>{props.name}</h1>
        <img className="img" src={props.img}/>
        <p>
        <a  class="btn" href={props.href}>Instagram!</a>
        </p>
        <p> <a  class="btn" href={props.href2}>Git</a></p>
        
    </div>)
   }

   function User(props){
    return(<p className="profile" href="">{props.name}</p>)
   }

export default Note;
export {User};