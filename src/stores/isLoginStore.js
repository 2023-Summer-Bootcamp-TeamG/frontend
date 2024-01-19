import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useIsLoginStore = create()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (boolean) => set(() => ({ isLogin: boolean })),
    }),
    {
      name: 'isLoginStore',
    },
  ),
);

export default useIsLoginStore;
