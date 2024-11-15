import { FilteredActionsType, IProduct } from '@/types';

export const filteredActions: FilteredActionsType = {
  in_stock: (item: IProduct) => item.inStock > 0,
  news: (item: IProduct) => item.isNew,
  vip: (item: IProduct) => item.vip,
  sale: (item: IProduct) => item.sale,
  contract: (item: IProduct) => item.contract,
};
