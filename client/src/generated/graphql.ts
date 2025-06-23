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
  targetName: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CreateBountyInput = {
  description: Scalars['String']['input'];
  planet: Scalars['String']['input'];
  reward: Scalars['Int']['input'];
  targetName: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptBounty: Bounty;
  createBounty: Bounty;
  deleteBounty: Bounty;
  loginUser: AuthPayload;
  logout: SuccessResponse;
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
  targetName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bountiesAccepted: Array<Bounty>;
  bountiesCreated: Array<Bounty>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string } } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', email: string, id: string } } };

export type GetBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBountiesQuery = { __typename?: 'Query', allAvailableBounties: Array<{ __typename?: 'Bounty', id: string, title: string, planet: string }> };


export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const GetBountiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBounties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAvailableBounties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"planet"}}]}}]}}]} as unknown as DocumentNode<GetBountiesQuery, GetBountiesQueryVariables>;
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
  targetName: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CreateBountyInput = {
  description: Scalars['String']['input'];
  planet: Scalars['String']['input'];
  reward: Scalars['Int']['input'];
  targetName: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptBounty: Bounty;
  createBounty: Bounty;
  deleteBounty: Bounty;
  loginUser: AuthPayload;
  logout: SuccessResponse;
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
  targetName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bountiesAccepted: Array<Bounty>;
  bountiesCreated: Array<Bounty>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string } } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', email: string, id: string } } };

export type GetBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBountiesQuery = { __typename?: 'Query', allAvailableBounties: Array<{ __typename?: 'Bounty', id: string, title: string, planet: string }> };


export const RegisterUserDocument = gql`
    mutation RegisterUser($email: String!, $password: String!) {
  registerUser(email: $email, password: $password) {
    user {
      id
      email
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
      email
      id
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
export const GetBountiesDocument = gql`
    query GetBounties {
  allAvailableBounties {
    id
    title
    planet
  }
}
    `;

/**
 * __useGetBountiesQuery__
 *
 * To run a query within a React component, call `useGetBountiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBountiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBountiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBountiesQuery(baseOptions?: Apollo.QueryHookOptions<GetBountiesQuery, GetBountiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBountiesQuery, GetBountiesQueryVariables>(GetBountiesDocument, options);
      }
export function useGetBountiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBountiesQuery, GetBountiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBountiesQuery, GetBountiesQueryVariables>(GetBountiesDocument, options);
        }
export function useGetBountiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBountiesQuery, GetBountiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBountiesQuery, GetBountiesQueryVariables>(GetBountiesDocument, options);
        }
export type GetBountiesQueryHookResult = ReturnType<typeof useGetBountiesQuery>;
export type GetBountiesLazyQueryHookResult = ReturnType<typeof useGetBountiesLazyQuery>;
export type GetBountiesSuspenseQueryHookResult = ReturnType<typeof useGetBountiesSuspenseQuery>;
export type GetBountiesQueryResult = Apollo.QueryResult<GetBountiesQuery, GetBountiesQueryVariables>;