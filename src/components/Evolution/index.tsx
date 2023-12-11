import React, { useState, useEffect } from 'react';
import Evolutioninfo from './Evolutioninfo';
import styles from './evolution.module.scss'

interface Pokemon {
  name: string;
  url: string;
  id: number;

  sprites: {
    front_default: string;
  }
}

const Evolution: React.FC = () => {
  const [pokeData, setPokeData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const [pokeDex, setPokeDex] = useState<Pokemon | undefined>();

  const pokeFun = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      getPokemon(data.results);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPokemon = async (res: Pokemon[]) => {
    for (const item of res) {
      try {
        const response = await fetch(item.url);
        const result = await response.json();
        setPokeData((state) => {
          state = [...state, result];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      } catch (error) {
        console.error(`Error fetching details for ${item.name} Pokemon:`, error);
      }
    }
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

return (
    <>
      <div className={styles.container}>
        <div className={styles.leftcontent}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            pokeData.map((item, index) => (
              <div className={styles.card} key={`pokemon-key-${item.name}-${item.id}-${index}`} onClick={() => setPokeDex(item)}>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
              </div>
            ))
          )}

          <div className={styles.btngroup}>
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl!);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl!);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className={styles.rightcontent}>
          <Evolutioninfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};

export default Evolution;