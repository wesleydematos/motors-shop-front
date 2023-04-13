import BannerHome from "../../components/BannerHome";
import CarCard from "../../components/CarCard";

export default function Home() {
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
  ];
  return (
    <>
      <BannerHome />
      {/* <ul className="flex gap-4">
        {cars.map((car) => (
          <CarCard car={car} key={car.id}></CarCard>
        ))}
      </ul> */}
    </>
  );
}
