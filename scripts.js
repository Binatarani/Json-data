// fetch("products.json")
//   .then((res) => res.json())
// .then((data) => console.log(data));

// fetch("products.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const productDiv = document.getElementById("all-products");
const cartProductsDiv = document.getElementById("cart-products");
const cartTotalDiv = document.getElementById("cart-total");
let products;
const lsData = JSON.parse(localStorage.getItem("cartItem"));

let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

// ) Display Products using json file

fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    products = data;
    for (let i = 0; i < data.length; i++) {
      productDiv.innerHTML += `
      <div class="col-lg-4">
      <div class="single-product">
      <img class="w-100" src="${data[i].image}" alt="">
        <h5>$<span id="product-price">${data[i].price}</span></h5>
        <h3>${data[i].name}</h3>
        <p>
        ${data[i].text}
        </p>
        <button onClick = "addToCart('${data[i].id}')">
          Add To Cart
        </button>
      </div>
    </div>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

// display product from local storage

function displayCart() {
  for (let i = 0; i < cartItem.length; i++) {
    cartProductsDiv.innerHTML += `
      <div class="cart-product" id="cart-products">
    <img class="w-100" src="${cartItem[i].image}" alt="">
    <h3>
    ${cartItem[i].name} (Price: $<span id="product-price">${cartItem[i].price})</span>
    </h3>
    <h5>Quantity:${cartItem[i].quantity}</h5>
    <h5>Sub Total:${cartItem[i].price}</h5>
    <button class="remove-item">X 
    </button>
  </div>`;
  }
}
displayCart();

// get cart total

function cartTotal() {
  const temp = cartItem.map(function (item) {
    return parseFloat(item.price) * parseFloat(item.quantity);
  });
  const sum = temp.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  cartTotalDiv.innerText = sum;
}
cartTotal();

function addToCart(productId) {
  const product = products.find((product) => product.id == productId);

  // 1)Create Product

  const cartProduct = `
  <div class="cart-product" id="id2>
  <img src="${product.image}" alt="">
  <h3>
  ${product.name} (Price: $<span id="product-price">${product.price})</span>
  </h3>
  <h5>Quantity: 1</h5>
  <h5>Sub Total:${product.price}</h5>
  <button class="remove-item">X 
  </button>
</div>`;
  cartProductsDiv.innerHTML += cartProduct;

  //2) Add Products Local Storage

  cartItem.push(product);
  product.quantity = 1;
  localStorage.setItem("cartItem", JSON.stringify(cartItem));

  // Cart Total
  cartTotal();
}
