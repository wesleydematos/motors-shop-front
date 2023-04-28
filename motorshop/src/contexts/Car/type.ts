import { ReactNode } from "react";

export interface iCar {
  id: string;
  brand: string;
  coverUrl: string;
  createdAt: string;
  description: string;
  fipe: string;
  fuel: string;
  isActive: boolean;
  mileage: string;
  model: string;
  price: number;
  title: string;
  updatedAt: string;
  year: number;
  user: string;
}

export interface iCarContext {
  car: iCar;
  setCar: React.Dispatch<React.SetStateAction<iCar>>;
}

export interface iCarContextProps {
  children: ReactNode;
}
