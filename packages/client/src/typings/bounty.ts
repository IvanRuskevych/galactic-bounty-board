import { Bounty } from "~/graphql/generated/graphql";
import { contextPageType } from "~/shared/constants";

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
	createBounty: (data: BountyFormValues) => Promise<{ success: boolean }>;
	updateBounty: (bountyId: string, data: BountyFormValues) => Promise<{ success: boolean }>;
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
	context?: contextPageType;
}

export interface BountyCardProps {
	bounty: Bounty;
	onEdit?: (bounty: Bounty) => void;
	onPost?: (id: string) => void;
	onAccept?: (id: string) => void;
	onDelete?: (id: string) => void;
	context?: contextPageType;
}

export interface BountyDialogProps {
	open: boolean;
	onClose: () => void;
	onSuccess?: () => void;
	initialData?: Bounty | null;
}

export interface BountyFormValues {
	title: string;
	description: string;
	planet: string;
	reward: number;
	targetId: number | string;
	// targetId: number;
}
