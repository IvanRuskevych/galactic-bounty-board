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

export const UPDATE_BOUNTY = gql`
    mutation UpdateBounty($bountyId: ID!, $data: UpdateBountyInput) {
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