import {
  fetchCategories,
  fetchProducts,
  getProductsByCategory,
} from './js/products-api';
import { markupCategories, markupProducts } from './js/render-function';
import { refs } from './js/refs';
async function renderCategories() {
  const categories = await fetchCategories();
  const allCategories = ['All', ...categories];
  markupCategories(allCategories);
}

async function renderProducts() {
  const products = await fetchProducts();
  markupProducts(products);
}
refs.allCategories.addEventListener('click', async event => {
  const clickBtn = event.target.closest('.categories__btn');
  if (!clickBtn) {
    return;
  }
  const category = clickBtn.textContent;

  if (category === 'All') {
    const products = await fetchProducts();
    markupProducts(products);
  } else {
    const products = await getProductsByCategory(category);
    markupProducts(products);
  }
});

renderCategories();
renderProducts();
