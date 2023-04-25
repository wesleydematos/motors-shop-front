import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  iLogin,
  iLoginResponse,
  iRegister,
  iUpdateAddressRequest,
  iUser,
  iUserContext,
  iUserContextProps,
} from "./types";

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser>({} as iUser);
  const [isAdvertiser, setIsAdvertiser] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [onAddressMod, setOnAddressMod] = useState(false);

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
      setIsRegister(true);
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

  function logout(): void {
    localStorage.clear();
    setUser({} as iUser);
    navigate("/");
  }

  async function updateAddress(body: iUpdateAddressRequest) {
    for (var item in body) {
      if (!!!body[item]) {
        delete body[item];
      }
    }

    if (!!!Object.keys(body).length) {
      toast.error("Insira algum campo para mudança!");
      return;
    }

    const token = localStorage.getItem("@Token-MotorsShop");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.patch("/address", body);
      toast.success("Endereço editado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível editar endereço!");
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
        setIsRegister,
        isRegister,
        logout,
        onAddressMod,
        setOnAddressMod,
        updateAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
