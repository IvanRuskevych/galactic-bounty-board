import type { User } from "../generated/graphql.ts";

export interface UserStore {
  users: User[];
  
  loading: boolean;
  error: string | null;
  fieldErrors: Record<string, string[]> | null;
  
  fetchAllUsersWithAcceptedBounties: () => void
}