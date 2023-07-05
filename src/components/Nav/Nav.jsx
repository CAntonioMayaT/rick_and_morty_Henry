import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Style from "./Nav.module.css"

export default function Nav({onSearch}) {
    return (
       <div >
           <nav className= {Style.Navi}>
            <SearchBar onSearch={onSearch}/>
            </nav> 
       </div>
    );
 }
 