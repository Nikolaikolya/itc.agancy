import { IProduct } from '@/types';

const API = 'https://673374bf2a1b1a4ae113a22d.mockapi.io/api';

export const request = async (
  route: string,
): Promise<IProduct[] | undefined> => {
  const response = await fetch(API + route);

  try {
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
