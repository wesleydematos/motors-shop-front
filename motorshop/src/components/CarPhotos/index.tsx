import car from "../../assets/car.png";

export default function CarPhoto() {
  return (
    <>
      <div className="w-28 h-28 bg-grey-400 rounded flex items-center justify-center">
        <img src={car} alt="Car View" className="w-[5.5rem] h-14" />
      </div>
    </>
  );
}
