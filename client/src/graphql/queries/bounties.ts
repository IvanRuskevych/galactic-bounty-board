import {gql} from "@apollo/client";

export const GET_BOUNTIES = gql`
    query GetBounties {
        allAvailableBounties {
            id
            title
            planet
        }
    }
`;
