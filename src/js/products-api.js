import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

export async function fetchCategories() {
  const response = await axios.get('/products/category-list');
  return response.data;
}

export async function fetchProducts(currentPage = 1) {
  const url = `/products?limit=12&skip=10`;
  const response = await axios.get(url);
  return response.data.products;
}
export async function getProductsByCategory(category = 'smartphones') {
  const response = await axios.get(`products/category/${category}`);
  console.log(response.data.products);

  return response.data.products;
}
