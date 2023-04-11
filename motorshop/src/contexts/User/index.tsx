import { createContext, useContext } from "react";
import { iUserContext, iUserContextProps } from "./types";

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
