import api from "@/services/api";
import { create } from "zustand";

const useReviewsStore = create<IUseReviewsStore>((set) => ({
  reviews: [],
  loading: false,
  error: null,

  createReview: async (id: string, review: IReview, token: string) => {
    set({ loading: true });

    try {
      const response = await api.post(`/properties/${id}/reviews`, review, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      set({ reviews: response.data, loading: false });
    } catch (error) {
      set({ error: error as Error, loading: false });
    }
  },
}));

export default useReviewsStore;
