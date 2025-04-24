interface IUseReviewsStore {
  reviews: IReview[];
  loading: boolean;
  error: Error | null;
  createReview: (id: string, review: IReview, token: string) => Promise<void>;
}

enum Status {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

interface IReview {
  id?: string;
  rating: number;
  comment: string;
  status?: Status;
  userId?: string;
  date?: string;
}
