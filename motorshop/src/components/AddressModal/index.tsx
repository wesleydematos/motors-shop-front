import { useUserContext } from "../../contexts/User";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iUpdateAddressRequest } from "../../contexts/User/types";
import { UpdateAddressSchema } from "../../schemas/addressSchema";
import { IoMdAlert } from "react-icons/io";

export default function AddressModal() {
  const { setOnAddressMod, updateAddress } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateAddressRequest>({
    resolver: yupResolver(UpdateAddressSchema),
  });

  return (
    <div className="h-full top-0 left-0 z-30 fixed bg-black-opacity-30 w-screen">
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex flex-col justify-between bg-whiteFixed rounded-md mt-24 min-h-[18rem] w-72 mobile:w-96 tablet:w-4/6 desktop:w-1/3">
          <div className="flex justify-between">
            <h3 className="font-['Lexend, sans-serif'] font-medium p-6">
              Editar endereço
            </h3>
            <p
              onClick={() => setOnAddressMod(false)}
              className="font-['Inter, sans-serif'] text-grey-700 p-6 cursor-pointer"
            >
              X
            </p>
          </div>
          <div className="px-6">
            <form onSubmit={handleSubmit(updateAddress)}>
              <p className="font-medium mb-5">Informações de endereço</p>

              <div className="flex flex-col">
                <label className="text-sm mb-2 font-medium" htmlFor="zipCode">
                  CEP
                  {errors.zip_code && (
                    <div className="flex flex-row text-alert-300 gap-2 text-center">
                      <IoMdAlert />
                      <p>{errors.zip_code.message}</p>
                    </div>
                  )}
                </label>
                <input
                  className={`text-base mb-4`}
                  type="text"
                  id="zipCode"
                  placeholder="00000-000"
                  {...register("zip_code")}
                />

                <div className="flex justify-evenly w-full gap-1">
                  <div className="flex flex-col w-3/6">
                    <label
                      className={`text-sm  ${
                        errors.city && errors.state
                          ? "mb-2"
                          : errors.city && !errors.state
                          ? "mb-7"
                          : "mb-2"
                      }`}
                      htmlFor="state"
                    >
                      Estado
                      {errors.state && (
                        <div className="flex flex-row text-alert-300 gap-2 text-center">
                          <IoMdAlert />
                          <p>{errors.state.message}</p>
                        </div>
                      )}
                    </label>
                    <input
                      className={`text-base mb-4`}
                      type="text"
                      id="state"
                      placeholder="Ex: SP"
                      maxLength={2}
                      {...register("state")}
                    />
                  </div>

                  <div className="flex flex-col w-3/6">
                    <label
                      className={`text-sm  ${
                        errors.state && errors.city
                          ? "mb-2"
                          : errors.state && !errors.city
                          ? "mb-7"
                          : "mb-2"
                      }`}
                      htmlFor="city"
                    >
                      Cidade
                      {errors.city && (
                        <div className="flex flex-row text-alert-300 gap-2 text-center">
                          <IoMdAlert />
                          <p>{errors.city.message}</p>
                        </div>
                      )}
                    </label>
                    <input
                      className={`text-base mb-4`}
                      type="text"
                      id="city"
                      placeholder="Ex: São Paulo"
                      {...register("city")}
                    />
                  </div>
                </div>

                <label className="text-sm mb-2 font-medium" htmlFor="street">
                  Rua{" "}
                  {errors.street && (
                    <div className="flex flex-row text-alert-300 gap-2 text-center">
                      <IoMdAlert />
                      <p>{errors.street.message}</p>
                    </div>
                  )}
                </label>
                <input
                  className={`text-base mb-4`}
                  type="text"
                  id="street"
                  placeholder="Digitar rua"
                  {...register("street")}
                />

                <div className="flex justify-evenly w-full gap-1">
                  <div className="flex flex-col w-3/6">
                    <label
                      className={`text-sm  ${
                        errors.number && errors.complement
                          ? "mb-2"
                          : errors.complement && !errors.number
                          ? "mb-7"
                          : "mb-2"
                      }`}
                      htmlFor="number"
                    >
                      Numero
                      {errors.number && (
                        <div className="flex flex-row text-alert-300 gap-2 text-center">
                          <IoMdAlert />
                          <p>{errors.number.message}</p>
                        </div>
                      )}
                    </label>
                    <input
                      className={`text-base mb-4`}
                      type="text"
                      id="number"
                      placeholder="Digitar numero"
                      {...register("number")}
                    />
                  </div>

                  <div className="flex flex-col w-3/6">
                    <label
                      className={`text-sm  ${
                        errors.complement && errors.number
                          ? "mb-2"
                          : errors.number && !errors.complement
                          ? "mb-7"
                          : "mb-2"
                      }`}
                      htmlFor="complement"
                    >
                      Complemento
                      {errors.complement && (
                        <div className="flex flex-row text-alert-300 gap-2 text-center">
                          <IoMdAlert />
                          <p>{errors.complement.message}</p>
                        </div>
                      )}
                    </label>
                    <input
                      className={`text-base mb-4`}
                      type="text"
                      id="complement"
                      placeholder="Ex: apartamento"
                      {...register("complement")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between tablet:justify-end mb-6 w-full gap-1 tablet:gap-3">
                <p
                  onClick={() => setOnAddressMod(false)}
                  className="w-32 h-9 font-['Inter, sans-serif'] text-[0.7rem] mobile:text-[1rem] rounded font-semibold hover:text-whiteFixed bg-grey-500 hover:bg-grey-800 flex justify-center items-center"
                >
                  Cancelar
                </p>
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
