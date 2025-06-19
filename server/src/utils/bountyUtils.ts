import {Context} from "../context";
import {bountyRepository} from "../repositories";
import {ApiErrors} from "./ApiErrors";

export async function getBountyOrFail(ctx: Context, bountyId: string) {
    const bounty = await bountyRepository.getById(ctx.prisma, bountyId);
    if (!bounty) throw ApiErrors.NotFound("Bounty not found");

    return bounty;
}

export function checkBountyNotAccepted(acceptedById: string | null) {
    if (acceptedById) throw ApiErrors.Conflict("Couldn't perform action. Bounty was accepted.");

}