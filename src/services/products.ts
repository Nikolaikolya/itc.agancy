import { IProduct } from '@/types';
import { request } from '@/libs';

export const getProducts = async (route: string): Promise<IProduct[]> => {
  const response = await request(route);

  if (response !== undefined) return response;
  return [];
};
