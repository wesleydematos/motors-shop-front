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
  brandFil: string[];
  modelsFil: string[];
  colorsFil: string[];
  yearsFil: number[];
  fuelsFil: string[];
  setColorsFil: React.Dispatch<React.SetStateAction<string[]>>;
  setYearsFil: React.Dispatch<React.SetStateAction<number[]>>;
  setFuelsFil: React.Dispatch<React.SetStateAction<string[]>>;
  getMin(type: string, e: any): void;
  mileageMin: string;
  cleanFilters(): void;
  setBrands(brand: string): void;
  setModels(model: string): void;
  priceMin: string;
  priceMax: string;
  mileageMax: string;
  getMax(type: string, e: any): void;
  setYears(year: number): void;
  setCarsBrandOption: React.Dispatch<React.SetStateAction<any>>;
  setCarsModelOption: React.Dispatch<React.SetStateAction<string[]>>;
  carsFipe: string[];
  carsBrandOption: any;
  carsModelOption: any;
  getAllCars(): Promise<void>;
}

export interface iAnnouncementContextProps {
  children: ReactNode;
}
