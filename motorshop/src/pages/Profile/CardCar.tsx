import { useContext, useState } from "react";
import { useUserContext } from "../../contexts/User";
import { ContextModal } from "../../contexts/ModalContext";
import { AnnouncementContext } from "../../contexts/Announcement";

interface ICardCarProps {
  car: {
    id: string;
    title: string;
    brand: string;
    model: string;
    year: number;
    fuel: string;
    color: string;
    mileage: number;
    price: number;
    description: string;
    coverUrl: string;
    bellowFipe: boolean;
    fipe: string;
    isActive: boolean;
    updatedAt: Date;
    createdAt: Date;
  };
}

export default function CardCar({ car }: ICardCarProps) {
  const user = useUserContext().user;

  const { onOpenEditCar } = useContext(ContextModal);

  const { setEditCar } = useContext(AnnouncementContext);

  const openModal = (id: string) => {
    onOpenEditCar();
    setEditCar(id);
    
  };

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

        <img src={car.coverUrl} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <strong className="inline-block mt-4 text-grey-1000">
          {car.title}
        </strong>
        <p className="my-4 text-grey-900 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
          {car.description}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="px-2 py-1 text-brand-300 bg-brand-100 text-sm font-medium">
            {car.mileage} KM
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
          onClick={() => openModal(car.id)}
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
