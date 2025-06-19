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

    type AuthPayload {
        user: User!
    }

    type SuccessResponse {
        success: Boolean!
    }

    input CreateBountyInput {
        title: String!
        description: String!
        targetName: String!
        planet: String!
        reward: Int!
    }

    input UpdateBountyInput {
        title: String
        description: String
        targetName: String
        planet: String
        reward: Int
    }

    type Query {
        currentUser: User
        allAvailableBounties: [Bounty!]!
    }

    type Mutation {
        registerUser(email: String!, password: String!): AuthPayload!
        loginUser(email: String!, password: String!): AuthPayload!
        refreshAccessToken: SuccessResponse!
        logout: SuccessResponse!
        createBounty(data: CreateBountyInput): Bounty!
        updateBounty(bountyId: ID!, data: UpdateBountyInput): Bounty!
        acceptBounty(bountyId: ID!): Bounty!
        deleteBounty(bountyId: ID!): Bounty!
    }
`;