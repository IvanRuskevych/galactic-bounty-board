import type {Bounty} from "../../generated/graphql";
import type {BountyFilterType} from "../../typings";

export function filterBounties(
    allBounties: Bounty[],
    filter: BountyFilterType,
    search: string,
): Bounty[] {
    let bountiesToShow = allBounties;

    if (filter !== "ALL") {
        bountiesToShow = allBounties.filter(b => b.status === filter);
    }

    if (!search.trim()) return bountiesToShow;

    const query = search.toLowerCase();

    return bountiesToShow.filter(bounty =>
        bounty.title.toLowerCase().includes(query) ||
        bounty.targetName.toLowerCase().includes(query) ||
        bounty.planet.toLowerCase().includes(query) ||
        (bounty.description?.toLowerCase().includes(query) ?? false),
    );
}
