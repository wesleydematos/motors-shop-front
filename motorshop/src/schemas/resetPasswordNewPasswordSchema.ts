import * as yup from "yup";

export const resetPasswordNewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Min de 6 char!")
    .max(72, "Max de 72 char!")
    .trim()
    .required("Informe sua nova senha"),
});
