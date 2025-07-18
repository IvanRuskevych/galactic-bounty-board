import { onError } from "@apollo/client/link/error";
import { notifySuccess } from "~/shared/utils";
import { useAuthStore } from "~/store";

export const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		for (const graphQLError of graphQLErrors) {
			if (graphQLError.extensions?.code === "UNAUTHENTICATED") {
				useAuthStore.getState().logout();
				notifySuccess("Your session has expired. Please log in again.");
				break;
			}
		}
	}

	if (networkError) {
		console.error(networkError);
	}
});
