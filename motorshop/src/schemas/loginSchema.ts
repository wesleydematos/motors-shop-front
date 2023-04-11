import * as yup from "yup";

export const LoginSchema = yup.object({
  user: yup.string().required("Nome do usuário é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});
