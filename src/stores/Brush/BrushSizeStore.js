import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useBrushSizeStore = create()(
  persist(
    (set) => ({
      brushSize: 5,
      setBrushSize: (size) => set(() => ({ brushSize: size })),
    }),
    {
      name: 'brushSizeStore',
    },
  ),
);

export default useBrushSizeStore;
