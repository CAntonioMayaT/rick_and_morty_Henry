import React from "react";
import Style from "./SearchBar.module.css";

export default function SearchBar(props) {
   return (
      <div className={Style.DivSearchBar}>
          <input className={Style.SearchBar} type='text' placeholder="Busca un personaje... "/> <button className={Style.InputButton} onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
