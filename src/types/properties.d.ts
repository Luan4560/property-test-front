interface IUseListPropertiesStore {
  properties: IProperty[];
  property: IProperty | null;
  loading: boolean;
  error: Error | null;
  setProperties: (items: IProperty[]) => void;
  fetchProperties: () => Promise<void>;
  fetchPropertyById: (id: string) => Promise<void>;
}

export interface IProperty {
  id: string;
  name: string;
  location: string;
  image?: string;
  reviews: IReview[];
}
