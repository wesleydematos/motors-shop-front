import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserContext } from "../../contexts/User";
import { RegisterSchema } from "../../schemas/registerSchema";
import { IoMdAlert } from "react-icons/io";
import { iRegister } from "../../contexts/User/types";
import ModalRegister from "../../components/ModalRegister";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({ resolver: yupResolver(RegisterSchema) });

  const { isAdvertiser, setIsAdvertiser, handleRegister, isRegister } =
    useUserContext();

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-grey-300">
        {isRegister && <ModalRegister />}
        <div>
          <Header />
        </div>
        <main className="mt-32 flex flex-col">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="font-['Inter, sans-serif'] felx flex-col w-11/12 tablet:w-2/4 laptop:w-1/4 py-11 px-7 self-center bg-grey-100"
          >
            <h1 className="font-['Lexend, sans-serif'] text-2xl font-medium mb-8">
              Cadastro
            </h1>

            <p className="font-medium mb-7">Informações pessoais</p>

            <div className="flex flex-col">
              <label className="text-sm mb-2 font-medium" htmlFor="name">
                Nome{" "}
                {errors.name && (
                  <div className="flex flex-row text-alert-300 gap-2 text-center">
                    <IoMdAlert />
                    <p>{errors.name.message}</p>
                  </div>
                )}
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="name"
                placeholder="Ex: Vagner Love"
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
                type="email"
                id="email"
                placeholder="Ex: example@mail.com"
                className={`text-base mb-4`}
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
                className={`text-base mb-4`}
                type="text"
                id="cpf"
                placeholder="Ex: 000.000.000-00"
                {...register("cpf")}
              />

              <label className="text-sm mb-2 font-medium" htmlFor="phoneNumber">
                Celular
                {errors.phoneNumber && (
                  <div className="flex flex-row text-alert-300 gap-2 text-center">
                    <IoMdAlert />
                    <p>{errors.phoneNumber.message}</p>
                  </div>
                )}
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="phoneNumber"
                placeholder="(DDD) 90000-0000"
                {...register("phoneNumber")}
              />

              <label className="text-sm mb-2 font-medium" htmlFor="dateBirth">
                Data de nascimento
                {errors.dateBirth && (
                  <div className="flex flex-row text-alert-300 gap-2 text-center">
                    <IoMdAlert />
                    <p>{errors.dateBirth.message}</p>
                  </div>
                )}
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="dateBirth"
                placeholder="00/00/00"
                {...register("dateBirth")}
              />

              <label className="text-sm mb-2 font-medium" htmlFor="description">
                Descrição
                {errors.description && (
                  <div className="flex flex-row text-alert-300 gap-2 text-center">
                    <IoMdAlert />
                    <p>{errors.description.message}</p>
                  </div>
                )}
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="description"
                placeholder="Digitar descrição"
                {...register("description")}
              />
            </div>

            <p className="font-medium my-7">Informações de endereço</p>

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
                Rua
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

            <div className="flex flex-col mb-7">
              <label htmlFor="typeUser" className="font-medium my-7">
                Tipo de conta
              </label>

              <div className="flex justify-evenly w-full gap-1">
                <p
                  onClick={() => {
                    setIsAdvertiser(false);
                  }}
                  className={`${
                    isAdvertiser
                      ? "border-2 border-grey-600"
                      : "bg-brand-400 text-whiteFixed"
                  } cursor-pointer text-center w-3/6 py-2.5 text-base font-semibold rounded`}
                >
                  Comprador
                </p>
                <p
                  onClick={() => {
                    setIsAdvertiser(true);
                  }}
                  className={`${
                    !isAdvertiser
                      ? "border-2 border-grey-600"
                      : "bg-brand-400 text-whiteFixed"
                  } cursor-pointer text-center w-3/6 py-2.5 text-base font-semibold rounded`}
                >
                  Anunciante
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-7">
              <label className="text-sm mb-2 font-medium" htmlFor="password">
                Senha
                {errors.password && (
                  <div className="flex flex-row text-alert-300 gap-2 text-center">
                    <IoMdAlert />
                    <p>{errors.password.message}</p>
                  </div>
                )}
              </label>
              <input
                className={`text-base mb-4`}
                type="password"
                id="password"
                placeholder="Digitar senha"
                {...register("password")}
              />

              <label
                className="text-sm mb-2 font-medium"
                htmlFor="passwordConf"
              >
                Confirmar senha
                {errors.passwordConfirmation && (
                  <div className="flex flex-row text-alert-300 gap-2 text-center">
                    <IoMdAlert />
                    <p>{errors.passwordConfirmation.message}</p>
                  </div>
                )}
              </label>
              <input
                className={`text-base mb-4`}
                type="password"
                id="passwordConf"
                placeholder="Digitar senha"
                {...register("passwordConfirmation")}
              />
            </div>

            <button
              type="submit"
              className="bg-brand-400 text-whiteFixed w-full text-base font-semibold h-12 rounded hover:bg-brand-300"
            >
              Finalizar Cadastro
            </button>
          </form>
        </main>
        <Footer />
      </div>
    </>
  );
}
