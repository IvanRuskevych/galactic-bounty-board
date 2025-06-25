import type { Bounty } from "../generated/graphql.ts";

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
  reset: () => void;
}

export interface BountyListProps {
  bounties: Bounty[];
  onEdit?: (bounty: Bounty) => void;
  onPost?: (id: string) => void;
  onAccept?: (id: string) => void;
  onDelete?: (id: string) => void;
  context?: "private" | "public"
}

export interface BountyCardProps {
  bounty: Bounty;
  onEdit?: (bounty: Bounty) => void;
  onPost?: (id: string) => void;
  onAccept?: (id: string) => void;
  onDelete?: (id: string) => void;
  context?: "private" | "public"
}

export type BountyFilterType = "ALL" | "CREATED" | "POSTED" | "ACCEPTED";

