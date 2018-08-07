export const loadProducts = () => {
    return fetch('products.json').then(res => res.json());
};