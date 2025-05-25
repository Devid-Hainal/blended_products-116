import"./assets/styles-BK7AYJoX.js";import{a}from"./assets/vendor-N5iQpiFS.js";a.defaults.baseURL="https://dummyjson.com";async function i(){return(await a.get("/products/category-list")).data}async function c(t=1){return(await a.get("/products?limit=12&skip=10")).data.products}async function l(t="smartphones"){const e=await a.get(`products/category/${t}`);return console.log(e.data.products),e.data.products}const o={listElement:document.querySelector(".products"),allCategories:document.querySelector(".categories"),notFoundDiv:document.querySelector(".not-found")};function u(t){o.allCategories.innerHTML="";const e=t.map(s=>`
      <li class="categories__item">
        <button class="categories__btn" type="button">${s}</button>
      </li>
    `).join("");o.allCategories.innerHTML=e}function r(t){if(t.length===0){o.notFoundDiv.classList.add("not-found--visible");return}o.notFoundDiv.classList.remove("refs.notFoundDiv.classList.");const e=t.map(s=>`
      <li class="products__item" data-id="${s.id}">
        <img class="products__image" src="${s.thumbnail}" alt="${s.title}" />
        <p class="products__title">${s.title}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${s.brand}</p>
        <p class="products__category">Category: ${s.category}</p>
        <p class="products__price">Price: $${s.price}</p>
      </li>
    `).join("");o.listElement.innerHTML=e}async function d(){const e=["All",...await i()];u(e)}async function p(){const t=await c();r(t)}o.allCategories.addEventListener("click",async t=>{const e=t.target.closest(".categories__btn");if(!e)return;const s=e.textContent;if(s==="All"){const n=await c();r(n)}else{const n=await l(s);r(n)}});d();p();
//# sourceMappingURL=index.js.map
