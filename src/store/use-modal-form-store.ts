import create from "zustand";

interface modalFormState {
  visibleModal: boolean;
  setVisibleModal: (visibleModal: boolean) => void;
}

export const modalFormStore = create<modalFormState>((set) => ({
  visibleModal: true,
  setVisibleModal: (visibleModal) => set(() => ({ visibleModal })),
}));

export default modalFormStore;
