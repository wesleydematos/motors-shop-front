export default function CarCard({ car }: any) {
  return (
    <>
      <li className="w-[370px]">
        <div className="flex justify-center w-full bg-grey-500 h-40 ">
          <img src={car.img} alt={car.name} className="w-64" />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h2 className="font-semibold font-lexend text-xl">{car.name}</h2>
          <p className="text-grey-800 w-4/5 font-inter">{car.description}</p>
          <p className="font-inter font-medium text-grey-900">{car.postedBy}</p>
          <div className="flex justify-between px-1">
            <div className="flex gap-2">
              <span className="bg-brand-100 text-brand-400 font-medium p-2 text-center rounded">{`${car.kilometers} KM`}</span>
              <span className="bg-brand-100 text-brand-400 font-medium p-2 text-center rounded">
                {car.year}
              </span>
            </div>
            <span className="font-semibold text-xl font-lexend">{`${new Intl.NumberFormat(
              "pt-BR",
              { style: "currency", currency: "brl" }
            ).format(car.price)}`}</span>
          </div>
        </div>
      </li>
    </>
  );
}
