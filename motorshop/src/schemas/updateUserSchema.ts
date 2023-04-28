import * as yup from "yup";

const regexRemoveSpecialCharacters = /[^a-zA-Z0-9 ]/g;
const regexOnlyNumber = /\D/g;

export const UpdateUserSchema = yup.object({
  name: yup.string().trim(),
  email: yup.string().email().trim(),
  cpf: yup
    .string()
    .trim()
    .transform((value: string) =>
      value.replace(regexRemoveSpecialCharacters, "")
    ),
  phoneNumber: yup
    .string()
    .trim()
    .transform((value: string) => value.replace(regexOnlyNumber, "")),
  dateBirth: yup
    .string()
    .trim()
    .transform((value: string) => value.replace(regexOnlyNumber, "")),
  description: yup.string().trim(),
});
