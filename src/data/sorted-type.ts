import { ISortedType } from '@/types';

export const sortedTypes: ISortedType[] = [
  { id: 1, type: 'asc', label: 'Сначала дорогие', selected: true },
  { id: 2, type: 'desc', label: 'Сначала недорогие', selected: false },
  { id: 3, type: 'popular', label: 'Сначала популярные', selected: false },
  { id: 4, type: 'new', label: 'Сначала новые', selected: false },
];
