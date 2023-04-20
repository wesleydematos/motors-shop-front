import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  iLogin,
  iLoginResponse,
  iRegister,
  iUser,
  iUserContext,
  iUserContextProps,
} from "./types";

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser>({} as iUser);
  const [isAdvertiser, setIsAdvertiser] = useState(false);


  useEffect(() => {
    setUser({
      id: "1",
      name: "Diogo Steiner",
      email: "steiner@mail.com",
      cpf: "111.222.333-00",
      number: "21 9 9988-7755",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed quod minima maxime id amet sapiente quisquam, officia impedit. Veniam rem totam eligendi accusamus, aliquam et sit delectus numquam fugiat.",
      isActive: true,
      isAdvertiser: true,
      dateBirth: "140701",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }, []);

  // async function getMyProfile() {
  //   const userId = JSON.parse(localStorage.getItem("@userID-MotorsShop") + "");
  //   const token = localStorage.getItem("@Token-MotorsShop");
  //   api.defaults.headers.common.authorization = `Bearer ${token}`;

  async function handleRegister(data: iRegister) {
    const userData = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      number: data.phoneNumber,
      dateBirth: data.dateBirth,
      description: data.description,
      password: data.password,
      isAdvertiser: isAdvertiser,
    };


    const addressData = {
      zip_code: data.zip_code,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      complement: data.complement,
    };

    const requestData = { ...userData, address: { ...addressData } };

    try {
      await api.post("/users", requestData);
      toast.success("Conta criada com sucesso");
      navigate("/login");
    } catch (error) {
      toast.error("Falha ao criar a conta");
      console.log(error);
    }
  }

  async function handleLogin(body: iLogin) {
    try {
      const { data } = await api.post<iLoginResponse>("/login", body);

      api.defaults.headers.common.authorization = `Bearer ${data.token}`;

      localStorage.setItem("@Token-MotorsShop", data.token);
      localStorage.setItem("@userID-MotorsShop", JSON.stringify(data.user.id));

      setUser(data.user);

      toast.success("Login efetuado com sucesso!");
      navigate("/profile");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Erro ao efetuar o login!");
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        isAdvertiser,
        setIsAdvertiser,
        handleRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
