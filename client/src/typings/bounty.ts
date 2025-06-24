import type {Bounty} from "../generated/graphql.ts";

export interface BountyStore {
    bounties: Bounty[];
    created: Bounty[];
    posted: Bounty[];
    accepted: Bounty[];

    loading: boolean;
    error: string | null;
    fieldErrors: Record<string, string[]> | null;

    fetchPublicBounties: () => void;
    fetchCurrentUserBounties: () => void;

}

export interface BountyListProps {
    bounties: Bounty[];
}

export type BountyFilterType = "ALL" | "CREATED" | "POSTED" | "ACCEPTED";

