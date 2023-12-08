export type PokemonType = {
    name: string,
    image: string,
    types: string[]
}

export type PokemonContextType = {
    pokemon: PokemonType | null,
    setPokemon: (pokemon:PokemonType | null) => void
}

export type BuddyContextType = {
    buddy: string
    setBuddy: (buddy:string) => void
}