import { useState } from "react";
import { IoClose } from "react-icons/io5";
import BannerHome from "../../components/BannerHome";
import CarCard from "../../components/CarCard";
import FilterHome from "../../components/FilterHome";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarShowcase from "../../components/CarShowcase";

export default function Home() {
  const [isOpenFilter, setIsOpenFIlter] = useState(false);

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
          <CarShowcase />
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
