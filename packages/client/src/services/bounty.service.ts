import { apolloClient } from "~/apollo/client";
import { ACCEPT_BOUNTY, CREATE_BOUNTY, DELETE_BOUNTY, POST_BOUNTY, UPDATE_BOUNTY } from "~/graphql/mutations";
import { GET_AVAILABLE_BOUNTIES, GET_CURRENT_USER_BOUNTIES } from "~/graphql/queries";
import { BountyFormValues } from "~/typings";

export const bountyService = {
	getPublic: () => {
		return apolloClient.query({
			query: GET_AVAILABLE_BOUNTIES,
			fetchPolicy: "network-only",
		});
	},

	getCurrentUserBounties: () => {
		return apolloClient.query({
			query: GET_CURRENT_USER_BOUNTIES,
			fetchPolicy: "network-only",
		});
	},

	create: (data: BountyFormValues) => {
		return apolloClient.mutate({
			mutation: CREATE_BOUNTY,
			variables: { input: data },
		});
	},

	update: (bountyId: string, data: BountyFormValues) => {
		console.log("update data:", data);
		return apolloClient.mutate({
			mutation: UPDATE_BOUNTY,
			variables: { bountyId, input: data },
		});
	},

	delete: (bountyId: string) => {
		return apolloClient.mutate({
			mutation: DELETE_BOUNTY,
			variables: { bountyId },
		});
	},

	post: (bountyId: string) => {
		return apolloClient.mutate({
			mutation: POST_BOUNTY,
			variables: { bountyId },
		});
	},

	accept: (bountyId: string) => {
		return apolloClient.mutate({
			mutation: ACCEPT_BOUNTY,
			variables: { bountyId },
		});
	},
};
