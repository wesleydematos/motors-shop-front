import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/User";

export default function ModalRegister() {
  const { setIsRegister } = useUserContext();

  return (
    <div className="h-full top-0 left-0 z-30 fixed bg-black-opacity-30 w-screen">
      <div className="flex flex-col items-center w-full h-full">
        <div className="bg-whiteFixed rounded-md mt-24 h-72 w-72 mobile:w-96 tablet:w-4/6 desktop:w-1/3">
          <div className="flex justify-between">
            <h3 className="font-['Lexend, sans-serif'] font-medium p-6">
              Sucesso!
            </h3>
            <p
              onClick={() => setIsRegister(false)}
              className="font-['Inter, sans-serif'] text-grey-700 p-6 cursor-pointer"
            >
              X
            </p>
          </div>
          <div className="px-6">
            <h3 className="font-['Lexend, sans-serif'] font-medium mobile:pt-6">
              Sua conta foi criada com sucesso!
            </h3>
            <p className="font-['Inter, sans-serif'] pt-4 pb-4 mobile:pb-6 text-grey-900">
              Agora você poderá ver seus negócios crescendo em grande escala.
            </p>
            <div className="w-32 h-9 font-['Inter, sans-serif'] rounded font-semibold text-whiteFixed bg-brand-300 flex justify-center items-center">
              <Link to="/login" onClick={() => setIsRegister(false)}>
                Ir para o login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
