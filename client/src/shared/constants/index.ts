export const BountyStatus = {
  CREATED: "CREATED",
  POSTED: "POSTED",
  ACCEPTED: "ACCEPTED",
}

export const UserRoles = {
  ADMIN: "ADMIN",
  HUNTER: "HUNTER",
}

export const AuthAction = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
} as const;
export type AuthActionType = (typeof AuthAction)[keyof typeof AuthAction];

export const contextPage = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
export type contextPageType = (typeof contextPage)[keyof typeof contextPage];

export const BOUNTY_FILTERS = ["ALL", "CREATED", "POSTED", "ACCEPTED"] as const;
export type BountyFilterType = typeof BOUNTY_FILTERS[number];