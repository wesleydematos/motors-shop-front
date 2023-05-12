import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { IoMdAlert } from "react-icons/io";
import Footer from "../../components/Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordEmailSchema } from "../../schemas/resetPasswordEmailSchema";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface IFormResetPassword {
  email: string;
}

export default function ResetPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormResetPassword>({
    resolver: yupResolver(resetPasswordEmailSchema),
  });

  const navigate = useNavigate();

  async function handleResetPassword(dataResetPassword: IFormResetPassword) {
    try {
      await api.patch("reset-password", dataResetPassword);
      navigate("/reset-password/new-password", { replace: true });
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
            Solicitar nova senha
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
          </div>

          <button
            type="submit"
            className="bg-brand-400 text-whiteFixed mt-5 h-12 w-full text-base font-semibold hover:bg-brand-300"
          >
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
