export interface iCar {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  mileage: string;
  price: number;
  color: string;
  description: string;
  coverUrl: string;
  createdAt: string;
  fipe: string;
  isActive: boolean;
  updatedAt: string;
  user: string;
  photos: {
    id: string;
    photourl: string;
  }[];
  comments: {
    id: string;
    commenttext: string;
    createdAt: string;
    updatedAt: string;
  }[];
}
