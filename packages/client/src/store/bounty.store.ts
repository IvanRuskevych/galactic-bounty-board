import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BountyService } from "~/services";
import { handleApolloError, notifySuccess } from "~/shared/utils";
import { BountyFormValues, BountyStore } from "~/typings";

export const useBountyStore = create<BountyStore>()(
	persist(
		(set, get) => ({
			bounties: [],
			created: [],
			posted: [],
			accepted: [],
			loading: false,
			error: null,
			fieldErrors: null,

			fetchPublicBounties: async () => {
				set({ loading: true, error: null });
				try {
					const { data } = await BountyService.getPublic();
					set({ bounties: data.allAvailableBounties });
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			fetchCurrentUserBounties: async () => {
				set({ loading: true, error: null });
				try {
					const { data } = await BountyService.getCurrentUserBounties();
					set({
						created: data.allCurrentUserBounties.created,
						posted: data.allCurrentUserBounties.posted,
						accepted: data.allCurrentUserBounties.accepted,
					});
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			createBounty: async (data: BountyFormValues) => {
				set({ loading: true, error: null });

				try {
					await BountyService.create(data);
					get().fetchCurrentUserBounties();
					notifySuccess("Bounty created successfully. 📝");
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			updateBounty: async (bountyId: string, data: BountyFormValues) => {
				set({ loading: true, error: null });
				try {
					await BountyService.update(bountyId, data);
					get().fetchCurrentUserBounties();
					notifySuccess("Bounty updated successfully. ✏️");
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			deleteBounty: async (bountyId: string) => {
				set({ loading: true, error: null });
				try {
					await BountyService.delete(bountyId);
					get().fetchCurrentUserBounties();
					notifySuccess("Bounty deleted 🗑️");
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			postBounty: async (bountyId: string) => {
				set({ loading: true, error: null });
				try {
					await BountyService.post(bountyId);
					get().fetchCurrentUserBounties();
					notifySuccess("Bounty posted successfully.");
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			acceptBounty: async (bountyId: string) => {
				set({ loading: true, error: null });
				try {
					await BountyService.accept(bountyId);
					get().fetchPublicBounties();
					get().fetchCurrentUserBounties();
					notifySuccess("Bounty accepted successfully.");
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					throw err;
				} finally {
					set({ loading: false });
				}
			},

			resetErrors: () => {
				set({ fieldErrors: null, error: null });
			},

			reset: () =>
				set({
					bounties: [],
					created: [],
					posted: [],
					accepted: [],
					loading: false,
					error: null,
					fieldErrors: null,
				}),
		}),

		{
			name: "bounty-storage",
			partialize: (state) => ({
				bounties: state.bounties,
				created: state.created,
				posted: state.posted,
				accepted: state.accepted,
			}),
		},
	),
);
