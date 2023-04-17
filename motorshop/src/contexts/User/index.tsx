import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  iLogin,
  iLoginResponse,
  iUser,
  iUserContext,
  iUserContextProps,
} from "./types";

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser>({} as iUser);

  // async function getMyProfile() {
  //   const userId = JSON.parse(localStorage.getItem("@userID-MotorsShop") + "");
  //   const token = localStorage.getItem("@Token-MotorsShop");
  //   api.defaults.headers.common.authorization = `Bearer ${token}`;

  //   try {
  //     const { data } = await api.get<iUser>(`/users/${userId}`);
  //     setUser(data);
  //   } catch (error) {
  //     localStorage.clear();

  //     navigate("/login");
  //   }
  // }

  async function handleLogin(body: iLogin) {
    try {
      const { data } = await api.post<iLoginResponse>("/login", body);

      api.defaults.headers.common.authorization = `Bearer ${data.token}`;

      localStorage.setItem("@Token-MotorsShop", data.token);
      localStorage.setItem("@userID-MotorsShop", JSON.stringify(data.user.id));

      setUser(data.user);

      toast.success("Login efetuado com sucesso!");
      // await getMyProfile();
      navigate("/profile");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Erro ao efetuar o login!");
    }
  }

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
