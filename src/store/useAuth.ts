import api from "@/services/api";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create<IAuthStore>()(
  persist(
    (set) => ({
      loading: false,
      accessToken: null,
      error: null,
      isAuthenticated: false,

      setSignUp: async (data: IFormInput) => {
        set({ loading: true });
        try {
          const response = await api.post("/auth/signup", data);
          set({ accessToken: response.data, loading: false });
        } catch (error) {
          set({ error: error as Error, loading: false });
        }
      },

      setSignIn: async (data: IFormInput) => {
        set({ loading: true });
        try {
          const response = await api.post("/auth/signin", data);
          set({ accessToken: response.data, loading: false });
        } catch (error) {
          set({ error: error as Error, loading: false });
        }
      },

      logout: () => {
        set({ accessToken: null, isAuthenticated: false });
      },
    }),

    {
      name: "auth-storage",
      partialize: (state) => ({ accessToken: state.accessToken }),
    }
  )
);
export default useAuth;
