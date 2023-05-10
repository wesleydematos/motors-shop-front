import * as yup from "yup";

export const updateCommnetSchema = yup.object({
  commenttext: yup
    .string()
    .min(10, "Mínimo de 20 caracteres!")
    .max(200, "Máximo de 200 caracteres!")
    .trim()
    .required("Seu comentário não pode ser vazio!"),
});
