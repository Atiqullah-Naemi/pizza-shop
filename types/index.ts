export interface Product {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  ingredients: { label: string; value: string }[];
}

export interface OrderProduct {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  quantity: number;
  ingredients: { label: string; value: string }[];
}
