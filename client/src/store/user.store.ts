import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserServices } from "../services";
import { handleApolloError } from "../shared/utils";
import type { UserStore } from "../typings";

export const userStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],
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
    }),
    
    {
      name: "users-storage",
      partialize: (state) => ({users: state.users}),
    },
  ),
)