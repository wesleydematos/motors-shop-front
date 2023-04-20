import { useUserContext } from "../../contexts/User";

interface ICardCarProps {
  car: {
    img: string;
    name: string;
    description: string;
    postedBy: string;
    kilometers: number;
    year: number;
    price: number;
    isActive: boolean;
  };
}

export default function CardCar({ car }: ICardCarProps) {
  const user = useUserContext().user;

  return (
    <li className="w-[370px] flex-shrink-0 tablet:w-auto">
      <div className="h-40 relative">
        {!user.isAdvertiser && (
          <span
            className={`px-2 py-1 text-sm font-medium text-whiteFixed absolute top-3 left-4 ${
              car.isActive ? "bg-brand-400" : "bg-grey-700"
            }`}
          >
            {car.isActive ? "Ativo" : "Inativo"}
          </span>
        )}

        <img src={car.img} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <strong className="inline-block mt-4 text-grey-1000">{car.name}</strong>
        <p className="my-4 text-grey-900 text-sm">{car.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="px-2 py-1 text-brand-300 bg-brand-100 text-sm font-medium">
            {car.kilometers} KM
          </span>
          <span className="px-2 py-1 text-brand-300 bg-brand-100 text-sm font-medium ml-3">
            {car.year}
          </span>
        </div>
        <p className="text-grey-1000">
          {car.price.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
            minimumIntegerDigits: 2,
          })}
        </p>
      </div>
      <div className={`${!user.isAdvertiser && "hidden"} mt-4`}>
        <button
          type="button"
          className="px-4 py-1 text-sm border-[1px] rounded border-grey-1000"
        >
          Editar
        </button>
        <button
          type="button"
          className="px-4 py-1 text-sm border rounded border-grey-1000 ml-4"
        >
          Ver detalhes
        </button>
      </div>
    </li>
  );
}
