import {gql} from "@apollo/client";

export const GET_AVAILABLE_BOUNTIES = gql`
    query GetAvailableBounties {
        allAvailableBounties {
            title
            targetName
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
                targetName
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
                targetName
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
                targetName
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
