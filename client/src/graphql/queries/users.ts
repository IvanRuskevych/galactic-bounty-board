import { gql } from "@apollo/client";

export const GET_ALL_HUNTERS_WITH_ACCEPTED_BOUNTIES = gql`
    query GetAllHuntersWithAcceptedBounties {
        allHunters {
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
`