import { useContext,} from "react"
import styles from './pokemon.module.scss'
import { BuddyContextType, PokemonContextType,} from "../../utils/types"
import { BuddyContext, PokemonContext } from "../../utils/contexts"

const Pokemon = () => {

    const {pokemon, setPokemon} = useContext(PokemonContext) as PokemonContextType;

    const {setBuddy} = useContext(BuddyContext) as BuddyContextType;
 
    const API_URL:string = "https://pokeapi.co/api/v2/";

    const getPokemon = async (url:string):Promise<void> => {
        const id:number = Math.floor(Math.random() * 150);

        const response:any = await fetch(url + "pokemon/" + id);
        const data:any =  await response.json()

        const name:string = data.name;
        const image:string = data.sprites.front_default;
        const types: string[] = data.types.map((item:any) => item.type.name);

        setPokemon({name, image, types});

    }
    const handleClick = (): void => {
        if (pokemon) {
            const imageUrl = pokemon.image
            setBuddy(imageUrl)

            const localData = JSON.stringify(imageUrl);
            localStorage.setItem("buddy", localData)
            localStorage.setItem("beer", "yes please")
        }
    }

    return (
        <div>
            {pokemon && 
            <div className={styles.pokemon}>
                <div className={styles["pokemon__name"]}>{pokemon.name}</div>
                <div className={styles[`pokemon__image--${pokemon.types[0]}`]}>
                    <img className={styles["pokemon__image--img"]} src={pokemon.image}/>
                </div>
                <div className={styles["pokemon__type"]}>
                    {pokemon.types.map((item: string, i:number) => <p className={styles[`pokemon__type--${item}`]} key={i}>{item}</p>)}
                </div>
                <button className={styles["pokemon__buddy"]}onClick={() => handleClick()}>make Buddy</button>
            </div>
            }
            <div className={styles["pokemon__actions"]}>
                <button className={styles["pokemon__actions--button"]} onClick={() => getPokemon(API_URL) }>Catch a pokemon</button>
            </div>    
        </div>
    )
}

export default Pokemon;