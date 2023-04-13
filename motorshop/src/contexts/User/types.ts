import { ReactNode } from "react";

export interface iUserContext {
  user: iUser;
}

export interface iUser {
  email: string;
  password?: string;
  name: string;
  // ...
}

export interface iUserContextProps {
  children: ReactNode;
}

export interface iLogin {
  user: string;
  password: string;
}
