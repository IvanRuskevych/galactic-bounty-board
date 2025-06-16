export interface CreateBountyArgsType {
    title: string,
    description: string,
    targetName: string,
    planet: string,
    reward: number,
}

export interface UpdateBountyArgsType {
    bountyId: string,
    title?: string,
    description?: string,
    targetName?: string,
    planet?: string,
    reward?: number,
}