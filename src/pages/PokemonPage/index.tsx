import Pokemon from "../../components/Pokemon";
import { PokemonType } from "../../utils/types";

const PokemonPage = () => {
    return (
        <div className="pokemon-container">
            <h1>Pokemon Page</h1>

            <Pokemon/>
        </div>
    )
}

export default PokemonPage;