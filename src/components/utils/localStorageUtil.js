export class LocalStorageUtil {
  constructor() {
    this.keyName = 'products';
  }

  getProducts() {
    const productInLocalStorage = localStorage.getItem(this.keyName);
    if (productInLocalStorage !== null) {
      return JSON.parse(productInLocalStorage);
    }
    return []; 
  }

  putProducts(id) {
    const allProducts = this.getProducts();
    let pushProduct = false;
    const ind = allProducts.indexOf(id);
    if (ind === -1) {
      allProducts.push(id);
      pushProduct = true;
    } else {
      allProducts.splice(ind, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(allProducts));
    return { pushProduct, allProducts };
  }
}

export const localStorageUtil = new LocalStorageUtil();