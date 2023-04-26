import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordNewPasswordSchema } from "../../schemas/resetPasswordNewPasswordSchema";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { IoMdAlert } from "react-icons/io";
import Footer from "../../components/Footer";

interface IFormResetPasswordNewPassword {
  password: string;
}

export default function ResetPasswordNewPassword() {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("reset");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormResetPasswordNewPassword>({
    resolver: yupResolver(resetPasswordNewPasswordSchema),
  });

  const navigate = useNavigate();

  async function handleResetPassword(
    dataResetPassword: IFormResetPasswordNewPassword
  ) {
    try {
      await api.patch(
        `reset-password/new-password/${token}`,
        dataResetPassword
      );
      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-grey-300">
      <div>
        <Header />
      </div>
      <main className="mt-32 flex flex-col ">
        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="font-['Inter, sans-serif'] felx flex-col w-11/12 tablet:w-2/4 desktop:w-1/4 py-11 px-7 self-center bg-grey-100"
        >
          <h1 className="font-['Lexend, sans-serif'] text-2xl font-medium mb-8">
            Cadastrar nova senha
          </h1>
          <div className="flex flex-col">
            <label htmlFor="user" className="text-sm mb-2 font-medium">
              Nova Senha
              {errors.password && (
                <div className="flex flex-row text-alert-300 gap-2 text-center">
                  <IoMdAlert />
                  <p>{errors.password.message}</p>
                </div>
              )}
            </label>
            <input
              type="password"
              id="user"
              placeholder="Digitar email"
              className={`text-base mb-7 ${
                errors.password && "border-2 border-alert-300"
              }`}
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="bg-brand-400 text-whiteFixed mt-5 h-12 w-full text-base font-semibold hover:bg-brand-300"
          >
            Alterar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
