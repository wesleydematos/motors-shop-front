import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  iAnnouncementContext,
  iAnnouncementContextProps,
  iCarResponse,
} from "./types";

const AnnouncementContext = createContext<iAnnouncementContext>(
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
  const [mileageMin, setMileageMin] = useState("");
  const [priceMin, setPriceMin] = useState("");

  async function getAllCars(): Promise<void> {
    try {
      const response = await api.get<iCarResponse[]>("/vehicles");
      setCars(response.data);
      setAllCars(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function setBrands(brand: string): void {
    if (brandFil.length > 1) {
      const carsFil = cars.filter(
        (car) => car.brand.toUpperCase() === brand.toUpperCase()
      );

      setCars(carsFil);
      setBrandFil([brand]);
    } else {
      cleanFilters();
      setCars(allCars);
    }
  }

  function setModels(model: string): void {
    if (modelsFil.length > 1) {
      const carsFil = cars.filter(
        (car) => car.model.toUpperCase() === model.toUpperCase()
      );
      setCars(carsFil);
      setModelsFil([model]);
    } else {
      setBrandFil(allBrands);
      setModelsFil(allModels);
      setCars(allCars);
    }
  }

  function cleanFilters() {
    setBrandFil(allBrands);
    setColorsFil(colorsFil);
    setFuelsFil(fuelsFil);
    setModelsFil(modelsFil);
    setYearsFil(yearsFil);
    setCars(allCars);
    setMileageMin("");
  }

  function getMin(type: string, e: any): void {
    if (type === "price") {
      setPriceMin(e.target.value);

      const carfill = cars.filter(
        (car) => car.price >= parseInt(e.target.value)
      );

      const minValue = cars.reduce((min, item) => {
        return item.price < min ? item.price : min;
      }, cars[0].price);

      if (
        carfill.length === 0 &&
        String(minValue).length > e.target.value.length
      ) {
        setCars(allCars);
        setBrandFil(allBrands);
      }

      if (carfill.length !== 0 && carfill.length < cars.length) {
        setCars(carfill);
      }
    }

    setMileageMin(e.target.value);

    const carfillmile = cars.filter(
      (car) => parseInt(car.mileage) >= parseInt(e.target.value)
    );

    const minValue = cars.reduce((min, item) => {
      return parseInt(item.mileage) < min ? parseInt(item.mileage) : min;
    }, parseInt(cars[0].mileage));

    if (
      carfillmile.length === 0 &&
      String(minValue).length > e.target.value.length
    ) {
      setCars(allCars);
      setBrandFil(allBrands);
    }

    if (carfillmile.length !== 0 && carfillmile.length < cars.length) {
      setCars(carfillmile);
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
        brandFil,
        modelsFil,
        colorsFil,
        setColorsFil,
        yearsFil,
        setYearsFil,
        fuelsFil,
        setFuelsFil,
        getMin,
        cleanFilters,
        mileageMin,
        priceMin,
        setBrands,
        setModels,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncementContext = () => useContext(AnnouncementContext);
