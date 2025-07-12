import { apolloClient } from "~/apollo/client";
import { GET_ALL_HUNTERS_WITH_ACCEPTED_BOUNTIES, GET_CURRENT_USER } from "~/graphql/queries";

export const UserServices = {
	getAllHuntersWithAcceptedBounties: () => {
		return apolloClient.query({
			query: GET_ALL_HUNTERS_WITH_ACCEPTED_BOUNTIES,
			fetchPolicy: "network-only",
		});
	},

	getCurrentUser: () => {
		return apolloClient.query({
			query: GET_CURRENT_USER,
			fetchPolicy: "network-only",
		});
	},
};
