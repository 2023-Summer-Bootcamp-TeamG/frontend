import { create } from 'zustand';

const useDrawingStore = create((set) => ({
  drawings: [],

  addDrawing: (drawing) =>
    set((state) => ({ drawings: [...state.drawings, drawing] })),

  updateDrawing: (index, newProps) =>
    set((state) => ({
      drawings: state.drawings.map((drawing, i) =>
        i === index ? { ...drawing, ...newProps } : drawing,
      ),
    })),

  removeDrawing: (index) =>
    set((state) => ({
      drawings: state.drawings.filter((_, i) => i !== index),
    })),
  clearDrawings: () => set(() => ({ stickers: [] })),
}));

export default useDrawingStore;
