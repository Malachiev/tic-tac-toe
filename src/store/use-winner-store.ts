import create from "zustand";

interface winnerState {
  winner: string;
  setWinner: (winner: string) => void;
}

export const winnerStore = create<winnerState>((set) => ({
  winner: "",
  setWinner: (winner) => set(() => ({ winner })),
}));

export default winnerStore;
