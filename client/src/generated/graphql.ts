/* eslint-disable */
/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type BountyStatus =
  | 'ACCEPTED'
  | 'CREATED'
  | 'POSTED';

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

export type UserRole =
  | 'ADMIN'
  | 'HUNTER';

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterUserMutation = {
  __typename?: 'Mutation',
  registerUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string, role: UserRole } }
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = {
  __typename?: 'Mutation',
  loginUser: { __typename?: 'AuthPayload', user: { __typename?: 'User', id: string, email: string, role: UserRole } }
};

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = {
  __typename?: 'Mutation',
  logout: { __typename?: 'SuccessResponse', success: boolean }
};

export type CreateBountyMutationVariables = Exact<{
  data?: InputMaybe<CreateBountyInput>;
}>;


export type CreateBountyMutation = {
  __typename?: 'Mutation',
  createBounty: {
    __typename?: 'Bounty',
    title: string,
    targetId: number,
    status: BountyStatus,
    reward: number,
    planet: string,
    id: string,
    description: string,
    createdBy: { __typename?: 'User', email: string, id: string }
  }
};

export type UpdateBountyMutationVariables = Exact<{
  bountyId: Scalars['ID']['input'];
  data?: InputMaybe<UpdateBountyInput>;
}>;


export type UpdateBountyMutation = {
  __typename?: 'Mutation',
  updateBounty: {
    __typename?: 'Bounty',
    title: string,
    targetId: number,
    status: BountyStatus,
    reward: number,
    planet: string,
    id: string,
    description: string,
    createdBy: { __typename?: 'User', email: string, id: string }
  }
};

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


export type AllAvailableBountiesQuery = {
  __typename?: 'Query',
  allAvailableBounties: Array<{
    __typename?: 'Bounty',
    title: string,
    targetId: number,
    status: BountyStatus,
    reward: number,
    planet: string,
    id: string,
    description: string,
    createdBy: { __typename?: 'User', id: string, email: string },
    acceptedBy?: { __typename?: 'User', id: string, email: string } | null
  }>
};

export type GetCurrentUserBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserBountiesQuery = {
  __typename?: 'Query',
  allCurrentUserBounties: {
    __typename?: 'CurrentUserBounties',
    posted: Array<{
      __typename?: 'Bounty',
      id: string,
      targetId: number,
      title: string,
      reward: number,
      planet: string,
      description: string,
      status: BountyStatus,
      createdBy: { __typename?: 'User', id: string, email: string }
    }>,
    created: Array<{
      __typename?: 'Bounty',
      id: string,
      targetId: number,
      title: string,
      reward: number,
      planet: string,
      description: string,
      status: BountyStatus,
      createdBy: { __typename?: 'User', id: string, email: string }
    }>,
    accepted: Array<{
      __typename?: 'Bounty',
      id: string,
      targetId: number,
      title: string,
      reward: number,
      planet: string,
      description: string,
      status: BountyStatus,
      acceptedBy?: { __typename?: 'User', id: string, email: string } | null,
      createdBy: { __typename?: 'User', id: string, email: string }
    }>
  }
};

export type GetAllHuntersWithAcceptedBountiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHuntersWithAcceptedBountiesQuery = {
  __typename?: 'Query',
  allHunters: Array<{
    __typename?: 'User',
    role: UserRole,
    id: string,
    email: string,
    bountiesAccepted: Array<{
      __typename?: 'Bounty',
      title: string,
      targetId: number,
      status: BountyStatus,
      reward: number,
      planet: string,
      id: string,
      description: string,
      createdBy: { __typename?: 'User', email: string, id: string }
    }>
  }>
};


export const RegisterUserDocument = {
  "kind": "Document", "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {"kind": "Name", "value": "RegisterUser"},
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "email"}},
      "type": {"kind": "NonNullType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}},
    }, {
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "password"}},
      "type": {"kind": "NonNullType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}},
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "registerUser"},
        "arguments": [{
          "kind": "Argument",
          "name": {"kind": "Name", "value": "email"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "email"}},
        }, {
          "kind": "Argument",
          "name": {"kind": "Name", "value": "password"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "password"}},
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {"kind": "Name", "value": "user"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "email"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "role"}}],
            },
          }],
        },
      }],
    },
  }],
} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = {
  "kind": "Document", "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {"kind": "Name", "value": "LoginUser"},
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "email"}},
      "type": {"kind": "NonNullType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}},
    }, {
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "password"}},
      "type": {"kind": "NonNullType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}},
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "loginUser"},
        "arguments": [{
          "kind": "Argument",
          "name": {"kind": "Name", "value": "email"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "email"}},
        }, {
          "kind": "Argument",
          "name": {"kind": "Name", "value": "password"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "password"}},
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {"kind": "Name", "value": "user"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "email"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "role"}}],
            },
          }],
        },
      }],
    },
  }],
} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {"kind": "Name", "value": "LogoutUser"},
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "logout"},
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "success"}}],
        },
      }],
    },
  }],
} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const CreateBountyDocument = {
  "kind": "Document", "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {"kind": "Name", "value": "CreateBounty"},
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}},
      "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "CreateBountyInput"}},
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "createBounty"},
        "arguments": [{
          "kind": "Argument",
          "name": {"kind": "Name", "value": "data"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}},
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "title"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "targetId"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "reward"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "planet"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "id"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "description"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "createdBy"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "email"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "id"},
              }],
            },
          }],
        },
      }],
    },
  }],
} as unknown as DocumentNode<CreateBountyMutation, CreateBountyMutationVariables>;
export const UpdateBountyDocument = {
  "kind": "Document", "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {"kind": "Name", "value": "UpdateBounty"},
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "bountyId"}},
      "type": {"kind": "NonNullType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "ID"}}},
    }, {
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}},
      "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "UpdateBountyInput"}},
    }],
    "selectionSet": {
      "kind": "SelectionSet", "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "updateBounty"},
        "arguments": [{
          "kind": "Argument",
          "name": {"kind": "Name", "value": "bountyId"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "bountyId"}},
        }, {
          "kind": "Argument",
          "name": {"kind": "Name", "value": "data"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}},
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "title"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "targetId"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "reward"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "planet"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "id"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "description"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "createdBy"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "email"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "id"},
              }],
            },
          }],
        },
      }],
    },
  }],
} as unknown as DocumentNode<UpdateBountyMutation, UpdateBountyMutationVariables>;
export const DeleteBountyDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {"kind": "Name", "value": "DeleteBounty"},
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "bountyId"}},
      "type": {"kind": "NonNullType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "ID"}}},
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "deleteBounty"},
        "arguments": [{
          "kind": "Argument",
          "name": {"kind": "Name", "value": "bountyId"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "bountyId"}},
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "title"}}],
        },
      }],
    },
  }],
} as unknown as DocumentNode<DeleteBountyMutation, DeleteBountyMutationVariables>;
export const PostBountyDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {"kind": "Name", "value": "PostBounty"},
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "bountyId"}},
      "type": {"kind": "NonNullType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "ID"}}},
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "postBounty"},
        "arguments": [{
          "kind": "Argument",
          "name": {"kind": "Name", "value": "bountyId"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "bountyId"}},
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "title"}}],
        },
      }],
    },
  }],
} as unknown as DocumentNode<PostBountyMutation, PostBountyMutationVariables>;
export const AcceptBountyDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {"kind": "Name", "value": "AcceptBounty"},
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "bountyId"}},
      "type": {"kind": "NonNullType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "ID"}}},
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "acceptBounty"},
        "arguments": [{
          "kind": "Argument",
          "name": {"kind": "Name", "value": "bountyId"},
          "value": {"kind": "Variable", "name": {"kind": "Name", "value": "bountyId"}},
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "title"}}],
        },
      }],
    },
  }],
} as unknown as DocumentNode<AcceptBountyMutation, AcceptBountyMutationVariables>;
export const AllAvailableBountiesDocument = {
  "kind": "Document", "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {"kind": "Name", "value": "AllAvailableBounties"},
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "allAvailableBounties"},
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "title"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "targetId"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "reward"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "planet"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "id"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "description"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "createdBy"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "email"},
              }],
            },
          }, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "acceptedBy"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "email"},
              }],
            },
          }],
        },
      }],
    },
  }],
} as unknown as DocumentNode<AllAvailableBountiesQuery, AllAvailableBountiesQueryVariables>;
export const GetCurrentUserBountiesDocument = {
  "kind": "Document", "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {"kind": "Name", "value": "GetCurrentUserBounties"},
    "selectionSet": {
      "kind": "SelectionSet", "selections": [{
        "kind": "Field", "name": {"kind": "Name", "value": "allCurrentUserBounties"}, "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {"kind": "Name", "value": "posted"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "targetId"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "title"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "reward"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "planet"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "description"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "createdBy"},
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                    "kind": "Field",
                    "name": {"kind": "Name", "value": "email"},
                  }],
                },
              }],
            },
          }, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "created"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "targetId"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "title"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "reward"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "planet"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "description"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "createdBy"},
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                    "kind": "Field",
                    "name": {"kind": "Name", "value": "email"},
                  }],
                },
              }],
            },
          }, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "accepted"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "targetId"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "title"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "reward"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "planet"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "description"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "acceptedBy"},
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                    "kind": "Field",
                    "name": {"kind": "Name", "value": "email"},
                  }],
                },
              }, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "createdBy"},
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                    "kind": "Field",
                    "name": {"kind": "Name", "value": "email"},
                  }],
                },
              }],
            },
          }],
        },
      }],
    },
  }],
} as unknown as DocumentNode<GetCurrentUserBountiesQuery, GetCurrentUserBountiesQueryVariables>;
export const GetAllHuntersWithAcceptedBountiesDocument = {
  "kind": "Document", "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {"kind": "Name", "value": "GetAllHuntersWithAcceptedBounties"},
    "selectionSet": {
      "kind": "SelectionSet", "selections": [{
        "kind": "Field",
        "name": {"kind": "Name", "value": "allHunters"},
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "role"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "id"},
          }, {"kind": "Field", "name": {"kind": "Name", "value": "email"}}, {
            "kind": "Field",
            "name": {"kind": "Name", "value": "bountiesAccepted"},
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "title"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "targetId"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "reward"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "planet"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "id"},
              }, {"kind": "Field", "name": {"kind": "Name", "value": "description"}}, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "createdBy"},
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "email"}}, {
                    "kind": "Field",
                    "name": {"kind": "Name", "value": "id"},
                  }],
                },
              }],
            },
          }],
        },
      }],
    },
  }],
} as unknown as DocumentNode<GetAllHuntersWithAcceptedBountiesQuery, GetAllHuntersWithAcceptedBountiesQueryVariables>;