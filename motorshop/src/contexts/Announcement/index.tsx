import { createContext, useContext } from "react";
import { iAnnouncementContext, iAnnouncementContextProps } from "./types";

const AnnouncementContext = createContext<iAnnouncementContext>(
  {} as iAnnouncementContext
);

export const AnnouncementProvider = ({
  children,
}: iAnnouncementContextProps) => {
  return (
    <AnnouncementContext.Provider value={{}}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncementContext = () => useContext(AnnouncementContext);
