import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='initialDiv'>
         
         <div>
            <h1 className='tittle'>Rick and Morty</h1>
         </div>
       
        
         <div className='App'>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
            <Cards characters={characters} onClose={() => window.alert('Emulamos que se cierra la card')} />
         <div className='divP'>
         <div className='portal'>
         </div>
         </div>
         </div>
      </div>
   );
}

export default App;
