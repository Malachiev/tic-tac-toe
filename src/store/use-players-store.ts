import create from "zustand";

type Player = {
  name: string;
  symbol: "X" | "O" | "";
  won: number;
};

interface playersState {
  player_1: Player;
  setPlayer_1: (player_1: Player) => void;

  player_2: Player;
  setPlayer_2: (player_2: Player) => void;
}

export const playersStore = create<playersState>((set) => ({
  player_1: { name: "", symbol: "", won: 0 },
  setPlayer_1: (player_1) => set(() => ({ player_1 })),

  player_2: { name: "", symbol: "", won: 0 },
  setPlayer_2: (player_2) => set(() => ({ player_2 })),
}));

export default playersStore;
