import { apolloClient } from "../apollo/client.ts";
import { GET_ALL_HUNTERS_WITH_ACCEPTED_BOUNTIES } from "../graphql/queries";

export const UserServices = {
  getAllHuntersWithAcceptedBounties: () => {
    return apolloClient.query({
      query: GET_ALL_HUNTERS_WITH_ACCEPTED_BOUNTIES,
      fetchPolicy: "network-only",
    })
  },
}