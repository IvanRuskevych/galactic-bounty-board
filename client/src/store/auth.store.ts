import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthService } from "../services";
import { handleApolloError } from "../shared/utils";
import { notifyError, notifySuccess } from "../shared/utils/toastify.ts";
import type { AuthStore } from "../typings";
import { useBountyStore } from "./bounty.store.ts";
import { useStarWarsStore } from "./starWars.store.ts";
import { useUserStore } from "./user.store.ts";

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
          notifySuccess("Registration successful");
        } catch (err) {
          const {fieldErrors, error} = handleApolloError(err);
          set({fieldErrors, error});
          if (error) notifyError(error);
          throw err;
        } finally {
          set({loading: false});
        }
      },
      
      login: async (email: string, password: string) => {
        set({loading: true, error: null});
        try {
          const {data} = await AuthService.login(email, password);
          set({user: data.loginUser.user, isAuth: true});
          notifySuccess("Login successful");
        } catch (err) {
          const {fieldErrors, error} = handleApolloError(err);
          set({fieldErrors, error});
          if (error) notifyError(error);
          throw err;
        } finally {
          set({loading: false});
        }
      },
      
      logout: async () => {
        set({loading: true, error: null});
        
        try {
          await AuthService.logout();
          set({user: null, isAuth: false});
          useBountyStore.getState().reset()
          useStarWarsStore.getState().reset()
          useUserStore.getState().reset()
        } catch (err) {
          const {fieldErrors, error} = handleApolloError(err);
          set({fieldErrors, error});
          if (error) notifyError(error);
          throw err;
        } finally {
          set({loading: false});
        }
      },
      
      resetErrors: () => {
        set({fieldErrors: null, error: null});
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({user: state.user, isAuth: state.isAuth}),
    },
  ),
);