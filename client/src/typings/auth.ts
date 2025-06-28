import type { User } from "../generated/graphql.ts";
import type { AuthActionType } from "../shared/constants";

export interface AuthStore {
  user: User | null;
  error: string | null;
  isAuth: boolean;
  loading: boolean;
  fieldErrors: Record<string, string[]> | null;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  resetErrors: () => void;
}

export interface GraphQLErrorExtensions {
  code?: string;
  status?: number;
  details?: Record<string, string[]>;
}

export interface AuthFormProps {
  mode: AuthActionType;
}