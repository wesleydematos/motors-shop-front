import * as yup from "yup";

export const AnnouncementSchema = yup.object({
  title: yup.string().required(),
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().required(),
  fuel: yup.string().required(),
  color: yup.string().required(),
  milleage: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  coverUrl: yup.string().required(),
  bellowFipe: yup.boolean(),
  fipe: yup.number().required(),
  photos: yup.string().required(),
});
