import { createContext, useContext, useEffect, useState } from "react";
import { iCar, iCarContext, iCarContextProps } from "./type";
import { api } from "../../services/api";

export const CarContext = createContext<iCarContext>({} as iCarContext);

export const CarProvider = ({ children }: iCarContextProps) => {
  const [car, setCar] = useState<iCar>({} as iCar);

  async function getCar(): Promise<void> {
    try {
      const response = await api.get<iCar>(`/vehicles/${car.id}`);
      setCar(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCar();
  });

  return (
    <CarContext.Provider
      value={{
        car,
        setCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
