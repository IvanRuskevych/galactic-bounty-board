import { gql } from "@apollo/client";

export const CREATE_BOUNTY = gql`
	mutation Mutation($input: BountyCreateInput) {
		createBounty(input: $input) {
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
`;

export const UPDATE_BOUNTY = gql`
	mutation Mutation($bountyId: ID!, $input: BountyUpdateInput) {
		updateBounty(bountyId: $bountyId, input: $input) {
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
`;

export const DELETE_BOUNTY = gql`
	mutation Mutation($bountyId: ID!) {
		deleteBounty(bountyId: $bountyId) {
			title
		}
	}
`;

export const POST_BOUNTY = gql`
	mutation Mutation($bountyId: ID!) {
		postBounty(bountyId: $bountyId) {
			title
		}
	}
`;

export const ACCEPT_BOUNTY = gql`
	mutation Mutation($bountyId: ID!) {
		acceptBounty(bountyId: $bountyId) {
			title
		}
	}
`;
