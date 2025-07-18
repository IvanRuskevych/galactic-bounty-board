import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userServices } from "~/services";
import { handleApolloError } from "~/shared/utils";
import { UserStore } from "~/typings";
import { User } from "~graphql/generated/graphql";

export const useUserStore = create<UserStore>()(
	persist(
		(set) => ({
			users: [] as User[],
			currentUser: null,
			loading: false,
			error: null,
			fieldErrors: null,

			fetchAllUsersWithAcceptedBounties: async () => {
				set({ loading: true, error: null });
				try {
					const { data } = await userServices.getAllHuntersWithAcceptedBounties();
					set({ users: data.getAllHuntersWithAcceptedBounties });
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			fetchCurrentUser: async () => {
				set({ loading: true, error: null });
				try {
					const { data } = await userServices.getCurrentUser();
					set({ currentUser: data?.getCurrentUser || null });
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			reset: async () => {
				set({ users: [], currentUser: null });
			},
		}),

		{
			name: "users-storage",
			partialize: (state) => ({
				users: state.users,
				currentUser: state.currentUser,
			}),
		},
	),
);
