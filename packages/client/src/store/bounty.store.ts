import { create } from "zustand";
import { persist } from "zustand/middleware";
import { bountyService } from "~/services";
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
					const { data } = await bountyService.getPublic();
					set({ bounties: data.getAvailableBounties });
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
					const { data } = await bountyService.getCurrentUserBounties();
					set({
						created: data.getCurrentUserBounties.created,
						posted: data.getCurrentUserBounties.posted,
						accepted: data.getCurrentUserBounties.accepted,
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
					await bountyService.create(data);
					get().fetchCurrentUserBounties();
					notifySuccess("Bounty created successfully. 📝");
					return { success: true };
				} catch (err) {
					const { fieldErrors, error } = handleApolloError(err);
					set({ fieldErrors, error });
					return { success: false };
					// throw err;
				} finally {
					set({ loading: false });
				}
			},

			updateBounty: async (bountyId: string, data: BountyFormValues) => {
				set({ loading: true, error: null });
				try {
					await bountyService.update(bountyId, data);
					get().fetchCurrentUserBounties();
					notifySuccess("Bounty updated successfully. ✏️");
					return { success: true };
				} catch (err) {
					// console.log("RAW ERROR", err);
					// set({ fieldErrors: { title: ["Test validation error"] } });
					// return { success: false };
					console.log("RAW ERROR:", err);
					const { fieldErrors, error } = handleApolloError(err);
					console.log("Parsed error:", { fieldErrors }, { error });
					set({ fieldErrors, error });
					return { success: false };
					// // throw err;
				} finally {
					set({ loading: false });
				}
			},

			deleteBounty: async (bountyId: string) => {
				set({ loading: true, error: null });
				try {
					await bountyService.delete(bountyId);
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
					await bountyService.post(bountyId);
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
					await bountyService.accept(bountyId);
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
