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
    "\n\tmutation RegisterUser($email: String!, $password: String!) {\n\t\tregisterUser(email: $email, password: $password) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n": typeof types.RegisterUserDocument,
    "\n\tmutation LoginUser($email: String!, $password: String!) {\n\t\tloginUser(email: $email, password: $password) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n": typeof types.LoginUserDocument,
    "\n\tmutation LogoutUser {\n\t\tlogoutUser {\n\t\t\tsuccess\n\t\t}\n\t}\n": typeof types.LogoutUserDocument,
    "\n\tmutation CreateBounty($input: BountyCreateInput) {\n\t\tcreateBounty(input: $input) {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": typeof types.CreateBountyDocument,
    "\n\tmutation UpdateBounty($bountyId: ID!, $input: BountyUpdateInput) {\n\t\tupdateBounty(bountyId: $bountyId, input: $input) {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": typeof types.UpdateBountyDocument,
    "\n\tmutation DeleteBounty($bountyId: ID!) {\n\t\tdeleteBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n": typeof types.DeleteBountyDocument,
    "\n\tmutation PostBounty($bountyId: ID!) {\n\t\tpostBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n": typeof types.PostBountyDocument,
    "\n\tmutation AcceptBounty($bountyId: ID!) {\n\t\tacceptBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n": typeof types.AcceptBountyDocument,
    "\n\tquery AllAvailableBounties {\n\t\tgetAvailableBounties {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t\tacceptedBy {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n": typeof types.AllAvailableBountiesDocument,
    "\n\tquery CurrentUserBounties {\n\t\tgetCurrentUserBounties {\n\t\t\tposted {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\tcreated {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\taccepted {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tacceptedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.CurrentUserBountiesDocument,
    "\n\tquery AllHuntersWithAcceptedBounties {\n\t\tgetAllHuntersWithAcceptedBounties {\n\t\t\trole\n\t\t\tid\n\t\t\temail\n\t\t\tbountiesAccepted {\n\t\t\t\ttitle\n\t\t\t\ttargetId\n\t\t\t\tstatus\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tid\n\t\t\t\tdescription\n\t\t\t\tcreatedBy {\n\t\t\t\t\temail\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.AllHuntersWithAcceptedBountiesDocument,
    "\n\tquery CurrentUser {\n\t\tgetCurrentUser {\n\t\t\temail\n\t\t\trole\n\t\t}\n\t}\n": typeof types.CurrentUserDocument,
};
const documents: Documents = {
    "\n\tmutation RegisterUser($email: String!, $password: String!) {\n\t\tregisterUser(email: $email, password: $password) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n": types.RegisterUserDocument,
    "\n\tmutation LoginUser($email: String!, $password: String!) {\n\t\tloginUser(email: $email, password: $password) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n": types.LoginUserDocument,
    "\n\tmutation LogoutUser {\n\t\tlogoutUser {\n\t\t\tsuccess\n\t\t}\n\t}\n": types.LogoutUserDocument,
    "\n\tmutation CreateBounty($input: BountyCreateInput) {\n\t\tcreateBounty(input: $input) {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.CreateBountyDocument,
    "\n\tmutation UpdateBounty($bountyId: ID!, $input: BountyUpdateInput) {\n\t\tupdateBounty(bountyId: $bountyId, input: $input) {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.UpdateBountyDocument,
    "\n\tmutation DeleteBounty($bountyId: ID!) {\n\t\tdeleteBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n": types.DeleteBountyDocument,
    "\n\tmutation PostBounty($bountyId: ID!) {\n\t\tpostBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n": types.PostBountyDocument,
    "\n\tmutation AcceptBounty($bountyId: ID!) {\n\t\tacceptBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n": types.AcceptBountyDocument,
    "\n\tquery AllAvailableBounties {\n\t\tgetAvailableBounties {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t\tacceptedBy {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n": types.AllAvailableBountiesDocument,
    "\n\tquery CurrentUserBounties {\n\t\tgetCurrentUserBounties {\n\t\t\tposted {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\tcreated {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\taccepted {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tacceptedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.CurrentUserBountiesDocument,
    "\n\tquery AllHuntersWithAcceptedBounties {\n\t\tgetAllHuntersWithAcceptedBounties {\n\t\t\trole\n\t\t\tid\n\t\t\temail\n\t\t\tbountiesAccepted {\n\t\t\t\ttitle\n\t\t\t\ttargetId\n\t\t\t\tstatus\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tid\n\t\t\t\tdescription\n\t\t\t\tcreatedBy {\n\t\t\t\t\temail\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.AllHuntersWithAcceptedBountiesDocument,
    "\n\tquery CurrentUser {\n\t\tgetCurrentUser {\n\t\t\temail\n\t\t\trole\n\t\t}\n\t}\n": types.CurrentUserDocument,
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
export function graphql(source: "\n\tmutation RegisterUser($email: String!, $password: String!) {\n\t\tregisterUser(email: $email, password: $password) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation RegisterUser($email: String!, $password: String!) {\n\t\tregisterUser(email: $email, password: $password) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LoginUser($email: String!, $password: String!) {\n\t\tloginUser(email: $email, password: $password) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation LoginUser($email: String!, $password: String!) {\n\t\tloginUser(email: $email, password: $password) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LogoutUser {\n\t\tlogoutUser {\n\t\t\tsuccess\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation LogoutUser {\n\t\tlogoutUser {\n\t\t\tsuccess\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateBounty($input: BountyCreateInput) {\n\t\tcreateBounty(input: $input) {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateBounty($input: BountyCreateInput) {\n\t\tcreateBounty(input: $input) {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation UpdateBounty($bountyId: ID!, $input: BountyUpdateInput) {\n\t\tupdateBounty(bountyId: $bountyId, input: $input) {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UpdateBounty($bountyId: ID!, $input: BountyUpdateInput) {\n\t\tupdateBounty(bountyId: $bountyId, input: $input) {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation DeleteBounty($bountyId: ID!) {\n\t\tdeleteBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation DeleteBounty($bountyId: ID!) {\n\t\tdeleteBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation PostBounty($bountyId: ID!) {\n\t\tpostBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation PostBounty($bountyId: ID!) {\n\t\tpostBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation AcceptBounty($bountyId: ID!) {\n\t\tacceptBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation AcceptBounty($bountyId: ID!) {\n\t\tacceptBounty(bountyId: $bountyId) {\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery AllAvailableBounties {\n\t\tgetAvailableBounties {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t\tacceptedBy {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery AllAvailableBounties {\n\t\tgetAvailableBounties {\n\t\t\ttitle\n\t\t\ttargetId\n\t\t\tstatus\n\t\t\treward\n\t\t\tplanet\n\t\t\tid\n\t\t\tdescription\n\t\t\tcreatedBy {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t\tacceptedBy {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery CurrentUserBounties {\n\t\tgetCurrentUserBounties {\n\t\t\tposted {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\tcreated {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\taccepted {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tacceptedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery CurrentUserBounties {\n\t\tgetCurrentUserBounties {\n\t\t\tposted {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\tcreated {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\taccepted {\n\t\t\t\tid\n\t\t\t\ttargetId\n\t\t\t\ttitle\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tacceptedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t\tcreatedBy {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery AllHuntersWithAcceptedBounties {\n\t\tgetAllHuntersWithAcceptedBounties {\n\t\t\trole\n\t\t\tid\n\t\t\temail\n\t\t\tbountiesAccepted {\n\t\t\t\ttitle\n\t\t\t\ttargetId\n\t\t\t\tstatus\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tid\n\t\t\t\tdescription\n\t\t\t\tcreatedBy {\n\t\t\t\t\temail\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery AllHuntersWithAcceptedBounties {\n\t\tgetAllHuntersWithAcceptedBounties {\n\t\t\trole\n\t\t\tid\n\t\t\temail\n\t\t\tbountiesAccepted {\n\t\t\t\ttitle\n\t\t\t\ttargetId\n\t\t\t\tstatus\n\t\t\t\treward\n\t\t\t\tplanet\n\t\t\t\tid\n\t\t\t\tdescription\n\t\t\t\tcreatedBy {\n\t\t\t\t\temail\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery CurrentUser {\n\t\tgetCurrentUser {\n\t\t\temail\n\t\t\trole\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery CurrentUser {\n\t\tgetCurrentUser {\n\t\t\temail\n\t\t\trole\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;