import create from 'zustand';

const useImageStore = create((set) => ({
  imageUrl: '',

  setImageUrl: (newImageUrl) => set(() => ({ imageUrl: newImageUrl })),
}));

export default useImageStore;
