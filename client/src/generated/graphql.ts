/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  user: User;
};

export type Bounty = {
  __typename?: 'Bounty';
  acceptedBy?: Maybe<User>;
  createdBy: User;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  planet: Scalars['String']['output'];
  reward: Scalars['Int']['output'];
  status: BountyStatus;
  targetId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export enum BountyStatus {
  Accepted = 'ACCEPTED',
  Created = 'CREATED',
  Posted = 'POSTED'
}

export type CreateBountyInput = {
  description: Scalars['String']['input'];
  planet: Scalars['String']['input'];
  reward: Scalars['Int']['input'];
  targetId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CurrentUserBounties = {
  __typename?: 'CurrentUserBounties';
  accepted: Array<Bounty>;
  created: Array<Bounty>;
  posted: Array<Bounty>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptBounty: Bounty;
  createBounty: Bounty;
  deleteBounty: Bounty;
  loginUser: AuthPayload;
  logout: SuccessResponse;
  postBounty: Bounty;
  refreshAccessToken: SuccessResponse;
  registerUser: AuthPayload;
  updateBounty: Bounty;
};


export type MutationAcceptBountyArgs = {
  bountyId: Scalars['ID']['input'];
};


export type MutationCreateBountyArgs = {
  data?: InputMaybe<CreateBountyInput>;
};


export type MutationDeleteBountyArgs = {
  bountyId: Scalars['ID']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPostBountyArgs = {
  bountyId: Scalars['ID']['input'];
};


export type MutationRegisterUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateBountyArgs = {
  bountyId: Scalars['ID']['input'];
  data?: InputMaybe<UpdateBountyInput>;
};

export type Query = {
  __typename?: 'Query';
  allAvailableBounties: Array<Bounty>;
  allCurrentUserBounties: CurrentUserBounties;
  allHunters: Array<User>;
  currentUser?: Maybe<User>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success: Scalars['Boolean']['output'];
};

export type UpdateBountyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  planet?: InputMaybe<Scalars['String']['input']>;
  reward?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<BountyStatus>;
  targetId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bountiesAccepted: Array<Bounty>;
  bountiesCreated: Array<Bounty>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  Hunter = 'HUNTER'
}

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string, role: UserRole } } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string, role: UserRole } } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: { __typename?: 'SuccessResponse', success: boolean } };

export type CreateBountyMutationVariables = Exact<{
  data?: InputMaybe<CreateBountyInput>;
}>;


export type CreateBountyMutation = { __typename?: 'Mutation', createBounty: { __typename?: 'Bounty', title: string, targetId: number, status: BountyStatus, reward: number, planet: string, id: string, description: string, createdBy: { __typename?: 'User', email: string, id: string } } };

export type UpdateBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
  data?: InputMaybe<UpdateBountyInput>;
}>;


export type UpdateBountyMutation = { __typename?: 'Mutation', updateBounty: { __typename?: 'Bounty', title: string, targetId: number, status: BountyStatus, reward: number, planet: string, id: string, description: string, createdBy: { __typename?: 'User', email: string, id: string } } };

export type DeleteBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
}>;


export type DeleteBountyMutation = { __typename?: 'Mutation', deleteBounty: { __typename?: 'Bounty', title: string } };

export type PostBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
}>;


export type PostBountyMutation = { __typename?: 'Mutation', postBounty: { __typename?: 'Bounty', title: string } };

export type AcceptBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
}>;


export type AcceptBountyMutation = { __typename?: 'Mutation', acceptBounty: { __typename?: 'Bounty', title: string } };

export type AllAvailableBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAvailableBountiesQuery = { __typename?: 'Query', allAvailableBounties: Array<{ __typename?: 'Bounty', title: string, targetId: number, status: BountyStatus, reward: number, planet: string, id: string, description: string, createdBy: { __typename?: 'User', id: string, email: string }, acceptedBy?: { __typename?: 'User', id: string, email: string } | null }> };

export type GetCurrentUserBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserBountiesQuery = { __typename?: 'Query', allCurrentUserBounties: { __typename?: 'CurrentUserBounties', posted: Array<{ __typename?: 'Bounty', id: string, targetId: number, title: string, reward: number, planet: string, description: string, status: BountyStatus, createdBy: { __typename?: 'User', id: string, email: string } }>, created: Array<{ __typename?: 'Bounty', id: string, targetId: number, title: string, reward: number, planet: string, description: string, status: BountyStatus, createdBy: { __typename?: 'User', id: string, email: string } }>, accepted: Array<{ __typename?: 'Bounty', id: string, targetId: number, title: string, reward: number, planet: string, description: string, status: BountyStatus, acceptedBy?: { __typename?: 'User', id: string, email: string } | null, createdBy: { __typename?: 'User', id: string, email: string } }> } };

export type GetAllHuntersWithAcceptedBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHuntersWithAcceptedBountiesQuery = { __typename?: 'Query', allHunters: Array<{ __typename?: 'User', role: UserRole, id: string, email: string, bountiesAccepted: Array<{ __typename?: 'Bounty', title: string, targetId: number, status: BountyStatus, reward: number, planet: string, id: string, description: string, createdBy: { __typename?: 'User', email: string, id: string } }> }> };


export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const CreateBountyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBounty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBountyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBounty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"targetId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}},{"kind":"Field","name":{"kind":"Name","value":"planet"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateBountyMutation, CreateBountyMutationVariables>;
export const UpdateBountyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBounty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bountyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBountyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBounty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bountyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bountyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"targetId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}},{"kind":"Field","name":{"kind":"Name","value":"planet"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateBountyMutation, UpdateBountyMutationVariables>;
export const DeleteBountyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBounty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bountyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBounty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bountyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bountyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DeleteBountyMutation, DeleteBountyMutationVariables>;
export const PostBountyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostBounty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bountyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postBounty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bountyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bountyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<PostBountyMutation, PostBountyMutationVariables>;
export const AcceptBountyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptBounty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bountyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptBounty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bountyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bountyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AcceptBountyMutation, AcceptBountyMutationVariables>;
export const AllAvailableBountiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAvailableBounties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAvailableBounties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"targetId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}},{"kind":"Field","name":{"kind":"Name","value":"planet"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"acceptedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>;
export const GetCurrentUserBountiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUserBounties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCurrentUserBounties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"targetId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}},{"kind":"Field","name":{"kind":"Name","value":"planet"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"targetId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}},{"kind":"Field","name":{"kind":"Name","value":"planet"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"accepted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"targetId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}},{"kind":"Field","name":{"kind":"Name","value":"planet"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>;
export const GetAllHuntersWithAcceptedBountiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllHuntersWithAcceptedBounties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allHunters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"bountiesAccepted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"targetId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}},{"kind":"Field","name":{"kind":"Name","value":"planet"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  user: User;
};

export type Bounty = {
  __typename?: 'Bounty';
  acceptedBy?: Maybe<User>;
  createdBy: User;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  planet: Scalars['String']['output'];
  reward: Scalars['Int']['output'];
  status: BountyStatus;
  targetId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export enum BountyStatus {
  Accepted = 'ACCEPTED',
  Created = 'CREATED',
  Posted = 'POSTED'
}

export type CreateBountyInput = {
  description: Scalars['String']['input'];
  planet: Scalars['String']['input'];
  reward: Scalars['Int']['input'];
  targetId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CurrentUserBounties = {
  __typename?: 'CurrentUserBounties';
  accepted: Array<Bounty>;
  created: Array<Bounty>;
  posted: Array<Bounty>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptBounty: Bounty;
  createBounty: Bounty;
  deleteBounty: Bounty;
  loginUser: AuthPayload;
  logout: SuccessResponse;
  postBounty: Bounty;
  refreshAccessToken: SuccessResponse;
  registerUser: AuthPayload;
  updateBounty: Bounty;
};


export type MutationAcceptBountyArgs = {
  bountyId: Scalars['ID']['input'];
};


export type MutationCreateBountyArgs = {
  data?: InputMaybe<CreateBountyInput>;
};


export type MutationDeleteBountyArgs = {
  bountyId: Scalars['ID']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPostBountyArgs = {
  bountyId: Scalars['ID']['input'];
};


export type MutationRegisterUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateBountyArgs = {
  bountyId: Scalars['ID']['input'];
  data?: InputMaybe<UpdateBountyInput>;
};

export type Query = {
  __typename?: 'Query';
  allAvailableBounties: Array<Bounty>;
  allCurrentUserBounties: CurrentUserBounties;
  allHunters: Array<User>;
  currentUser?: Maybe<User>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success: Scalars['Boolean']['output'];
};

export type UpdateBountyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  planet?: InputMaybe<Scalars['String']['input']>;
  reward?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<BountyStatus>;
  targetId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bountiesAccepted: Array<Bounty>;
  bountiesCreated: Array<Bounty>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  Hunter = 'HUNTER'
}

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string, role: UserRole } } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string, role: UserRole } } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: { __typename?: 'SuccessResponse', success: boolean } };

export type CreateBountyMutationVariables = Exact<{
  data?: InputMaybe<CreateBountyInput>;
}>;


export type CreateBountyMutation = { __typename?: 'Mutation', createBounty: { __typename?: 'Bounty', title: string, targetId: number, status: BountyStatus, reward: number, planet: string, id: string, description: string, createdBy: { __typename?: 'User', email: string, id: string } } };

export type UpdateBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
  data?: InputMaybe<UpdateBountyInput>;
}>;


export type UpdateBountyMutation = { __typename?: 'Mutation', updateBounty: { __typename?: 'Bounty', title: string, targetId: number, status: BountyStatus, reward: number, planet: string, id: string, description: string, createdBy: { __typename?: 'User', email: string, id: string } } };

export type DeleteBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
}>;


export type DeleteBountyMutation = { __typename?: 'Mutation', deleteBounty: { __typename?: 'Bounty', title: string } };

export type PostBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
}>;


export type PostBountyMutation = { __typename?: 'Mutation', postBounty: { __typename?: 'Bounty', title: string } };

export type AcceptBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
}>;


export type AcceptBountyMutation = { __typename?: 'Mutation', acceptBounty: { __typename?: 'Bounty', title: string } };

export type AllAvailableBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAvailableBountiesQuery = { __typename?: 'Query', allAvailableBounties: Array<{ __typename?: 'Bounty', title: string, targetId: number, status: BountyStatus, reward: number, planet: string, id: string, description: string, createdBy: { __typename?: 'User', id: string, email: string }, acceptedBy?: { __typename?: 'User', id: string, email: string } | null }> };

export type GetCurrentUserBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserBountiesQuery = { __typename?: 'Query', allCurrentUserBounties: { __typename?: 'CurrentUserBounties', posted: Array<{ __typename?: 'Bounty', id: string, targetId: number, title: string, reward: number, planet: string, description: string, status: BountyStatus, createdBy: { __typename?: 'User', id: string, email: string } }>, created: Array<{ __typename?: 'Bounty', id: string, targetId: number, title: string, reward: number, planet: string, description: string, status: BountyStatus, createdBy: { __typename?: 'User', id: string, email: string } }>, accepted: Array<{ __typename?: 'Bounty', id: string, targetId: number, title: string, reward: number, planet: string, description: string, status: BountyStatus, acceptedBy?: { __typename?: 'User', id: string, email: string } | null, createdBy: { __typename?: 'User', id: string, email: string } }> } };

export type GetAllHuntersWithAcceptedBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHuntersWithAcceptedBountiesQuery = { __typename?: 'Query', allHunters: Array<{ __typename?: 'User', role: UserRole, id: string, email: string, bountiesAccepted: Array<{ __typename?: 'Bounty', title: string, targetId: number, status: BountyStatus, reward: number, planet: string, id: string, description: string, createdBy: { __typename?: 'User', email: string, id: string } }> }> };


export const RegisterUserDocument = gql`
    mutation RegisterUser($email: String!, $password: String!) {
  registerUser(email: $email, password: $password) {
    user {
      id
      email
      role
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    user {
      id
      email
      role
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logout {
    success
  }
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const CreateBountyDocument = gql`
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
export type CreateBountyMutationFn = Apollo.MutationFunction<CreateBountyMutation, CreateBountyMutationVariables>;

/**
 * __useCreateBountyMutation__
 *
 * To run a mutation, you first call `useCreateBountyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBountyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBountyMutation, { data, loading, error }] = useCreateBountyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBountyMutation(baseOptions?: Apollo.MutationHookOptions<CreateBountyMutation, CreateBountyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBountyMutation, CreateBountyMutationVariables>(CreateBountyDocument, options);
      }
export type CreateBountyMutationHookResult = ReturnType<typeof useCreateBountyMutation>;
export type CreateBountyMutationResult = Apollo.MutationResult<CreateBountyMutation>;
export type CreateBountyMutationOptions = Apollo.BaseMutationOptions<CreateBountyMutation, CreateBountyMutationVariables>;
export const UpdateBountyDocument = gql`
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
export type UpdateBountyMutationFn = Apollo.MutationFunction<UpdateBountyMutation, UpdateBountyMutationVariables>;

/**
 * __useUpdateBountyMutation__
 *
 * To run a mutation, you first call `useUpdateBountyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBountyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBountyMutation, { data, loading, error }] = useUpdateBountyMutation({
 *   variables: {
 *      bountyId: // value for 'bountyId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBountyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBountyMutation, UpdateBountyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBountyMutation, UpdateBountyMutationVariables>(UpdateBountyDocument, options);
      }
export type UpdateBountyMutationHookResult = ReturnType<typeof useUpdateBountyMutation>;
export type UpdateBountyMutationResult = Apollo.MutationResult<UpdateBountyMutation>;
export type UpdateBountyMutationOptions = Apollo.BaseMutationOptions<UpdateBountyMutation, UpdateBountyMutationVariables>;
export const DeleteBountyDocument = gql`
    mutation DeleteBounty($bountyId: ID!) {
  deleteBounty(bountyId: $bountyId) {
    title
  }
}
    `;
export type DeleteBountyMutationFn = Apollo.MutationFunction<DeleteBountyMutation, DeleteBountyMutationVariables>;

/**
 * __useDeleteBountyMutation__
 *
 * To run a mutation, you first call `useDeleteBountyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBountyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBountyMutation, { data, loading, error }] = useDeleteBountyMutation({
 *   variables: {
 *      bountyId: // value for 'bountyId'
 *   },
 * });
 */
export function useDeleteBountyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBountyMutation, DeleteBountyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBountyMutation, DeleteBountyMutationVariables>(DeleteBountyDocument, options);
      }
export type DeleteBountyMutationHookResult = ReturnType<typeof useDeleteBountyMutation>;
export type DeleteBountyMutationResult = Apollo.MutationResult<DeleteBountyMutation>;
export type DeleteBountyMutationOptions = Apollo.BaseMutationOptions<DeleteBountyMutation, DeleteBountyMutationVariables>;
export const PostBountyDocument = gql`
    mutation PostBounty($bountyId: ID!) {
  postBounty(bountyId: $bountyId) {
    title
  }
}
    `;
export type PostBountyMutationFn = Apollo.MutationFunction<PostBountyMutation, PostBountyMutationVariables>;

/**
 * __usePostBountyMutation__
 *
 * To run a mutation, you first call `usePostBountyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostBountyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postBountyMutation, { data, loading, error }] = usePostBountyMutation({
 *   variables: {
 *      bountyId: // value for 'bountyId'
 *   },
 * });
 */
export function usePostBountyMutation(baseOptions?: Apollo.MutationHookOptions<PostBountyMutation, PostBountyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostBountyMutation, PostBountyMutationVariables>(PostBountyDocument, options);
      }
export type PostBountyMutationHookResult = ReturnType<typeof usePostBountyMutation>;
export type PostBountyMutationResult = Apollo.MutationResult<PostBountyMutation>;
export type PostBountyMutationOptions = Apollo.BaseMutationOptions<PostBountyMutation, PostBountyMutationVariables>;
export const AcceptBountyDocument = gql`
    mutation AcceptBounty($bountyId: ID!) {
  acceptBounty(bountyId: $bountyId) {
    title
  }
}
    `;
export type AcceptBountyMutationFn = Apollo.MutationFunction<AcceptBountyMutation, AcceptBountyMutationVariables>;

/**
 * __useAcceptBountyMutation__
 *
 * To run a mutation, you first call `useAcceptBountyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptBountyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptBountyMutation, { data, loading, error }] = useAcceptBountyMutation({
 *   variables: {
 *      bountyId: // value for 'bountyId'
 *   },
 * });
 */
export function useAcceptBountyMutation(baseOptions?: Apollo.MutationHookOptions<AcceptBountyMutation, AcceptBountyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptBountyMutation, AcceptBountyMutationVariables>(AcceptBountyDocument, options);
      }
export type AcceptBountyMutationHookResult = ReturnType<typeof useAcceptBountyMutation>;
export type AcceptBountyMutationResult = Apollo.MutationResult<AcceptBountyMutation>;
export type AcceptBountyMutationOptions = Apollo.BaseMutationOptions<AcceptBountyMutation, AcceptBountyMutationVariables>;
export const AllAvailableBountiesDocument = gql`
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

/**
 * __useAllAvailableBountiesQuery__
 *
 * To run a query within a React component, call `useAllAvailableBountiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAvailableBountiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAvailableBountiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAvailableBountiesQuery(baseOptions?: Apollo.QueryHookOptions<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>(AllAvailableBountiesDocument, options);
      }
export function useAllAvailableBountiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>(AllAvailableBountiesDocument, options);
        }
export function useAllAvailableBountiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>(AllAvailableBountiesDocument, options);
        }
export type AllAvailableBountiesQueryHookResult = ReturnType<typeof useAllAvailableBountiesQuery>;
export type AllAvailableBountiesLazyQueryHookResult = ReturnType<typeof useAllAvailableBountiesLazyQuery>;
export type AllAvailableBountiesSuspenseQueryHookResult = ReturnType<typeof useAllAvailableBountiesSuspenseQuery>;
export type AllAvailableBountiesQueryResult = Apollo.QueryResult<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>;
export const GetCurrentUserBountiesDocument = gql`
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

/**
 * __useGetCurrentUserBountiesQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserBountiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserBountiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserBountiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserBountiesQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>(GetCurrentUserBountiesDocument, options);
      }
export function useGetCurrentUserBountiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>(GetCurrentUserBountiesDocument, options);
        }
export function useGetCurrentUserBountiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>(GetCurrentUserBountiesDocument, options);
        }
export type GetCurrentUserBountiesQueryHookResult = ReturnType<typeof useGetCurrentUserBountiesQuery>;
export type GetCurrentUserBountiesLazyQueryHookResult = ReturnType<typeof useGetCurrentUserBountiesLazyQuery>;
export type GetCurrentUserBountiesSuspenseQueryHookResult = ReturnType<typeof useGetCurrentUserBountiesSuspenseQuery>;
export type GetCurrentUserBountiesQueryResult = Apollo.QueryResult<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>;
export const GetAllHuntersWithAcceptedBountiesDocument = gql`
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
    `;

/**
 * __useGetAllHuntersWithAcceptedBountiesQuery__
 *
 * To run a query within a React component, call `useGetAllHuntersWithAcceptedBountiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHuntersWithAcceptedBountiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHuntersWithAcceptedBountiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllHuntersWithAcceptedBountiesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>(GetAllHuntersWithAcceptedBountiesDocument, options);
      }
export function useGetAllHuntersWithAcceptedBountiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>(GetAllHuntersWithAcceptedBountiesDocument, options);
        }
export function useGetAllHuntersWithAcceptedBountiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>(GetAllHuntersWithAcceptedBountiesDocument, options);
        }
export type GetAllHuntersWithAcceptedBountiesQueryHookResult = ReturnType<typeof useGetAllHuntersWithAcceptedBountiesQuery>;
export type GetAllHuntersWithAcceptedBountiesLazyQueryHookResult = ReturnType<typeof useGetAllHuntersWithAcceptedBountiesLazyQuery>;
export type GetAllHuntersWithAcceptedBountiesSuspenseQueryHookResult = ReturnType<typeof useGetAllHuntersWithAcceptedBountiesSuspenseQuery>;
export type GetAllHuntersWithAcceptedBountiesQueryResult = Apollo.QueryResult<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>;