import * as yup from "yup";

const regexRemoveSpecialCharacters = /[^a-zA-Z0-9 ]/g;
const regexOnlyNumber = /\D/g;

export const RegisterSchema = yup.object({
  name: yup
    .string()
    .min(3, "Min 3 char!")
    .max(26, "Max 3 char!")
    .trim()
    .required("Nome obrigatório!"),
  email: yup
    .string()
    .email()
    .min(6, "Min 6 char!")
    .max(72, "Max 72 char!")
    .trim()
    .required("Email obrigatório!"),
  cpf: yup
    .string()
    .length(11, "11 char!")
    .trim()
    .required("CPF obrigatório!")
    .transform((value: string) =>
      value.replace(regexRemoveSpecialCharacters, "")
    ),
  phoneNumber: yup
    .string()
    .length(11, "11 char!")
    .trim()
    .required("Obrigatório!")
    .transform((value: string) => value.replace(regexOnlyNumber, "")),
  dateBirth: yup
    .string()
    .length(6, "6 char!")
    .trim()
    .required("Obrigatório!")
    .transform((value: string) => value.replace(regexOnlyNumber, "")),
  description: yup
    .string()
    .min(1, "Muito curta!")
    .max(900, "Max 900 char!")
    .trim()
    .required("Obrigatório!"),
  zip_code: yup.string().length(9).trim().required("Obrigatório!"),
  state: yup.string().min(2, "Min 2 char!").required("Obrigatório!"),
  city: yup
    .string()
    .max(26, "Min 26 char!")
    .min(3, "Min de 3 char!")
    .trim()
    .required("Cidade é obrigatória!"),
  street: yup
    .string()
    .max(26, "Max de 26 char!")
    .min(3, "Min de 3 char!")
    .trim()
    .required("Obrigatório!"),
  number: yup
    .string()
    .max(11, "Max de 11 char!")
    .min(1, "Min de 1 char!")
    .trim()
    .required("Obrigatório!"),
  complement: yup
    .string()
    .max(26, "Max de 26 char!")
    .min(3, "Min de 3 char!")
    .trim()
    .required("Obrigatório!"),
  password: yup
    .string()
    .min(6, "Min de 6 char!")
    .max(72, "Max de 72 char!")
    .trim()
    .required("Obrigatório"),
  passwordConfirmation: yup
    .string()
    .required("Obrigatório!")
    .oneOf([yup.ref("password")], "Senhas devem ser iguais!"),
});
