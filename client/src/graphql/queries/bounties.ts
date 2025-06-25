import { gql } from "@apollo/client";

export const GET_AVAILABLE_BOUNTIES = gql`
    query AllAvailableBounties {
        allAvailableBounties {
            title
            targetId
            status
            reward
            planet
            id
            description
            createdBy {
                id
                email
            }
            acceptedBy {
                id
                email
            }
        }
    }
`;

export const GET_CURRENT_USER_BOUNTIES = gql`
    query GetCurrentUserBounties {
        allCurrentUserBounties {
            posted {
                id
                targetId
                title
                reward
                planet
                description
                status
                createdBy {
                    id
                    email
                }
            }
            created {
                id
                targetId
                title
                reward
                planet
                description
                status
                createdBy {
                    id
                    email
                }
            }
            accepted {
                id
                targetId
                title
                reward
                planet
                description
                status
                acceptedBy {
                    id
                    email
                }
                createdBy {
                    id
                    email
                }
            }
        }
    }
`;
