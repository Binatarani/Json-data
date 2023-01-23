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

const productDiv = document.getElementById("all-product");
fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      productDiv.innerHTML += `
      <div class="col-lg-4">
      <div class="single-product">
        <img src="${data[i].image}" alt="" />
        <h5>$<span id="product-price">${data[i].price}</span></h5>
        <h3>${data[i].name}</h3>
        <p>
        ${data[i].text}
        </p>
        <button>
          Add To Cart
        </button>
      </div>
    </div>`;
    }
  });

//Jason formet

// const products = [
//   {
//     image: "https://i.ibb.co/18LNCpX/product-one.jpg",
//     price: "$40",
//     name: "product name",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias laborum",
//   },
//   {
//     image: "https://i.ibb.co/18LNCpX/product-one.jpg",
//     price: "$39",
//     name: "product name",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias laborum",
//   },
//   {
//     image: "https://i.ibb.co/18LNCpX/product-one.jpg",
//     price: "$29",
//     name: "product name",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias laborum",
//   },
//   {
//     image: "https://i.ibb.co/18LNCpX/product-one.jpg",
//     price: "$19",
//     name: "product name",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias laborum",
//   },
// ];
