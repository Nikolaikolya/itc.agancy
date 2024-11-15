import { ref } from 'vue';
import { ICartProduct, IProduct } from '@/types';

const cart = ref<ICartProduct[]>([]);

export const useCart = () => {
  const addToCart = (product: IProduct) => {
    cart.value.push({ counts: 1, item: product, total: product.price });
  };

  const addItem = (id: number) => {
    const productIndex: number = cart.value.findIndex((i) => i.item.id === id);

    if (productIndex != -1) {
      cart.value[productIndex].counts += 1;
    }
  };

  const subItem = (id: number) => {
    const productIndex: number = cart.value.findIndex((i) => i.item.id === id);

    if (productIndex != -1) {
      cart.value[productIndex].counts -= 1;
    }
  };

  const deleteItem = (id: number) => {
    const productIndex: number = cart.value.findIndex((i) => i.item.id === id);

    if (productIndex != -1) {
      cart.value.splice(productIndex, 1);
    }
  };

  const deleteAll = () => {
    cart.value = [];
  };

  return { cart, addToCart, addItem, subItem, deleteItem, deleteAll };
};
