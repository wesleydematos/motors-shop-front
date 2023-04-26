import { ReactNode } from "react";

export interface iCarResponse {
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

export interface iAnnouncementContext {
  cars: iCarResponse[];
  allCars: iCarResponse[];
  setCars: React.Dispatch<React.SetStateAction<iCarResponse[]>>;
  brandFil: string[];
  allBrands: string[];
  modelsFil: string[];
  allModels: string[];
  colorsFil: string[];
  yearsFil: number[];
  fuelsFil: string[];
  setBrandFil: React.Dispatch<React.SetStateAction<string[]>>;
  setModelsFil: React.Dispatch<React.SetStateAction<string[]>>;
  setColorsFil: React.Dispatch<React.SetStateAction<string[]>>;
  setYearsFil: React.Dispatch<React.SetStateAction<number[]>>;
  setFuelsFil: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface iAnnouncementContextProps {
  children: ReactNode;
}
