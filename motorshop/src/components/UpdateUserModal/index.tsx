import { useUserContext } from "../../contexts/User";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iUserUpdateRequest } from "../../contexts/User/types";
import { UpdateUserSchema } from "../../schemas/updateUserSchema";
import { IoMdAlert } from "react-icons/io";

export default function UpdateUserModal() {
  const { setOnUserUpdateMod, updateUser, deleteUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserUpdateRequest>({
    resolver: yupResolver(UpdateUserSchema),
  });

  return (
    <div className="h-full top-0 left-0 z-30 fixed bg-black-opacity-30 w-screen">
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex flex-col justify-between bg-whiteFixed rounded-md mt-24 min-h-[18rem] w-72 mobile:w-96 tablet:w-4/6 desktop:w-1/3">
          <div className="flex justify-between">
            <h3 className="font-['Lexend, sans-serif'] font-medium p-6">
              Editar perfil
            </h3>
            <p
              onClick={() => setOnUserUpdateMod(false)}
              className="font-['Inter, sans-serif'] text-grey-700 p-6 cursor-pointer"
            >
              X
            </p>
          </div>
          <div className="px-6">
            <form onSubmit={handleSubmit(updateUser)}>
              <p className="font-medium mb-5">Informações pessoais</p>

              <div className="flex flex-col">
                <label className="text-sm mb-2 font-medium" htmlFor="name">
                  Nome
                  {errors.name && (
                    <div className="flex flex-row text-alert-300 gap-2 text-center">
                      <IoMdAlert />
                      <p>{errors.name.message}</p>
                    </div>
                  )}
                </label>
                <input
                  className={`text-base mb-4 rounded`}
                  type="text"
                  id="name"
                  placeholder="Samuel Leão"
                  {...register("name")}
                />

                <label className="text-sm mb-2 font-medium" htmlFor="email">
                  Email
                  {errors.email && (
                    <div className="flex flex-row text-alert-300 gap-2 text-center">
                      <IoMdAlert />
                      <p>{errors.email.message}</p>
                    </div>
                  )}
                </label>
                <input
                  className={`text-base mb-4 rounded`}
                  type="text"
                  id="email"
                  placeholder="samuel@mail.com"
                  {...register("email")}
                />

                <label className="text-sm mb-2 font-medium" htmlFor="cpf">
                  CPF
                  {errors.cpf && (
                    <div className="flex flex-row text-alert-300 gap-2 text-center">
                      <IoMdAlert />
                      <p>{errors.cpf.message}</p>
                    </div>
                  )}
                </label>
                <input
                  className={`text-base mb-4 rounded`}
                  type="text"
                  id="cpf"
                  placeholder="900.880.090-00"
                  {...register("cpf")}
                />

                <label className="text-sm mb-2 font-medium" htmlFor="number">
                  Celular
                  {errors.number && (
                    <div className="flex flex-row text-alert-300 gap-2 text-center">
                      <IoMdAlert />
                      <p>{errors.number.message}</p>
                    </div>
                  )}
                </label>
                <input
                  className={`text-base mb-4 rounded`}
                  type="text"
                  id="number"
                  placeholder="DDD + Numero, apenas os números"
                  {...register("number")}
                />

                <label className="text-sm mb-2 font-medium" htmlFor="dateBirth">
                  Data de Nascimento
                  {errors.dateBirth && (
                    <div className="flex flex-row text-alert-300 gap-2 text-center">
                      <IoMdAlert />
                      <p>{errors.dateBirth.message}</p>
                    </div>
                  )}
                </label>
                <input
                  className={`text-base mb-4 rounded`}
                  type="text"
                  id="dateBirth"
                  placeholder="25/12/99"
                  {...register("dateBirth")}
                />

                <label
                  className="text-sm mb-2 font-medium"
                  htmlFor="description"
                >
                  Descrição
                  {errors.description && (
                    <div className="flex flex-row text-alert-300 gap-2 text-center">
                      <IoMdAlert />
                      <p>{errors.description.message}</p>
                    </div>
                  )}
                </label>
                <input
                  className={`text-base mb-4 rounded`}
                  type="text"
                  id="description"
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  {...register("description")}
                />
              </div>
              <div className="flex justify-between tablet:justify-end mb-6 w-full gap-1 tablet:gap-3">
                <p
                  onClick={() => setOnUserUpdateMod(false)}
                  className="w-32 h-9 font-['Inter, sans-serif'] text-[0.7rem] mobile:text-[1rem] rounded font-semibold hover:text-whiteFixed bg-grey-500 hover:bg-grey-800 flex justify-center items-center"
                >
                  Cancelar
                </p>
                <button
                  type="button"
                  onClick={() => deleteUser()}
                  className="w-32 mobile:w-[9rem] h-9 font-['Inter, sans-serif'] text-[0.7rem] mobile:text-[1rem] rounded font-semibold text-alert-300 bg-alert-200 hover:bg-alert-200 flex justify-center items-center"
                >
                  Excluir Perfil
                </button>
                <button
                  type="submit"
                  className="w-32 mobile:w-[9rem] h-9 font-['Inter, sans-serif'] text-[0.7rem] mobile:text-[1rem] rounded font-semibold text-whiteFixed bg-brand-200 hover:bg-brand-300 flex justify-center items-center"
                >
                  Salvar alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
