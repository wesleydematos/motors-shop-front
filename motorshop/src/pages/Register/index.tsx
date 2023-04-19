import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUserContext } from "../../contexts/User";

export default function Register() {
  const { isAdvertiser, setIsAdvertiser } = useUserContext();
  console.log(isAdvertiser);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-grey-300">
        <div>
          <Header />
        </div>
        <main className="mt-32 flex flex-col">
          <form className="font-['Inter, sans-serif'] felx flex-col w-11/12 tablet:w-2/4 laptop:w-1/4 py-11 px-7 self-center bg-grey-100">
            <h1 className="font-['Lexend, sans-serif'] text-2xl font-medium mb-8">
              Cadastro
            </h1>

            <p className="font-medium mb-7">Informações pessoais</p>

            <div className="flex flex-col">
              <label className="text-sm mb-2 font-medium" htmlFor="name">
                Nome
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="name"
                placeholder="Ex: Vagner Love"
              />

              <label className="text-sm mb-2 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ex: example@mail.com"
                className={`text-base mb-4`}
              />

              <label className="text-sm mb-2 font-medium" htmlFor="cpf">
                CPF
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="cpf"
                placeholder="Ex: 000.000.000-00"
              />

              <label className="text-sm mb-2 font-medium" htmlFor="phoneNumber">
                Celular
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="phoneNumber"
                placeholder="(DDD) 90000-0000"
              />

              <label className="text-sm mb-2 font-medium" htmlFor="dateBirth">
                Data de nascimento
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="dateBirth"
                placeholder="00/00/00"
              />

              <label className="text-sm mb-2 font-medium" htmlFor="description">
                Descrição
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="description"
                placeholder="Digitar descrição"
              />
            </div>

            <p className="font-medium my-7">Informações de endereço</p>

            <div className="flex flex-col">
              <label className="text-sm mb-2 font-medium" htmlFor="zipCode">
                CEP
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="zipCode"
                placeholder="00000-000"
              />

              <div className="flex justify-evenly w-full gap-1">
                <div className="flex flex-col w-3/6">
                  <label className="text-sm mb-2 font-medium" htmlFor="state">
                    Estado
                  </label>
                  <input
                    className={`text-base mb-4`}
                    type="text"
                    id="state"
                    placeholder="Digitar Estado"
                  />
                </div>

                <div className="flex flex-col w-3/6">
                  <label className="text-sm mb-2 font-medium" htmlFor="city">
                    Cidade
                  </label>
                  <input
                    className={`text-base mb-4`}
                    type="text"
                    id="city"
                    placeholder="Digitar Cidade"
                  />
                </div>
              </div>

              <label className="text-sm mb-2 font-medium" htmlFor="street">
                Rua
              </label>
              <input
                className={`text-base mb-4`}
                type="text"
                id="street"
                placeholder="Digitar rua"
              />

              <div className="flex justify-evenly w-full gap-1">
                <div className="flex flex-col w-3/6">
                  <label className="text-sm mb-2 font-medium" htmlFor="number">
                    Numero
                  </label>
                  <input
                    className={`text-base mb-4`}
                    type="text"
                    id="number"
                    placeholder="Digitar numero"
                  />
                </div>

                <div className="flex flex-col w-3/6">
                  <label
                    className="text-sm mb-2 font-medium"
                    htmlFor="complement"
                  >
                    Complemento
                  </label>
                  <input
                    className={`text-base mb-4`}
                    type="text"
                    id="complement"
                    placeholder="Ex: apartamento"
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
              </label>
              <input
                className={`text-base mb-4`}
                type="password"
                id="password"
                placeholder="Digitar senha"
              />

              <label
                className="text-sm mb-2 font-medium"
                htmlFor="passwordConf"
              >
                Confirmar senha
              </label>
              <input
                className={`text-base mb-4`}
                type="password"
                id="passwordConf"
                placeholder="Digitar senha"
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
