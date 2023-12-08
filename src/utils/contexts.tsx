import { createContext } from "react";
import { BuddyContextType, PokemonContextType } from "./types";

export const PokemonContext = createContext<PokemonContextType | null>(null)

export const BuddyContext = createContext<BuddyContextType | null>(null)