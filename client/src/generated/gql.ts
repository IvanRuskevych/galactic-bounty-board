/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    mutation RegisterUser($email: String!, $password: String!) {\n        registerUser(email: $email, password: $password) {\n            user {\n                id\n                email\n            }\n        }\n    }\n": typeof types.RegisterUserDocument,
    "\n    mutation LoginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            user {\n                id\n                email\n            }\n        }\n    }\n": typeof types.LoginUserDocument,
    "\n    mutation LogoutUser {\n        logout {\n            success\n        }\n    }\n": typeof types.LogoutUserDocument,
    "\n    mutation CreateBounty($data: CreateBountyInput) {\n        createBounty(data: $data) {\n            title\n            targetId\n            status\n            reward\n            planet\n            id\n            description\n            createdBy {\n                email\n                id\n            }\n        }\n    }\n": typeof types.CreateBountyDocument,
    "\n    mutation EditBounty($bountyId: ID!, $data: UpdateBountyInput) {\n        updateBounty(bountyId: $bountyId, data: $data) {\n            title\n            targetId\n            status\n            reward\n            planet\n            id\n            description\n            createdBy {\n                email\n                id\n            }\n        }\n    }\n": typeof types.EditBountyDocument,
    "\n    mutation DeleteBounty($bountyId: ID!) {\n        deleteBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n": typeof types.DeleteBountyDocument,
    "\n    mutation PostBounty($bountyId: ID!) {\n        postBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n": typeof types.PostBountyDocument,
    "\n    mutation AcceptBounty($bountyId: ID!) {\n        acceptBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n": typeof types.AcceptBountyDocument,
    "\n    query GetAvailableBounties {\n        allAvailableBounties {\n            id\n            targetId\n            title\n            reward\n            planet\n            description\n            status\n            createdBy {\n                id\n                email\n            }\n        }\n    }\n": typeof types.GetAvailableBountiesDocument,
    "\n    query GetCurrentUserBounties {\n        allCurrentUserBounties {\n            posted {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                createdBy {\n                    id\n                    email\n                }\n            }\n            created {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                createdBy {\n                    id\n                    email\n                }\n            }\n            accepted {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                acceptedBy {\n                    id\n                    email\n                }\n                createdBy {\n                    id\n                    email\n                }\n            }\n        }\n    }\n": typeof types.GetCurrentUserBountiesDocument,
};
const documents: Documents = {
    "\n    mutation RegisterUser($email: String!, $password: String!) {\n        registerUser(email: $email, password: $password) {\n            user {\n                id\n                email\n            }\n        }\n    }\n": types.RegisterUserDocument,
    "\n    mutation LoginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            user {\n                id\n                email\n            }\n        }\n    }\n": types.LoginUserDocument,
    "\n    mutation LogoutUser {\n        logout {\n            success\n        }\n    }\n": types.LogoutUserDocument,
    "\n    mutation CreateBounty($data: CreateBountyInput) {\n        createBounty(data: $data) {\n            title\n            targetId\n            status\n            reward\n            planet\n            id\n            description\n            createdBy {\n                email\n                id\n            }\n        }\n    }\n": types.CreateBountyDocument,
    "\n    mutation EditBounty($bountyId: ID!, $data: UpdateBountyInput) {\n        updateBounty(bountyId: $bountyId, data: $data) {\n            title\n            targetId\n            status\n            reward\n            planet\n            id\n            description\n            createdBy {\n                email\n                id\n            }\n        }\n    }\n": types.EditBountyDocument,
    "\n    mutation DeleteBounty($bountyId: ID!) {\n        deleteBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n": types.DeleteBountyDocument,
    "\n    mutation PostBounty($bountyId: ID!) {\n        postBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n": types.PostBountyDocument,
    "\n    mutation AcceptBounty($bountyId: ID!) {\n        acceptBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n": types.AcceptBountyDocument,
    "\n    query GetAvailableBounties {\n        allAvailableBounties {\n            id\n            targetId\n            title\n            reward\n            planet\n            description\n            status\n            createdBy {\n                id\n                email\n            }\n        }\n    }\n": types.GetAvailableBountiesDocument,
    "\n    query GetCurrentUserBounties {\n        allCurrentUserBounties {\n            posted {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                createdBy {\n                    id\n                    email\n                }\n            }\n            created {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                createdBy {\n                    id\n                    email\n                }\n            }\n            accepted {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                acceptedBy {\n                    id\n                    email\n                }\n                createdBy {\n                    id\n                    email\n                }\n            }\n        }\n    }\n": types.GetCurrentUserBountiesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation RegisterUser($email: String!, $password: String!) {\n        registerUser(email: $email, password: $password) {\n            user {\n                id\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation RegisterUser($email: String!, $password: String!) {\n        registerUser(email: $email, password: $password) {\n            user {\n                id\n                email\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation LoginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            user {\n                id\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation LoginUser($email: String!, $password: String!) {\n        loginUser(email: $email, password: $password) {\n            user {\n                id\n                email\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation LogoutUser {\n        logout {\n            success\n        }\n    }\n"): (typeof documents)["\n    mutation LogoutUser {\n        logout {\n            success\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateBounty($data: CreateBountyInput) {\n        createBounty(data: $data) {\n            title\n            targetId\n            status\n            reward\n            planet\n            id\n            description\n            createdBy {\n                email\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateBounty($data: CreateBountyInput) {\n        createBounty(data: $data) {\n            title\n            targetId\n            status\n            reward\n            planet\n            id\n            description\n            createdBy {\n                email\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation EditBounty($bountyId: ID!, $data: UpdateBountyInput) {\n        updateBounty(bountyId: $bountyId, data: $data) {\n            title\n            targetId\n            status\n            reward\n            planet\n            id\n            description\n            createdBy {\n                email\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation EditBounty($bountyId: ID!, $data: UpdateBountyInput) {\n        updateBounty(bountyId: $bountyId, data: $data) {\n            title\n            targetId\n            status\n            reward\n            planet\n            id\n            description\n            createdBy {\n                email\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteBounty($bountyId: ID!) {\n        deleteBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteBounty($bountyId: ID!) {\n        deleteBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation PostBounty($bountyId: ID!) {\n        postBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n"): (typeof documents)["\n    mutation PostBounty($bountyId: ID!) {\n        postBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AcceptBounty($bountyId: ID!) {\n        acceptBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n"): (typeof documents)["\n    mutation AcceptBounty($bountyId: ID!) {\n        acceptBounty(bountyId: $bountyId) {\n            title\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetAvailableBounties {\n        allAvailableBounties {\n            id\n            targetId\n            title\n            reward\n            planet\n            description\n            status\n            createdBy {\n                id\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetAvailableBounties {\n        allAvailableBounties {\n            id\n            targetId\n            title\n            reward\n            planet\n            description\n            status\n            createdBy {\n                id\n                email\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCurrentUserBounties {\n        allCurrentUserBounties {\n            posted {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                createdBy {\n                    id\n                    email\n                }\n            }\n            created {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                createdBy {\n                    id\n                    email\n                }\n            }\n            accepted {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                acceptedBy {\n                    id\n                    email\n                }\n                createdBy {\n                    id\n                    email\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetCurrentUserBounties {\n        allCurrentUserBounties {\n            posted {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                createdBy {\n                    id\n                    email\n                }\n            }\n            created {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                createdBy {\n                    id\n                    email\n                }\n            }\n            accepted {\n                id\n                targetId\n                title\n                reward\n                planet\n                description\n                status\n                acceptedBy {\n                    id\n                    email\n                }\n                createdBy {\n                    id\n                    email\n                }\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;