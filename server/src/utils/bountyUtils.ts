import {Context} from "../context";
import {bountyRepository} from "../repositories";
import {ApiErrors} from "./ApiErrors";

export async function getBountyOrFail(ctx: Context, bountyId: string) {
    const bounty = await bountyRepository.getById(ctx.prisma, bountyId);
    if (!bounty) throw ApiErrors.NotFound("Bounty not found");

    return bounty;
}

export function checkCanPostBounty(status: string) {
    if (status === "POSTED") throw ApiErrors.Conflict("Couldn't perform action. Bounty is already posted.");
    if (status === "ACCEPTED") throw ApiErrors.Conflict("Couldn't perform action. Bounty is already accepted.");
}

export function checkCanAcceptBounty(status: string) {
    if (status === "CREATED") throw ApiErrors.Conflict("Couldn't perform action. Bounty is not posted yet.");
    if (status === "ACCEPTED") throw ApiErrors.Conflict("Couldn't perform action. Bounty is already accepted.");
}

export function checkCanUpdateDeleteBounty(status: string) {
    if (status === "ACCEPTED") throw ApiErrors.Conflict("Couldn't perform action. Bounty is already accepted.");
}