import React from "react";
import Note ,{User}from "./Note";
import Search from "./Search";

function Header(){
    return <header>
    <div className="header1">
    <div className="logo">
    <img className="logoimg" src="https://www.socialboat.live/images/logo.svg"/>
    <h1>Kepper</h1>
    </div>
    
    </div>
    <div>
    <Search/>
    </div>
    <div className="header3">
        <img className="profile" src="https://t3.ftcdn.net/jpg/02/52/42/46/360_F_252424647_xCMdmXLeu0ve0HeoPwDbT7PQUOetqh9e.jpg"/>

     </div>
   
        
    </header>
}

export default Header;