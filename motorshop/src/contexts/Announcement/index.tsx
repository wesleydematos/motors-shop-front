import { createContext, useContext, useEffect, useState } from "react";
import { api, apiFipe } from "../../services/api";
import {
  iAnnouncementContext,
  iAnnouncementContextProps,
  iCarResponse,
} from "./types";

export const AnnouncementContext = createContext<iAnnouncementContext>(
  {} as iAnnouncementContext
);

export const AnnouncementProvider = ({
  children,
}: iAnnouncementContextProps) => {
  const [cars, setCars] = useState([] as iCarResponse[]);
  const [allCars, setAllCars] = useState([] as iCarResponse[]);
  const [allBrands, setAllbrands] = useState([""]);
  const [brandFil, setBrandFil] = useState([""]);
  const [allModels, setAllModels] = useState([""]);
  const [modelsFil, setModelsFil] = useState([""]);
  const [colorsFil, setColorsFil] = useState([""]);
  const [yearsFil, setYearsFil] = useState([] as number[]);
  const [fuelsFil, setFuelsFil] = useState([""]);
  const [carsFipe, setCarsFipe] = useState([] as any);
  const [carsBrandOption, setCarsBrandOption] = useState("chevrolet");
  const [carsModelOption, setCarsModelOption] = useState([] as any);

  async function getCarsFipe(): Promise<void> {
    try {
      const response = await apiFipe.get("/cars");
      setCarsFipe(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCarsFipe();
  }, []);

  useEffect(() => {
    setCarsModelOption(carsFipe[carsBrandOption]);    
  }, [carsBrandOption]);  

  async function getAllCars(): Promise<void> {
    try {
      const response = await api.get<iCarResponse[]>("/vehicles");
      setCars(response.data);
      setAllCars(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllCars();
  }, []);

  useEffect(() => {
    const brands = allCars.map((car) => car.brand);
    const uniqueBrands = brands.filter((item, index) => {
      return brands.indexOf(item) === index;
    });

    setAllbrands(uniqueBrands);
    setBrandFil(uniqueBrands);
  }, [allCars]);

  useEffect(() => {
    const models = cars.map((car) => car.model);

    const uniqueModels = models.filter((item, index) => {
      return models.indexOf(item) === index;
    });

    setAllModels(uniqueModels);
    setModelsFil(uniqueModels);
  }, [cars]);

  return (
    <AnnouncementContext.Provider
      value={{
        cars,
        setCars,
        brandFil,
        setBrandFil,
        modelsFil,
        setModelsFil,
        colorsFil,
        setColorsFil,
        yearsFil,
        setYearsFil,
        fuelsFil,
        setFuelsFil,
        allCars,
        allBrands,
        allModels,
        carsFipe,
        carsBrandOption,
        setCarsBrandOption,
        carsModelOption,
        setCarsModelOption,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncementContext = () => useContext(AnnouncementContext);
