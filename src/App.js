import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = React.useState([]);

   function Looking(id){
      
      for (let i = 0; i<characters.length; i++) {
         if (characters[i].id == id) return false; 
     }
     return true;
   }

   function onSearch(id) {  
     
     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name && Looking(id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('Tu personaje ya fue agregado');
         }
      }) .catch((error => window.alert("No existe ese personaje")));
   }
   
  function close (id) {
   setCharacters(
      characters.filter((pj)=>{
         return pj.id !== Number(id)}))
  }
  
   return (
      <div className='initialDiv'> 
         <Nav onSearch={onSearch}/>


         <div>
            <h1 className='tittle'>Rick and Morty</h1>
         </div>
       
         <div className='App'>
            <Cards characters={characters} close={close} />
         </div>
      </div>
   );
}

export default App;
