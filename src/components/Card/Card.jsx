import React from "react";
import Style from "./Card.module.css";
export default function Card({name, status, species, gender, origin, image, onClose}) {
   console.log(Style);
   return <div className={Style.container}>
        <button onClick={onClose}>X</button>
         <h2 className={Style.name}>{name}</h2>
         <h2 className={Style.text}>{species}</h2>
         <h2 className={Style.text}>{gender}</h2>
         <h2 className={Style.text}>{origin.name}</h2>
         <img className={Style.image} src={image} alt= {name + " foto"}/>     
         </div>
   ;
}
