let cart = [];
const renderCart = () => {
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  console.log(cart);
  const view = cart.map((value, id) => {
    const tongGia = value.price * value.quantity;
    return `
      <div class="cart_box-list-product-item">
      <input type="checkbox" />
      <div class="cart_box-list-product-item-img">
        <img src="../img/Frame 1707478012.jpg" alt="" />
      </div>
      <div class="cart_box-list-product-item-conten">
        <div class="cart_box-list-product-item-conten-name">
          <h1>${value.name}</h1>
          <p>Color: <span>${value.color.red}</span></p>
        </div>
        <p class="cart_box-list-product-item-conten-price">$${value.price}</p>
        <div class="cart_box-list-product-item-conten-sl">
          <button class="giam" onClick="clickGiam(${value.id})">-</button>
            <input type="text" value="${value.quantity}" disabled />
          <button class="tang" onClick="clickTang(${value.id})">+</button>
        </div>
        <p class="cart_box-list-product-item-conten-sum">${tongGia}</p>
        <div class="cart_box-list-product-item-conten-delete">
            <button onClick="clickDeleteCart(${value.id})">
                <img src="../img/Group 10.png" alt="" />
            </button>
        </div>
      </div>
    </div>
      `;
  });
  document.querySelector(".cartproduct").innerHTML = view.join("");
};

// xóa sản phẩm trong cart

const deleteCart = (product) => {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const checkSP = cart.findIndex((item) => item.id === product.id);
  if (checkSP !== -1) {
    cart.splice(checkSP, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(checkSP);
};

const clickDeleteCart = (productId) => {
  const product = obj.find((item) => item.id === productId);
  if (product) {
    if (confirm("Product deleted from cart") == true) {
      deleteCart(product);
      location.reload();
    }
  }
};

// Tăng giảm sl sp

const updateQuantity = (productId, change) => {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  const product = cart.find((item) => item.id === productId);

  if (product) {
    if (change === "tang") {
      product.quantity += 1;
    } else if (change === "giam" && product.quantity > 1) {
      product.quantity -= 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
};

const clickTang = (productId) => {
  updateQuantity(productId, "tang");
};

const clickGiam = (productId) => {
  updateQuantity(productId, "giam");
};
