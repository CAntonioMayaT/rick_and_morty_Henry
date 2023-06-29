import React from 'react';
import Card from '../Card/Card';
import Style from "./Cards.module.css";

export default function Cards({characters, onClose}) {
   return  <div className={Style.container}>
   {characters.map(obj => {return <Card key={obj.id} name={obj.name} status={obj.status} species={obj.species} gender={obj.gender} origin={obj.origin} image={obj.image} onClose={onClose}/>})}

   </div>;
}
