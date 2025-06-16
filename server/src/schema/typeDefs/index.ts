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
        createdById: String!
        acceptedById: String!
    }

    type Query {
        currentUser: User
        allAvailableBounties: [Bounty!]!
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    type Mutation {
        registerUser(email: String!, password: String!): AuthPayload!

        loginUser(email: String!, password: String!): AuthPayload!

        createBounty(
            title: String!,
            description: String!,
            targetName: String!,
            planet: String!,
            reward: Int!
        ): Bounty!

        updateBounty(
            bountyId: ID!
            title: String,
            description: String,
            targetName: String,
            planet: String,
            reward: Int
        ): Bounty!

        acceptBounty(bountyId: ID!): Bounty!
    }
`