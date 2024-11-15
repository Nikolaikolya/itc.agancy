import { IProduct, SortedActionsType } from '@/types';

export const sortableTypes: SortedActionsType = {
  desc: (a: IProduct, b: IProduct): number => a.price - b.price,
  asc: (a: IProduct, b: IProduct): number => b.price - a.price,
  new: (a: IProduct, b: IProduct): number => Number(b.isNew) - Number(a.isNew),
  popular: (a: IProduct, b: IProduct): number => a.price - b.price,
};
