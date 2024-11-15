import { IProduct } from '@/types/product.ts';

export type SortedType = 'new' | 'asc' | 'desc' | 'popular';

export interface ISortedType {
  id: number;
  label: string;
  type: SortedType;
  selected: boolean;
}
export type SortedActionsType = Record<
  SortedType,
  (a: IProduct, b: IProduct) => number
>;
