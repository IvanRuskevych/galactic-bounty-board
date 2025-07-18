import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";
// import * as path from "node:path";

const typesArray = loadFilesSync(path.join(__dirname), {
	extensions: [".graphql"],
	recursive: true,
});

export const typeDefs = mergeTypeDefs(typesArray);

// import gql from "graphql-tag";
//
// export const typeDefs = gql`
// 	enum BountyStatus {
// 		CREATED
// 		POSTED
// 		ACCEPTED
// 	}
//
// 	enum UserRole {
// 		ADMIN
// 		HUNTER
// 	}
//
// 	type User {
// 		id: ID!
// 		email: String!
// 		role: UserRole!
// 		bountiesCreated: [Bounty!]!
// 		bountiesAccepted: [Bounty!]!
// 	}
//
// 	type Bounty {
// 		id: ID!
// 		title: String!
// 		description: String!
// 		targetId: Int!
// 		planet: String!
// 		reward: Int!
// 		createdBy: User!
// 		acceptedBy: User
// 		status: BountyStatus!
// 	}
//
// 	type CurrentUserBounties {
// 		created: [Bounty!]!
// 		posted: [Bounty!]!
// 		accepted: [Bounty!]!
// 	}
//
// 	type AuthPayload {
// 		user: User!
// 	}
//
// 	type SuccessResponse {
// 		success: Boolean!
// 	}
//
// 	input CreateBountyInput {
// 		title: String!
// 		description: String!
// 		targetId: Int!
// 		planet: String!
// 		reward: Int!
// 	}
//
// 	input UpdateBountyInput {
// 		title: String
// 		description: String
// 		targetId: Int
// 		planet: String
// 		reward: Int
// 		status: BountyStatus
// 	}
//
// 	type Query {
// 		currentUser: User
// 		allHunters: [User!]!
// 		allAvailableBounties: [Bounty!]!
// 		allCurrentUserBounties: CurrentUserBounties!
// 	}
//
// 	type Mutation {
// 		registerUser(email: String!, password: String!): AuthPayload!
// 		loginUser(email: String!, password: String!): AuthPayload!
// 		refreshAccessToken: SuccessResponse!
// 		logout: SuccessResponse!
// 		createBounty(data: CreateBountyInput): Bounty!
// 		updateBounty(bountyId: ID!, data: UpdateBountyInput): Bounty!
// 		acceptBounty(bountyId: ID!): Bounty!
// 		postBounty(bountyId: ID!): Bounty!
// 		deleteBounty(bountyId: ID!): Bounty!
// 	}
// `;
