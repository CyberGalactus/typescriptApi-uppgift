import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import PokemonPage from './pages/PokemonPage';
import Ash from "./pages/Ash";
import Pokedex from "./pages/Pokedex";
import FileNotFound from './pages/FileNotFound';
import Layout from './pages/Layout';
import { PokemonType } from './utils/types';
import { BuddyContext, PokemonContext } from './utils/contexts';

function App() {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null)
  const [buddy, setBuddy] = useState<string>('./src/assets/pokemonball.jpeg');
  
  return (
    <>
      <PokemonContext.Provider value={{pokemon, setPokemon}}>
        <BuddyContext.Provider value={{buddy, setBuddy}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokemon" element={<PokemonPage />} />
            <Route path="/ash" element={<Ash />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/*" element={<FileNotFound />} />
          </Route>  
        </Routes>
        </BuddyContext.Provider>

      </PokemonContext.Provider>
    </>
  )
}

export default App;
