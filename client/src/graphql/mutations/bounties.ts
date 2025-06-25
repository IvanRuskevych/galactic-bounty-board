import { gql } from "@apollo/client";

export const CREATE_BOUNTY = gql`
    mutation CreateBounty($data: CreateBountyInput) {
        createBounty(data: $data) {
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

export const EDIT_BOUNTY = gql`
    mutation EditBounty($bountyId: ID!, $data: UpdateBountyInput) {
        updateBounty(bountyId: $bountyId, data: $data) {
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
    mutation DeleteBounty($bountyId: ID!) {
        deleteBounty(bountyId: $bountyId) {
            title
        }
    }
`

export const POST_BOUNTY = gql`
    mutation PostBounty($bountyId: ID!) {
        postBounty(bountyId: $bountyId) {
            title
        }
    }
`;

export const ACCEPT_BOUNTY = gql`
    mutation AcceptBounty($bountyId: ID!) {
        acceptBounty(bountyId: $bountyId) {
            title
        }
    }
`;
