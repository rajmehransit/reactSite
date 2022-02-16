import React from "react";

function searchbar(){
    return(
        <div className="search">
            <div className="searchbar">
                <input type="text" className="searchbox" placeholder="Enter to search"/>
                <div className="searchicon">⭕</div> 
            </div> 
        </div>
    )
}
export default searchbar;