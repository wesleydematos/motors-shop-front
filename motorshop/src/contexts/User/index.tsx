import { createContext, useContext, useState } from "react";
import { iUser, iUserContext, iUserContextProps } from "./types";

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser>({} as iUser);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
