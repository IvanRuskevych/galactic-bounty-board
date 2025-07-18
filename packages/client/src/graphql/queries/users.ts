import { gql } from "@apollo/client";

export const GET_ALL_HUNTERS_WITH_ACCEPTED_BOUNTIES = gql`
	query Query {
		getAllHuntersWithAcceptedBounties {
			role
			id
			email
			bountiesAccepted {
				title
				targetId
				status
				reward
				planet
				id
				description
				createdBy {
					email
					id
				}
			}
		}
	}
`;

export const GET_CURRENT_USER = gql`
	query Query {
		getCurrentUser {
			email
			role
		}
	}
`;
