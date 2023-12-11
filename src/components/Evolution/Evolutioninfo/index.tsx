import React from 'react';
import styles from '../evolution.module.scss'

interface Ability {
  ability: {
    name: string;
  };
}

interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface PokemonData {
  name: string;
  id: number;
  abilities: Ability[];
  stats: Stat[];
}

interface PokeinfoProps {
  data: PokemonData | undefined;
}

const Evolutioninfo: React.FC<PokeinfoProps> = ({ data }) => {
  return (
    <>
      {!data ? (
        ''
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className={styles.abilities}>
            {data.abilities.map((poke) => (
              <div key={poke.ability.name} className={styles.group}>
                <h2>{poke.ability.name}</h2>
              </div>
            ))}
          </div>
          <div className={styles.basestat}>
            {data.stats.map((poke) => (
              <h3 key={poke.stat.name}>
                {poke.stat.name}:{poke.base_stat}
              </h3>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Evolutioninfo;
