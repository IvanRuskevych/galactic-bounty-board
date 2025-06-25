import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BountyService } from "../services";
import { handleApolloError } from "../shared/utils";
import type { BountyStore } from "../typings";

export const useBountyStore = create<BountyStore>()(
  persist(
    (set) => ({
        bounties: [],
        created: [],
        posted: [],
        accepted: [],
        loading: false,
        error: null,
        fieldErrors: null,
        
        fetchPublicBounties: async () => {
          set({loading: true, error: null});
          try {
            const {data} = await BountyService.getPublic();
            set({bounties: data.allAvailableBounties});
          } catch (err) {
            const {fieldErrors, error} = handleApolloError(err);
            set({fieldErrors, error});
          } finally {
            set({loading: false});
          }
        },
        
        fetchCurrentUserBounties: async () => {
          set({loading: true, error: null});
          try {
            const {data} = await BountyService.getCurrentUserBounties();
            set({
              created: data.allCurrentUserBounties.created,
              posted: data.allCurrentUserBounties.posted,
              accepted: data.allCurrentUserBounties.accepted,
            });
          } catch (err) {
            const {fieldErrors, error} = handleApolloError(err);
            set({fieldErrors, error});
          } finally {
            set({loading: false});
          }
        },
        
        reset: () =>
          set({
            bounties: [],
            created: [],
            posted: [],
            accepted: [],
            loading: false,
            error: null,
            fieldErrors: null,
          }),
      }
    ),
    
    {
      name: "bounty-storage",
      partialize: (state) => ({
        bounties: state.bounties,
        created: state.created,
        posted: state.posted,
        accepted: state.accepted,
      }),
    },
  ),
);
