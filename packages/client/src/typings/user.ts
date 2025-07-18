import { User } from "~graphql/generated/graphql";

export interface UserStore {
	users: User[];
	currentUser: User | null;

	loading: boolean;
	error: string | null;
	fieldErrors: Record<string, string[]> | null;

	fetchAllUsersWithAcceptedBounties: () => void;
	fetchCurrentUser: () => void;
	reset: () => void;
}
