import { bountyRepository } from "~/repositories";
import { BountyStatus } from "~/shared/const";
import { ApiErrors } from "~/utils/ApiErrors";

export async function getBountyOrFail(bountyId: string) {
	const bounty = await bountyRepository.findById(bountyId);
	if (!bounty) throw ApiErrors.NotFound("Bounty not found");

	return bounty;
}

export function checkCanPostBounty(status: string) {
	if (status === BountyStatus.POSTED) throw ApiErrors.Conflict("Couldn't perform action. Bounty is already posted.");
	if (status === BountyStatus.ACCEPTED)
		throw ApiErrors.Conflict("Couldn't perform action. Bounty is already accepted.");
}

export function checkCanAcceptBounty(status: string) {
	if (status === BountyStatus.CREATED) throw ApiErrors.Conflict("Couldn't perform action. Bounty is not posted yet.");
	if (status === BountyStatus.ACCEPTED)
		throw ApiErrors.Conflict("Couldn't perform action. Bounty is already accepted.");
}

export function checkCanUpdateDeleteBounty(status: string) {
	if (status === BountyStatus.ACCEPTED)
		throw ApiErrors.Conflict("Couldn't perform action. Bounty is already accepted.");
}
