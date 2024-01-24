import create from 'zustand';

const useFilterStore = create((set) => ({
  filterUrl: [],

  //   setFilterUrl: (newFilterUrl) => set(() => ({ filterUrl: newFilterUrl })),
  setFilterUrl: (newFilter) =>
    set((state) => ({ filterUrl: [...state.filterUrl, newFilter] })),
}));

export default useFilterStore;
