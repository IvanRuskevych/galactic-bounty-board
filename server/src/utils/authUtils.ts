import {Context} from "../context"

export function requireAuth(ctx: Context) {
    if (!ctx.currentUser) {
        throw new Error("Not authenticated");
    }
}

export function requireOwnership(userId: string, ownerId: string) {
    if (userId !== ownerId) {
        throw new Error("Not authorized – user is not the owner");
    }

}