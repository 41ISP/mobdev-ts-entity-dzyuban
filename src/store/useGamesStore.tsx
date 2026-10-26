import { create } from "zustand";
import type { IGame } from "../types";
interface IGameStore {
    games: IGame[]
}
export const useGamesStore = create<IGameStore>((set) => ({
    games: []
}))