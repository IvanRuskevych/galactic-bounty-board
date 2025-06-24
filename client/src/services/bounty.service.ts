import {apolloClient} from "../apollo/client";
import {GET_AVAILABLE_BOUNTIES, GET_CURRENT_USER_BOUNTIES} from "../graphql/queries";

export const BountyService = {
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
};

