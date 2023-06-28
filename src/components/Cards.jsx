import React from 'react';
import Card from './Card';

export default function Cards({characters, onClose}) {
   return <div>
   {characters.map(obj => {return <Card key={obj.id} name={obj.name} status={obj.status} species={obj.species} gender={obj.gender} origin={obj.origin} image={obj.image} onClose={onClose}/>})}

   </div>;
}
