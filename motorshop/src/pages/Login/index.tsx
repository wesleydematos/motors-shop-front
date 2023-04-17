import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUserContext } from "../../contexts/User";
import { iLogin } from "../../contexts/User/types";
import { LoginSchema } from "../../schemas/loginSchema";
import { IoMdAlert } from "react-icons/io";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({ resolver: yupResolver(LoginSchema) });

  const { handleLogin } = useUserContext();

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-grey-300">
        <div>
          <Header />
        </div>
        <main className="mt-32 flex flex-col ">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="font-['Inter, sans-serif'] felx flex-col w-11/12 tablet:w-1/4 py-11 px-7 self-center bg-grey-100"
          >
            <h1 className="font-['Lexend, sans-serif'] text-2xl font-medium mb-8">
              Login
            </h1>
            <div className="flex flex-col">
              <label htmlFor="user" className="text-sm mb-2 font-medium">
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
                id="user"
                placeholder="Digitar email"
                className={`text-base mb-7 ${
                  errors.email && "border-2 border-alert-300"
                }`}
                {...register("email")}
              />

              <label htmlFor="password" className="text-sm mb-2 font-medium">
                Senha
                {errors.password && (
                  <div className="flex flex-row text-alert-300 gap-2 text-center">
                    <IoMdAlert />
                    <p>{errors.password.message}</p>
                  </div>
                )}
              </label>

              <input
                type="password"
                id="password"
                placeholder="Digitar senha"
                className={`text-base ${
                  errors.password && "border-2 border-alert-300"
                }`}
                {...register("password")}
              />
            </div>
            <p className="mt-2 text-right text-grey-900 cursor-pointer hover:text-grey-1000">
              Esqueci minha senha
            </p>
            <button
              type="submit"
              className="bg-brand-400 text-whiteFixed mt-5 h-12 w-full text-base font-semibold"
            >
              Entrar
            </button>
            <p className="mt-7 mb-7 text-center text-grey-900">
              Ainda não possui conta?
            </p>
            <div className="w-full py-2.5 border-2 border-grey-600 text-center text-base font-semibold">
              <Link to="/register">Cadastrar</Link>
            </div>
          </form>
        </main>
        <Footer />
      </div>
    </>
  );
}
