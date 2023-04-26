import * as yup from "yup";

export const resetPasswordEmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido")
    .trim()
    .required("Informe o email da sua conta"),
});
