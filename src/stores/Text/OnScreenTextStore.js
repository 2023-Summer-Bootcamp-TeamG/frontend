import { create } from 'zustand';

const useTextStore = create((set) => ({
  texts: [],
  addText: (newText) => set((state) => ({ texts: [...state.texts, newText] })),
  updateTextPosition: (index, newPosition) =>
    set((state) => ({
      texts: state.texts.map((text, i) =>
        i === index ? { ...text, ...newPosition } : text,
      ),
    })),
  removeText: (index) =>
    set((state) => ({
      texts: state.texts.filter((_, i) => i !== index),
    })),
}));

export default useTextStore;
