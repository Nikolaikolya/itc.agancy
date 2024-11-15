import { IProduct } from '@/types/product.ts';

export type FilteredType = 'news' | 'in_stock' | 'contract' | 'vip' | 'sale';

export interface IFilteredType {
  id: number;
  label: string;
  name: FilteredType;
  selected: boolean;
}

export type FilteredActionsType = Record<
  FilteredType,
  (el: IProduct) => boolean
>;
