interface IAuthStore {
  loading: boolean;
  accessToken: unkonw;
  isAuthenticated: boolean;
  error: Error | null;
  setSignIn: (data: IFormInput) => Promise<void>;
  setSignUp: (data: IFormInput) => Promise<void>;
  logout: () => void;
}

interface IFormInput {
  email: string;
  password: string;
}
