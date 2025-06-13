import gql from "graphql-tag";

export const typeDefs = gql`
    type User {
        id: ID!
        email: String!
        bountiesCreated: [Bounty!]!
        bountiesAccepted: [Bounty!]!
    }

    type Bounty {
        id: ID!
        title: String!
        description: String!
        targetName: String!
        planet: String!
        reward: Int!
        createdBy: User!
        acceptedBy: User
    }

    type Query {
        me: User
        allUsers: [User!]!
        allAvailableBounties: [Bounty!]!
    }

    type Mutation {
        registerUser(email: String!, password: String!): String!  # return token
        loginUser(email: String!, password: String!): String!  # return token
        createBounty(
            title: String!,
            description: String!,
            targetName: String!,
            planet: String!,
            reward: Int!,
            createdBy: String!,
            acceptedBy: String
        ): Bounty!
    }
`