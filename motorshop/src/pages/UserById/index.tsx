import { useContext, useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUserContext } from "../../contexts/User";
import CardCar from "../UserById/CardCar";
import CarModal from "../../components/CarModal";
import CarEditModal from "../../components/CarEditModal";
import { ContextModal } from "../../contexts/ModalContext";
import { Button } from "@chakra-ui/button";
import AddressModal from "../../components/AddressModal";
import UpdateUserModal from "../../components/UpdateUserModal";
import { api } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { IVehicleResponse } from "../../contexts/User/types";
import { AnnouncementContext } from "../../contexts/Announcement";

export default function UserById() {
  const { onAddressMod, setOnAddressMod, onUserUpdateMod, setOnUserUpdateMod } =
    useUserContext();
  const { onOpenLogin, onCloseLogin } =
    useContext(ContextModal);

  const {reload} = useContext(AnnouncementContext)

  const { userId } = useParams();

  const [cars, setCars] = useState([] as IVehicleResponse[]);
  const [user, setUser] = useState(undefined as any);

  const userLogged = localStorage.getItem("@userID-MotorsShop")?.slice(1, -1);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 34;
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  async function getUser() {
    try {
      await api.get(`/users/${userId}`).then((response) => {
        setCars(response.data.vehicles);
        setUser(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {   
    getUser();
  }, [onCloseLogin]);

  useEffect(() => {
    getUser();
  }, [reload]);

  if (!user) {
    return (
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <div />
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl">Usuário não encontrado!</h1>
          <div className="px-3 h-9 font-['Inter, sans-serif'] rounded font-semibold text-whiteFixed bg-brand-300 flex justify-center items-center">
            <Link to="/"> Voltar para página inicial</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      {onUserUpdateMod && <UpdateUserModal />}
      {onAddressMod && <AddressModal />}
      <div className="bg-grey-300">
        <Header />
        <div className="h-96 mt-20 bg-brand-400" />
        <section
          className={"max-w-7xl mx-auto bg-whiteFixed p-10 rounded -mt-60"}
        >
          <img
            src="https://images.stylight.net/image/upload/t_web_post_500x667/q_auto,f_auto/post-c798e472ed3fa9d95f35a0aa8a04c5410f22ca7062fd77278b8fe97c.jpg"
            alt={user.name}
            className="h-28 w-28 rounded-full object-cover"
          />
          <strong className="inline-block my-6 text-xl text-grey-1000">
            {user.name}
          </strong>
          <span className="inline-block px-2 py-1 ml-2 rounded bg-brand-100 text-sm text-brand-300">
            Anúnciante
          </span>
          <p className="text-grey-800">{user.description}</p>
          <div
            className={`flex items-center gap-2 flex-wrap ${
              userId != userLogged ? "hidden" : "flex"
            }`}
          >
            <Button
              className="text-brand-400 font-semibold mt-10 px-6 py-3 border border-brand-400 rounded bg-whiteFixed"
              onClick={onOpenLogin}
            >
              Criar Anúncio
            </Button>

            <button
              onClick={() => setOnUserUpdateMod(true)}
              className="text-brand-400 font-semibold h-10 mt-10 px-6  border border-brand-400 rounded"
            >
              Editar perfil
            </button>

            <button
              onClick={() => setOnAddressMod(true)}
              className="text-brand-400 font-semibold h-10 mt-10 px-6  border border-brand-400 rounded"
            >
              Editar endereço
            </button>
          </div>
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
      <CarEditModal />
    </>
  );
}
