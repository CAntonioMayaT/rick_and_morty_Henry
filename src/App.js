import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';

function App() {

   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };


   const [characters, setCharacters] = React.useState([]);

   const onSearch = () => {setCharacters([...characters, example])};

   
   const onClose = (id) => {
      }
  


   return (
      <div className='initialDiv'>
         <Nav onSearch={onSearch}/>


         <div>
            <h1 className='tittle'>Rick and Morty</h1>
         </div>
       
        
         <div className='App'>
            <Cards characters={characters} onClose={onClose} />
         </div>
      </div>
   );
}

export default App;
