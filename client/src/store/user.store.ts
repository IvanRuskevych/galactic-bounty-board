import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserServices } from "../services";
import { handleApolloError } from "../shared/utils";
import type { UserStore } from "../typings";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],
      currentUser: null,
      loading: false,
      error: null,
      fieldErrors: null,
      
      fetchAllUsersWithAcceptedBounties: async () => {
        set({loading: true, error: null});
        try {
          const {data} = await UserServices.getAllHuntersWithAcceptedBounties();
          set({users: data.allHunters});
        } catch (err) {
          const {fieldErrors, error} = handleApolloError(err);
          set({fieldErrors, error});
          throw err;
        } finally {
          set({loading: false});
        }
      },
      
      fetchCurrentUser: async () => {
        set({loading: true, error: null});
        try {
          const {data} = await UserServices.getCurrentUser();
          console.log({data});
          set({currentUser: data.currentUser});
        } catch (err) {
          const {fieldErrors, error} = handleApolloError(err);
          set({fieldErrors, error});
          throw err;
        } finally {
          set({loading: false});
        }
      },
      
      reset: async () => {
        set({users: [], currentUser: null});
      },
    }),
    
    
    {
      name: "users-storage",
      partialize: (state) => ({users: state.users, currentUser: state.currentUser}),
    },
  ),
)