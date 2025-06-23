import {create} from "zustand";
import {persist} from "zustand/middleware";
import {AuthService} from "../services";
import {handleApolloError} from "../shared/utils";
import type {AuthStore} from "../typings";

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            isAuth: false,
            loading: false,
            error: null,
            fieldErrors: null,

            register: async (email: string, password: string) => {
                set({loading: true, error: null});
                try {
                    const {data} = await AuthService.register(email, password);
                    set({user: data.registerUser.user, isAuth: true});
                    // todo: use react-toastify for show notifications
                    // toast.success("Registration successful");
                } catch (err) {
                    const {fieldErrors, error} = handleApolloError(err);
                    set({fieldErrors, error});
                } finally {
                    set({loading: false});
                }
            },

            login: async (email: string, password: string) => {
                set({loading: true, error: null});
                try {
                    const {data} = await AuthService.login(email, password);
                    set({user: data.loginUser.user, isAuth: true});
                    // todo: use react-toastify for show notifications
                    // toast.success("Login successful");
                } catch (err) {
                    const {fieldErrors, error} = handleApolloError(err);
                    set({fieldErrors, error});
                } finally {
                    set({loading: false});
                }
            },

            logout: async () => {
                set({loading: true, error: null});

                try {
                    await AuthService.logout();
                    set({user: null, isAuth: false});
                    // todo: use react-toastify for show notifications
                    // toast.success("Logout successful");
                } catch (err) {
                    const {fieldErrors, error} = handleApolloError(err);
                    set({fieldErrors, error});
                } finally {
                    set({loading: false});
                }

            },
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({user: state.user, isAuth: state.isAuth}),
        },
    ),
);