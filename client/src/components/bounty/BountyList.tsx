import {useQuery} from "@apollo/client";
import {GET_BOUNTIES} from "../../graphql/queries";

export const BountyList = () => {
    const {data} = useQuery(GET_BOUNTIES);
    const bounties = data?.allAvailableBounties
    console.log("data: ", data?.allAvailableBounties);

    return (
        <>
            <div>BountyList</div>
            <ul>
                {bounties?.map((bounty: {
                    title: string
                }) => (<li>{bounty.title}</li>))}

            </ul>
        </>
    )
};
