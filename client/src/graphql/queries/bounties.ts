import { gql } from "@apollo/client";

export const GET_AVAILABLE_BOUNTIES = gql`
    query GetAvailableBounties {
        allAvailableBounties {
            title
            targetId
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

export const GET_CURRENT_USER_BOUNTIES = gql`
    query GetCurrentUserBounties {
        allCurrentUserBounties {
            posted {
                title
                targetId
                status
                reward
                planet
                id
                description
                createdBy {
                    email
                }
            }
            created {
                title
                targetId
                status
                reward
                planet
                id
                description
                createdBy {
                    email
                }
            }
            accepted {
                title
                targetId
                status
                reward
                planet
                id
                description
                acceptedBy {
                    email
                }
            }
        }
    }
`;
