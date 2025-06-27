import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
    mutation RegisterUser($email: String!, $password: String!) {
        registerUser(email: $email, password: $password) {
            user {
                id
                email
                role
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            user {
                id
                email
                role
            }
        }
    }
`;

export const LOGOUT_USER = gql`
    mutation LogoutUser {
        logout {
            success
        }
    }
`;