import { ReactNode } from "react";

export interface iUserContext {
  // colocar todas tipagens das funcões que vao ser exportadas no contexto
}

export interface iUserContextProps {
  children: ReactNode;
}

export interface iLogin {
  user: string;
  password: string;
}
