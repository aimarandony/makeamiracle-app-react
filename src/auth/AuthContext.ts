import { createContext } from "react";

type AuthContextTypes = {
    authenticated: boolean,
    setAuthenticated: (status: boolean) => void
}

export const AuthContext = createContext<AuthContextTypes>({
    authenticated: false,
    setAuthenticated: () => { }
})