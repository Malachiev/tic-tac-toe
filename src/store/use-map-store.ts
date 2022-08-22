import { ReactNode } from "react";
import create from "zustand";

interface mapState {
  step: number;
  setStep: (step: number) => void;

  squares: Array<string | ReactNode | null>;
  setSquares: (squares: Array<string | ReactNode | null>) => void;

  tableSize?: number;
  setTableSize: (tableSize: number) => void;
}

export const mapStore = create<mapState>((set) => ({
  step: 0,
  setStep: (step) => set(() => ({ step })),

  tableSize: 9,
  setTableSize: (tableSize) => set(() => ({ tableSize })),

  squares: Array(9).fill(null),
  setSquares: (squares) => set(() => ({ squares })),
}));

export default mapStore;
