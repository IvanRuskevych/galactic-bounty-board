import {apolloClient} from "../apollo/client";
import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "../graphql/mutations";

export const AuthService = {
    register: (email: string, password: string) => {
        return apolloClient.mutate({
            mutation: REGISTER_USER,
            variables: {email, password},
        });
    },

    login: (email: string, password: string) => {
        return apolloClient.mutate({
            mutation: LOGIN_USER,
            variables: {email, password},
        });
    },

    logout: () => {
        return apolloClient.mutate({
            mutation: LOGOUT_USER,
        });
    },
};
