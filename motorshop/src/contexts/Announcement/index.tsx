import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api, apiFipe } from "../../services/api";
import {
  iAnnouncementContext,
  iAnnouncementContextProps,
  iCarResponse,
  iCarSearchFipe,
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
  const [allColors, setAllColors] = useState([""]);
  const [colorsFil, setColorsFil] = useState([""]);
  const [allYears, setAllYears] = useState([] as number[]);
  const [yearsFil, setYearsFil] = useState([] as number[]);
  const [allFuels, setAllFuels] = useState([""]);
  const [fuelsFil, setFuelsFil] = useState([""]);
  const [mileageMin, setMileageMin] = useState("");
  const [mileageMax, setMileageMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [carsFipe, setCarsFipe] = useState([] as any);
  const [carsBrandOption, setCarsBrandOption] = useState("chevrolet");
  const [carsModelOption, setCarsModelOption] = useState([] as any);
  const [carsFipeValue, setCarsFipeValue] = useState<any>();
  const [carSearchFipe, setCarSearchFipe] = useState({} as iCarSearchFipe);
  const [carId, setCarId] = useState("");
  const [clearInput, setClearInput] = useState("");
  const [comment, setComment] = useState(false);
  const [editCar, setEditCar] = useState("");
  const [reload, setReload] = useState(0);

  async function getCarsFipeUnique(
    carSearchFipe: iCarSearchFipe
  ): Promise<void> {
    try {
      const response = await apiFipe.get(
        `/cars/unique?brand=${carSearchFipe.brand}&name=${carSearchFipe.name}&year=${carSearchFipe.year}&fuel=${carSearchFipe.fuel}`
      );
      setCarsFipeValue(response.data.value);
    } catch (error) {
      setCarsFipeValue(0);
    }
  }

  async function updateImages(data: string, id: string): Promise<void> {
    const token = localStorage.getItem("@Token-MotorsShop");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.patch(`/photos/${id}`, data);
    } catch (error: any) {
      console.error(error.message);
      toast.error("Erro ao editar imagem");
    } finally {
      toast.success("imagem editada com sucesso!");
    }
  }

  async function updateCars(data: any): Promise<void> {
    const token = localStorage.getItem("@Token-MotorsShop");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.patch(`/vehicles/${editCar}`, data);
      toast.success("Anúncio editado com sucesso!");
      setReload(reload + 1);
    } catch (error: any) {
      console.error(error.message);
      toast.error("Erro ao editar anúncio");
    }
  }

  async function deleteCars(): Promise<void> {
    const token = localStorage.getItem("@Token-MotorsShop");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.delete(`/vehicles/${editCar}`);
      toast.success("Anúncio deletado com sucesso!");
      setReload(reload + 1);
    } catch (error: any) {
      console.error(error.message);
      toast.error("Erro ao deletar anúncio");
    }
  }

  async function createCars(data: any): Promise<void> {
    const token = localStorage.getItem("@Token-MotorsShop");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.post("/vehicles", data);
      toast.success("Anúncio criado com sucesso!");
      setReload(reload + 1);
    } catch (error: any) {
      console.error(error.message);
      toast.error("Erro ao criar anúncio");
    }
  }

  async function postComment(data: any): Promise<void> {
    const token = localStorage.getItem("@Token-MotorsShop");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.post(`comments/${carId}`, data);
      setClearInput("");
      if (comment === false) {
        setComment(true);
      }
      if (comment === true) {
        setComment(false);
      }
      toast.success("Comentário publicado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro no seu comentário!");
    }
  }

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
    getCarsFipeUnique(carSearchFipe);
  }, [carSearchFipe]);

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

  function setColors(color: string): void {
    if (colorsFil.length > 1) {
      const carsFil = cars.filter((car) => car.color === color);
      setCars(carsFil);
      setColorsFil([color]);
    } else {
      cleanFilters();
    }
  }

  function setFuels(fuel: string): void {
    if (fuelsFil.length > 1) {
      const carsFil = cars.filter((car) => car.fuel === fuel);
      setCars(carsFil);
      setColorsFil([fuel]);
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
    setColorsFil(allColors);
    setFuelsFil(allFuels);
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
    const colors = cars.map((car) => car.color);
    const fuels = cars.map((car) => car.fuel);

    const uniqueModels = models.filter((model, index) => {
      return models.indexOf(model) === index;
    });

    const uniqueYears = years.filter((year, index) => {
      return years.indexOf(year) === index;
    });

    const uniqueColors = colors.filter((color, index) => {
      return colors.indexOf(color) === index;
    });

    const uniqueFuels = fuels.filter((fuel, index) => {
      return fuels.indexOf(fuel) === index;
    });

    setModelsFil(uniqueModels);
    setAllYears(uniqueYears);
    setYearsFil(uniqueYears);
    setColorsFil(uniqueColors);
    setAllColors(uniqueColors);
    setFuelsFil(uniqueFuels);
    setAllFuels(uniqueFuels);
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
        setColors,
        setFuels,
        carSearchFipe,
        carsFipeValue,
        setCarsFipeValue,
        setCarSearchFipe,
        createCars,
        postComment,
        setCarId,
        clearInput,
        setClearInput,
        comment,
        updateCars,
        editCar,
        setEditCar,
        deleteCars,
        updateImages,
        reload,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncementContext = () => useContext(AnnouncementContext);
