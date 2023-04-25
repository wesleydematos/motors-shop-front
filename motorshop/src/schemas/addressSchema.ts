import * as yup from "yup";

export const UpdateAddressSchema = yup.object({
  zip_code: yup.string().trim(),
  state: yup.string(),
  city: yup.string().max(26, "Max 26 char!").trim(),
  street: yup.string().max(26, "Max 26 char!").trim(),
  number: yup.string().max(11, "Max 11 char!").trim(),
  complement: yup.string().max(26, "Max 26 char!").trim(),
});
