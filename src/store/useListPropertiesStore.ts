import api from "@/services/api";
import { IProperty, IUseListPropertiesStore } from "@/types/properties";
import { create } from "zustand";

const useListPropertiesStore = create<IUseListPropertiesStore>((set) => ({
  properties: [],
  property: null,
  loading: false,
  error: null,

  setProperties: (items: IProperty[]) => set({ properties: items }),

  fetchProperties: async () => {
    set({ loading: true });
    try {
      const response = await api.get("/properties");
      set({ properties: response.data, loading: false });
    } catch (error) {
      set({ error: error as Error, loading: false });
    }
  },

  fetchPropertyById: async (id: string) => {
    set({ loading: true });
    try {
      const response = await api.get(`/properties/${id}`);
      set({ property: response.data, loading: false });
    } catch (error) {
      set({ error: error as Error, loading: false });
    }
  },
}));

export default useListPropertiesStore;
