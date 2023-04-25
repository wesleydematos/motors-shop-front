import { ReactNode } from "react";

export interface iUserContext {
  user: iUser;
  handleLogin(data: iLogin): Promise<void>;
  isAdvertiser: boolean;
  setIsAdvertiser: React.Dispatch<React.SetStateAction<boolean>>;
  handleRegister(data: iRegister): Promise<void>;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
  isRegister: boolean;
  logout(): void;
  setOnAddressMod: React.Dispatch<React.SetStateAction<boolean>>;
  onAddressMod: boolean;
  updateAddress(body: iUpdateAddressRequest): Promise<void>;
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

export interface iRegister {
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  dateBirth: string;
  description: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  password: string;
  passwordConfirmation: string;
}

export interface iUpdateAddressRequest {
  zip_code?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}

export interface iCreateUserRequest {
  name: string;
  email: string;
  cpf: string;
  number: string;
  dateBirth: string;
  description: string;
  password: string;
  isAdvertiser: boolean;
}

export interface iLoginResponse {
  token: string;
  user: iUser;
}
