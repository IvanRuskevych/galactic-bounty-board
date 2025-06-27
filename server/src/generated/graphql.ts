import { GraphQLResolveInfo } from 'graphql';
import { User as PrismaUser, Bounty as PrismaBounty } from '@prisma/client';
import { Context } from '../context';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  acceptedBy: Maybe<User>;
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
  currentUser: Maybe<User>;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthPayload: ResolverTypeWrapper<any>;
  Boolean: ResolverTypeWrapper<any>;
  Bounty: ResolverTypeWrapper<PrismaBounty>;
  BountyStatus: ResolverTypeWrapper<any>;
  CreateBountyInput: ResolverTypeWrapper<any>;
  CurrentUserBounties: ResolverTypeWrapper<any>;
  ID: ResolverTypeWrapper<any>;
  Int: ResolverTypeWrapper<any>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<any>;
  SuccessResponse: ResolverTypeWrapper<any>;
  UpdateBountyInput: ResolverTypeWrapper<any>;
  User: ResolverTypeWrapper<PrismaUser>;
  UserRole: ResolverTypeWrapper<any>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthPayload: any;
  Boolean: any;
  Bounty: PrismaBounty;
  CreateBountyInput: any;
  CurrentUserBounties: any;
  ID: any;
  Int: any;
  Mutation: {};
  Query: {};
  String: any;
  SuccessResponse: any;
  UpdateBountyInput: any;
  User: PrismaUser;
}>;

export type AuthPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = ResolversObject<{
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BountyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Bounty'] = ResolversParentTypes['Bounty']> = ResolversObject<{
  acceptedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  planet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reward?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['BountyStatus'], ParentType, ContextType>;
  targetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrentUserBountiesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CurrentUserBounties'] = ResolversParentTypes['CurrentUserBounties']> = ResolversObject<{
  accepted?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  created?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  posted?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  acceptBounty?: Resolver<ResolversTypes['Bounty'], ParentType, ContextType, RequireFields<MutationAcceptBountyArgs, 'bountyId'>>;
  createBounty?: Resolver<ResolversTypes['Bounty'], ParentType, ContextType, Partial<MutationCreateBountyArgs>>;
  deleteBounty?: Resolver<ResolversTypes['Bounty'], ParentType, ContextType, RequireFields<MutationDeleteBountyArgs, 'bountyId'>>;
  loginUser?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'email' | 'password'>>;
  logout?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType>;
  postBounty?: Resolver<ResolversTypes['Bounty'], ParentType, ContextType, RequireFields<MutationPostBountyArgs, 'bountyId'>>;
  refreshAccessToken?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType>;
  registerUser?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'email' | 'password'>>;
  updateBounty?: Resolver<ResolversTypes['Bounty'], ParentType, ContextType, RequireFields<MutationUpdateBountyArgs, 'bountyId'>>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allAvailableBounties?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  allCurrentUserBounties?: Resolver<ResolversTypes['CurrentUserBounties'], ParentType, ContextType>;
  allHunters?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type SuccessResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SuccessResponse'] = ResolversParentTypes['SuccessResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  bountiesAccepted?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  bountiesCreated?: Resolver<Array<ResolversTypes['Bounty']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Bounty?: BountyResolvers<ContextType>;
  CurrentUserBounties?: CurrentUserBountiesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SuccessResponse?: SuccessResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

