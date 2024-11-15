export interface IProduct {
  id: number;
  color: string;
  image: string;
  name: string;
  price: number;
  code: string;
  inStock: number;
  isNew: boolean;
  vip: boolean;
  contract: boolean;
  sale: boolean;
}

export interface ICartProduct {
  item: IProduct;
  counts: number;
  total: number;
}
