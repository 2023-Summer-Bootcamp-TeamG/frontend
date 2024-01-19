import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useBrushColorStore = create()(
  persist(
    (set) => ({
      brushColor: '#000',
      setBrushColor: (color) => set(() => ({ brushColor: color })),
    }),
    {
      name: 'brushColorStore',
    },
  ),
);

export default useBrushColorStore;
