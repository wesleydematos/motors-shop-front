import { ReactNode } from "react";

export interface iUserContext {
  user: iUser;
  handleLogin(data: iLogin): Promise<void>;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  number: string;
  dateBirth: string;
  description: string;
  isAdvertiser: boolean;
  isActive: boolean;
  updatedAt: Date;
  createdAt: Date;
}

export interface iUserContextProps {
  children: ReactNode;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iLoginResponse {
  token: string;
  user: iUser;
}
