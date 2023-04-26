import CarCard from "../../components/CarCard";
import { useAnnouncementContext } from "../../contexts/Announcement";

export default function CarShowcase() {
  const { cars } = useAnnouncementContext();

  if (!cars.length) {
    return <div>Nenhum carro foi anunciado ainda! :/</div>;
  }

  return (
    <ul className="flex h-[500px] gap-6 mt-15 overflow-x-auto laptop:flex-wrap laptop:w-full laptop:h-max laptop:overflow-hidden">
      {cars.map((car) => (
        <CarCard car={car} key={car.id}></CarCard>
      ))}
    </ul>
  );
}
