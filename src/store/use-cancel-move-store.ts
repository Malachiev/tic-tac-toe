import create from "zustand";

interface cancelMoveState {
  moveHistory: Array<number>;
  setMoveHistory: (moveHistory: Array<number>) => void;
}

export const cancelMoveStore = create<cancelMoveState>((set) => ({
  moveHistory: [],
  setMoveHistory: (moveHistory) => set(() => ({ moveHistory })),
}));

export default cancelMoveStore;
