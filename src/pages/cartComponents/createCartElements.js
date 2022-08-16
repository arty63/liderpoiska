import { PRODUCTS } from '../../shared/cards/cards';

export function createCartElements(arr) {
  const someProducts = arr.map(el => PRODUCTS.find(item => item.id === el));
  return someProducts;
}
