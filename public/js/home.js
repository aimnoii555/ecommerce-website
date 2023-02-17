const setupSlidingEffect = () => {
  const productContainers = document.querySelectorAll(".product-container");
  const nextBtn = document.querySelectorAll(".next-btn");
  const preBtn = document.querySelectorAll(".pre-btn");

  productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    // console.log(containerDimenstions)
    let containerWidth = containerDimenstions.width;
    nextBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
      console.log(item.scrollLeft);
    });
  });
};

// fetch product cards
const getProducts = (tag) => {
  return fetch("/get-products", {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ tag: tag }),
  })
    .then(res => res.json())
    .then(data => {
      return data;
    });

};

// create product slider
const createProductSlider = (data, parent, title) => {
  let slideContainer = document.querySelector(`${parent}`);
  slideContainer.innerHTML += `
        <section class="product">
            <h2 class="product-category">${title}</h2>
            <button class="pre-btn"><img src="../img/arrow.png" alt=""></button>
            <button class="next-btn"><img src="../img/arrow.png" alt=""></button>
            ${createProductCards(data)}
        </section>
    `;

  setupSlidingEffect();
};

const createProductCards = (data, parent) => {
  // here parent is for search product
  let start = '<div class="product-container">';
  let middle = ""; // this will contain card HTML
  let end = "</div>";

  for (let i = 0; i < data.length; i++) {
    // product different from show
    if (data[i].id != decodeURI(location.pathname.split("/").pop())) {
      middle += `
    <div class="product-card">
        <div class="product-image">
            <span class="discount-tag">${data[i].discount} off </span>
            <img src="${data[i].images[0]}" class="product-thumb" alt="">
        </div>
        <div class="product-info" onclick="location.href='/products/${data[i].id}'" >
            <h2 class="product-brand">${data[i].name}</h2>
            <p class="product-short-des">${data[i].shortDes}</p>
            <span class="price">$${data[i].sellPrice}<span class="actual-price"> $${data[i].actualPrice}</span></span>
        </div>
    </div>`;
    }
  }

  // about search
  if (parent) {
    let cardContainer = document.querySelector(parent)
    cardContainer.innerHTML = start + middle + end
  } else {
      return start + middle + end;
  }

}

const add_product_to_cart_or_wishlist = (type,product) => {
    let data = JSON.parse(localStorage.getItem(type))
    console.log('data' + data)
    if (data == null) {
        data = []
    }

    product = {
        item: 1,
        name: product.name,
        sellPrice: product.sellPrice,
        size: size || null,
        shortDes: product.shortDes,
        image: product.images[0]

    }

    data.push(product)
    // console.log(data)
    localStorage.setItem(type, JSON.stringify(data)) // set localStorage wishlist and cart
    return 'added'
}


