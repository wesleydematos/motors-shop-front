import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const [modelsFil, setModelsFil] = useState([""]);
  const [colorsFil, setColorsFil] = useState([""]);
  const [allYears, setAllYears] = useState([] as number[]);
  const [yearsFil, setYearsFil] = useState([] as number[]);
  const [fuelsFil, setFuelsFil] = useState([""]);
  const [mileageMin, setMileageMin] = useState("");
  const [mileageMax, setMileageMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
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
      cleanFilters();
    }
  }

  function setYears(year: number): void {
    if (yearsFil.length > 1) {
      const carsFil = cars.filter((car) => car.year === year);
      setCars(carsFil);
      setYearsFil([year]);
    } else {
      cleanFilters();
    }
  }

  function cleanFilters() {
    setBrandFil(allBrands);
    setColorsFil(colorsFil);
    setFuelsFil(fuelsFil);
    setModelsFil(modelsFil);
    setYearsFil(allYears);
    setCars(allCars);
    setMileageMin("");
    setPriceMin("");
    setMileageMax("");
    setPriceMax("");
  }

  function getMin(type: string, e: any): void {
    if (type === "price") {
      setPriceMin(e.target.value);

      const carsFiltred = cars.filter(
        (car) => car.price >= parseInt(e.target.value)
      );

      const minPrice = cars.reduce((min, item) => {
        return item.price < min ? item.price : min;
      }, cars[0].price);

      if (
        carsFiltred.length === 0 &&
        String(minPrice).length > e.target.value.length
      ) {
        setCars(allCars);
        setBrandFil(allBrands);
      }

      if (carsFiltred.length !== 0 && carsFiltred.length < cars.length) {
        setCars(carsFiltred);
      }
    } else {
      setMileageMin(e.target.value);

      const carsFiltred = cars.filter(
        (car) => parseInt(car.mileage) >= parseInt(e.target.value)
      );

      const minMileage = cars.reduce((min, item) => {
        return parseInt(item.mileage) < min ? parseInt(item.mileage) : min;
      }, parseInt(cars[0].mileage));

      if (
        carsFiltred.length === 0 &&
        String(minMileage).length > e.target.value.length
      ) {
        setCars(allCars);
        setBrandFil(allBrands);
      }

      if (carsFiltred.length !== 0 && carsFiltred.length < cars.length) {
        setCars(carsFiltred);
      }
    }
  }

  function getMax(type: string, e: any): void {
    if (type === "price") {
      setPriceMax(e.target.value);

      const carsFiltred = cars.filter(
        (car) => car.price <= parseInt(e.target.value)
      );

      const maxPrice = cars.reduce((max, item) => {
        return item.price > max ? item.price : max;
      }, cars[0].price);

      if (String(maxPrice).length < e.target.value.length) {
        cleanFilters();
        toast.info("Valor muito alto!");
      }

      if (carsFiltred.length !== 0 && carsFiltred.length < cars.length) {
        setCars(carsFiltred);
      }
    } else {
      setMileageMax(e.target.value);

      const carsFiltred = cars.filter(
        (car) => parseInt(car.mileage) <= parseInt(e.target.value)
      );

      const maxMileage = cars.reduce((max, item) => {
        return parseInt(item.mileage) > max ? parseInt(item.mileage) : max;
      }, parseInt(cars[0].mileage));

      if (String(maxMileage).length < e.target.value.length) {
        cleanFilters();
        toast.info("Valor muito alto!");
      }

      if (carsFiltred.length !== 0 && carsFiltred.length < cars.length) {
        setCars(carsFiltred);
      }
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
    const years = cars.map((car) => car.year);

    const uniqueModels = models.filter((item, index) => {
      return models.indexOf(item) === index;
    });

    const uniqueYears = years.filter((item, index) => {
      return years.indexOf(item) === index;
    });

    setModelsFil(uniqueModels);
    setAllYears(uniqueYears);
    setYearsFil(uniqueYears);
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
        getMax,
        mileageMax,
        priceMax,
        setYears,
        carsFipe,
        carsBrandOption,
        setCarsBrandOption,
        carsModelOption,
        setCarsModelOption,
        getAllCars,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncementContext = () => useContext(AnnouncementContext);
