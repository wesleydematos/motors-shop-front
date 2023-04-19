import * as yup from "yup";

const regexRemoveSpecialCharacters = /[^a-zA-Z0-9 ]/g;
const regexOnlyNumber = /\D/g;

export const RegisterSchema = yup.object({
  name: yup
    .string()
    .min(3, "Mínime de 3 cáracteres!")
    .max(26, "Máximo de 26 carácteres!")
    .trim()
    .required("Nome é obrigatório!"),
  email: yup
    .string()
    .email()
    .min(6, "Mínimo de 6 cáracteres!")
    .max(72, "Máximo de 72 carácteres!")
    .trim()
    .required("Email é obrigatório!"),
  cpf: yup
    .string()
    .length(11)
    .trim()
    .required("CPF é obrigatório!")
    .transform((value: string) =>
      value.replace(regexRemoveSpecialCharacters, "")
    ),
  phoneNumber: yup
    .string()
    .length(11)
    .trim()
    .required("Número de celular é obrigatório!")
    .transform((value: string) => value.replace(regexOnlyNumber, "")),
  dateBirth: yup
    .string()
    .length(6)
    .trim()
    .required("Data de aniversário é obrigatória!")
    .transform((value: string) => value.replace(regexOnlyNumber, "")),
  description: yup
    .string()
    .min(1, "Descrição muito curta!")
    .max(900, "Máximo de 900 carácteres!")
    .trim()
    .required("Descricção é obrigatória!"),
  zip_code: yup.string().length(9).trim().required("CEP é obrigatório!"),
  state: yup
    .string()
    .min(2, "Mínimo de 2 carácteres!")
    .required("Estado é obrigatório!"),
  city: yup
    .string()
    .max(26, "Máximo de 26 carácteres!")
    .min(3, "Mínimo de 3 carácteres!")
    .trim()
    .required("Cidade é obrigatória!"),
  street: yup
    .string()
    .max(26, "Máximo de 26 carácteres!")
    .min(3, "Mínimo de 3 carácteres!")
    .trim()
    .required("Rua é obrigatória!"),
  number: yup
    .string()
    .max(11, "Máximo de 11 carácteres!")
    .min(1, "Mínimo de 1 carácteres!")
    .trim()
    .required("Número é obrigatório!"),
  complement: yup
    .string()
    .max(26, "Máximo de 26 carácteres!")
    .min(3, "Mínimo de 3 carácteres!")
    .trim()
    .required("Complemento é obrigatório!"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 carácteres!")
    .max(72, "Máximo de 72 carácteres!")
    .trim()
    .required("Senha é obrigatória"),
  passwordConfirmation: yup
    .string()
    .required("Confirmação de senha é obrigatória!")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais!"),
});
