import { useState } from "react";
import { IoClose } from "react-icons/io5";
import BannerHome from "../../components/BannerHome";
import CarCard from "../../components/CarCard";
import FilterHome from "../../components/FilterHome";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const [isOpenFilter, setIsOpenFIlter] = useState(false);

  const cars = [
    {
      id: 1,
      img: "https://cdn.motor1.com/images/mgl/ZnKvO2/s3/2023-porsche-911-carrera-t-in-gulf-blue.webp",
      name: "Porsche 911",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      postedBy: "Steiner",
      kilometers: 0,
      year: 2020,
      price: 1300000,
    },
    {
      id: 2,
      img: "https://media.cdnws.com/_i/286143/19770/1635/72/mercedes-amg-gt-black-series.jpeg",
      name: "Mercedes AMG GT3 Black Series",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      postedBy: "Enrico",
      kilometers: 0,
      year: 2022,
      price: 1800000,
    },
    {
      id: 3,
      img: "https://cdn.motor1.com/images/mgl/jbGeN/s3/2023-chevrolet-corvette-z06-front-view.webp",
      name: "Corvette Z06",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      postedBy: "Victor",
      kilometers: 0,
      year: 2021,
      price: 1100000.0,
    },
    {
      id: 1,
      img: "https://cdn.motor1.com/images/mgl/ZnKvO2/s3/2023-porsche-911-carrera-t-in-gulf-blue.webp",
      name: "Porsche 911",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      postedBy: "Steiner",
      kilometers: 0,
      year: 2020,
      price: 1300000,
    },
    {
      id: 2,
      img: "https://media.cdnws.com/_i/286143/19770/1635/72/mercedes-amg-gt-black-series.jpeg",
      name: "Mercedes AMG GT3 Black Series",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      postedBy: "Enrico",
      kilometers: 0,
      year: 2022,
      price: 1800000,
    },
    {
      id: 3,
      img: "https://cdn.motor1.com/images/mgl/jbGeN/s3/2023-chevrolet-corvette-z06-front-view.webp",
      name: "Corvette Z06",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      postedBy: "Victor",
      kilometers: 0,
      year: 2021,
      price: 1100000.0,
    },
  ];
  return (
    <>
      <Header />
      <BannerHome />
      {isOpenFilter && (
        <div className="absolute top-0 left-0 bg-whiteFixed py-5 px-4 w-full mt-20">
          <div className="flex justify-between mb-8">
            <p>Filtro</p>
            <button type="button" onClick={() => setIsOpenFIlter(false)}>
              <IoClose size={24} className="text-grey-800" />
            </button>
          </div>
          <FilterHome />
        </div>
      )}
      <main className="mt-14 px-14 tablet:grid tablet:grid-cols-[minmax(150px,_350px)_1fr] tablet:gap-6">
        <div className="hidden tablet:block">
          <FilterHome />
        </div>
        <div>
          <ul className=" overflow-x-scroll tablet:overflow-x-hidden grid grid-flow-col tablet:grid-flow-row grid-cols-[repeat(auto-fill,_minmax(291px,_1fr))] gap-11">
            {cars.map((car) => (
              <CarCard car={car} key={car.id}></CarCard>
            ))}
          </ul>
          <button
            type="button"
            className="mt-24 bg-brand-300 text-whiteFixed w-72 h-12 rounded  font-semibold tablet:hidden mx-auto block"
            onClick={() => setIsOpenFIlter(true)}
          >
            Filtros
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
