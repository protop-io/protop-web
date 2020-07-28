import { createContext } from "react";

export type UserContext = {
  picture?: string
  username: string
}

export type ContextProps = {
  user: UserContext
  isLoading: boolean
}

export const AuthContext = createContext<ContextProps>({
  user: null,
  isLoading: true
})
