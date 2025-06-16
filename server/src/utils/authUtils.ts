import {Context} from "../context"
import {ApiErrors} from "../utils/ApiErrors";

export function requireAuth(ctx: Context) {
    if (!ctx.currentUser) {
        throw ApiErrors.Unauthorized("Not authenticated");
    }
}

export function requireOwnership(userId: string, ownerId: string) {
    if (userId !== ownerId) {
        throw ApiErrors.Forbidden("User is not the owner");
    }

}