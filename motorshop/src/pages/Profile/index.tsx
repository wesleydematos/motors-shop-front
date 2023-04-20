import { useContext, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUserContext } from "../../contexts/User";
import CardCar from "./CardCar";
import CarModal from "../../components/CarModal";
import { ContextModal } from "../../contexts/ModalContext";
import { Button } from "@chakra-ui/button";

export default function Profile() {
  const user = useUserContext().user;
  const { onOpenLogin } = useContext(ContextModal);
  const cars = [
    {
      id: 1,
      isActive: true,
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
      isActive: false,
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
      isActive: true,
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
      id: 4,
      isActive: false,
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
      id: 5,
      isActive: false,
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
      isActive: true,
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
      isActive: true,
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
      isActive: true,
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
      id: 4,
      isActive: true,
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
      id: 5,
      isActive: true,
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

  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 34;
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="bg-grey-300">
        <Header />
        <div className="h-96 mt-20 bg-brand-400" />
        <section className="max-w-7xl mx-auto bg-whiteFixed p-10 rounded -mt-60">
          <img
            src="https://images.stylight.net/image/upload/t_web_post_500x667/q_auto,f_auto/post-c798e472ed3fa9d95f35a0aa8a04c5410f22ca7062fd77278b8fe97c.jpg"
            alt=""
            className="h-28 w-28 rounded-full object-cover"
          />
          <strong className="inline-block my-6 text-xl text-grey-1000">
            {user.name}
          </strong>
          <span className="inline-block px-2 py-1 ml-2 rounded bg-brand-100 text-sm text-brand-300">
            Anúnciante
          </span>
          <p className="text-grey-800">{user.description}</p>
          <Button
            className="text-brand-400 font-semibold mt-10 px-6 py-3 border border-brand-400 rounded"
            onClick={onOpenLogin}
          >
            Criar Anúncio
          </Button>
        </section>

        <section className="mt-20 px-4 tablet::px-16">
          {user.isAdvertiser && (
            <h2 className="text-xl font-semibold text-grey-1000 mb-16">
              Anúncios
            </h2>
          )}
          <ul className="flex overflow-x-scroll overflow-y-hidden tablet:overflow-x-hidden  tablet:grid tablet:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-12">
            {cars.map((car, index) => {
              return <CardCar key={index} car={car} />;
            })}
          </ul>
        </section>

        <div className="mt-14 font-semibold flex flex-col items-center">
          <div className="text-grey-700 ">
            <span className="text-grey-800">{currentPage}</span>
            <span className="mx-1">de</span>
            <span>{totalPage}</span>
          </div>

          <button
            type="button"
            onClick={handleNextPage}
            className="text-brand-400 mt-4"
          >
            Seguinte {`>`}
          </button>
        </div>
        <Footer />
      </div>
      <CarModal />
    </>
  );
}
