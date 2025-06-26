import type { Bounty } from "../generated/graphql.ts";
import type { BountyFormValues } from "../shared/components";

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
  resetErrors: () => void;
  createBounty: (data: BountyFormValues) => void;
  updateBounty: (bountyId: string, data: BountyFormValues) => void;
  deleteBounty: (bountyId: string) => void;
  postBounty: (bountyId: string) => void;
  acceptBounty: (bountyId: string) => void;
  
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

