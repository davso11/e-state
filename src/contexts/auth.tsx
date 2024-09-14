import { AuthData } from "@/type";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type TAuthContext = {
  auth: AuthData | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthData | null>>;
};

const AuthContext = createContext<TAuthContext>({} as TAuthContext);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [auth, setAuth] = useState<AuthData | null>(() => {
    const authData = localStorage.getItem("auth");
    if (!authData) return null;
    return JSON.parse(authData);
  });

  return (
    <AuthContext.Provider
      value={{ auth, setAuth }}
      children={children}
    />
  );
}
