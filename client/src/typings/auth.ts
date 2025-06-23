import type {User} from "../generated/graphql.ts";

export interface AuthStore {
    user: User | null;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
    fieldErrors: Record<string, string[]> | null;
    register: (email: string, password: string) => void;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export interface GraphQLErrorExtensions {
    code?: string;
    status?: number;
    details?: Record<string, string[]>;
}