// Bước 1: Lấy dữ liệu hiện có từ local storage
var data = localStorage.getItem("SP")
  ? JSON.parse(localStorage.getItem("SP"))
  : [];

// Bước 2: Thêm dữ liệu mới vào dữ liệu đã lấy
var obj = [];

for (let i = 1; i <= 100; i++) {
  obj.push({
    id: i,
    name: `Apple Watch Series ${i % 2 === 0 ? 8 : 7}`,
    color: {
      white: "#DDD",
      red: "#AF0303",
      green: "#3D3737",
      blue: "#304A23"
    },
    description: "Midnight Alumium Case with Sports Band",
    price: i % 2 === 0 ? 1500 : 1600,
    imageURL: "http://127.0.0.1:5500/img/Frame%201707477987.jpg",
    quantity: i % 2 === 0 ? 5 : 4,
    status: `${i % 10 === 0 ? "Sold out" : "Available"}`
  });
}

// data.push(...obj);

// In ra tên của sản phẩm vừa thêm
console.log(obj);

// Bước 3: Lưu dữ liệu đã kết hợp trở lại vào local storage
localStorage.setItem("SP", JSON.stringify(data));

// render sp

const render = () => {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  const slicedData = data.slice(0, 4);

  const view = slicedData.map((value, id) => {
    return `
    <div class="aw-box-container-item">
    <div class="aw-box-container-item-img">
      <img src="../img/unsplash_h1MnFsRI-_I.png" alt="" />
    </div>
    <div class="aw-box-container-item-content">
      <h3 id="update">${value.name} <span>${value.status}</span></h3>
      <p>${value.description}</p>
      <p>
        Colors: <span></span><span></span><span></span><span></span>
      </p>
      <p>Remaining: <span>${value.quantity}</span></p>
      <h4>
        <p>$1500</p>
        <button>
          <a href="#">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="32"
                height="32"
                rx="4"
                fill="#FA541C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.6518 11.0653L24.0917 20.4521C24.0443 20.6262 23.8925 20.7517 23.7126 20.7654L13.7478 21.5319L13.2767 22.4734H22.8268C23.0624 22.4734 23.2534 22.6644 23.2534 22.9001C23.2534 23.1357 23.0624 23.3267 22.8268 23.3267H12.5867C12.4388 23.3267 12.3014 23.2502 12.2237 23.1244C12.1459 22.9986 12.1388 22.8415 12.205 22.7092L12.7554 21.6084L12.6188 21.6188L12.5867 21.62C12.3907 21.6202 12.2199 21.4868 12.1724 21.2967L8.92829 8.2766C8.87631 8.09284 8.70838 7.96614 8.51741 7.96658H5.75992C5.52428 7.96658 5.33325 7.77555 5.33325 7.53991C5.33325 7.30426 5.52428 7.11324 5.75992 7.11324H8.51741C9.09694 7.11413 9.60399 7.50326 9.75476 8.06283L10.3706 10.5345C10.3979 10.5293 10.4256 10.5267 10.4533 10.5266H26.2401C26.3731 10.5266 26.4984 10.5886 26.5791 10.6942C26.6598 10.7998 26.6867 10.937 26.6518 11.0653ZM14.72 16.0733C14.72 15.8376 14.9111 15.6466 15.1467 15.6466H17.2801V13.5133C17.2801 13.2776 17.4711 13.0866 17.7067 13.0866C17.9424 13.0866 18.1334 13.2776 18.1334 13.5133V15.6466H20.2668C20.5024 15.6466 20.6934 15.8376 20.6934 16.0733C20.6934 16.3089 20.5024 16.5 20.2668 16.5H18.1334V18.6333C18.1334 18.869 17.9424 19.06 17.7067 19.06C17.4711 19.06 17.2801 18.869 17.2801 18.6333V16.5H15.1467C14.9111 16.5 14.72 16.3089 14.72 16.0733ZM10.5805 11.38H25.6815L23.347 19.9375L12.913 20.7404L10.5805 11.38ZM13.8667 24.1801C13.3954 24.1801 13.0134 24.5621 13.0134 25.0334C13.0134 25.5047 13.3954 25.8868 13.8667 25.8868C14.338 25.8868 14.72 25.5047 14.72 25.0334C14.72 24.5621 14.338 24.1801 13.8667 24.1801ZM20.6935 25.0334C20.6935 24.5621 21.0755 24.1801 21.5468 24.1801C22.0181 24.1801 22.4001 24.5621 22.4001 25.0334C22.4001 25.5047 22.0181 25.8868 21.5468 25.8868C21.0755 25.8868 20.6935 25.5047 20.6935 25.0334Z"
                fill="white"
              /></svg
          ></a>
        </button>
      </h4>
    </div>
  </div>
    `;
  });

  document.querySelector(".awatch").innerHTML = view.join("");
};

// Số sản phẩm hiển thị trên mỗi trang
const productsPerPage = 10;
// Trang hiện tại
let currentPage = 1;

const renderct = () => {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];

  // Tính chỉ số bắt đầu và kết thúc của sản phẩm trên trang hiện tại
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Lấy dữ liệu cho trang hiện tại
  const slicedData = data.slice(startIndex, endIndex);
  const view = slicedData.map((value, id) => {
    return `
    <div class="ctaw_box_product-grid-item">
    <div class="ctaw_box_product-grid-item-img">
      <img src="../img/Frame 1707477987.jpg" alt="" />
    </div>
    <div class="ctaw_box_product-grid-item-content">
      <h3>${value.name}<span id="update">${value.status}</span></h3>
      <div class="ctaw_box_product-grid-item-content-color">
        <p>Colors: 
          <div class="">
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
          </div>
        </p>
      </div>
      <p>Status: <span>${value.quantity}</span></p>
      <div class="ctaw_box_product-grid-item-content-price">
        <p>$${value.price}</p>
          <button onclick="clickAddCart(${value.id})">
            <img src="../img/add-cart.svg" alt="" />
          </button>
      </div>
    </div>
  </div>
    `;
  });
  document.querySelector(".awcategory").innerHTML = view.join("");
  // document.getElementById("update").style.background = "red";
};

// Tim kiem san pham
const searchSp = () => {
  let data = localStorage.getItem("SP")
    ? JSON.parse(localStorage.getItem("SP"))
    : [];
  let search = document.querySelector(".search").value.trim();
  let spSearch = data.filter((value) => {
    // Tìm theo tên
    return (
      value.name.toUpperCase().includes(search.toUpperCase()) ||
      // Tìm theo mô tả
      value.description.toUpperCase().includes(search.toUpperCase()) ||
      // Tìm theo giá
      value.price.toString().toUpperCase().includes(search.toUpperCase()) ||
      // Tìm theo số lượng
      value.quantity.toString().toUpperCase().includes(search.toUpperCase())
    );
  });
  renderseash(spSearch);
};

// view Search
const renderseash = (arr) => {
  console.log(arr);
  if (arr) {
    let vew = ``;
    arr.forEach((value, index) => {
      vew += `
      <div class="ctaw_box_product-grid-item">
        <div class="ctaw_box_product-grid-item-img">
          <img src="../img/Frame 1707477987.jpg" alt="" />
        </div>
        <div class="ctaw_box_product-grid-item-content">
          <h3>${value.name}<span>${value.status.c}</span></h3>
          <div class="ctaw_box_product-grid-item-content-color">
            <p>Colors: 
              <div class="">
                <span class="color"></span>
                <span class="color"></span>
                <span class="color"></span>
                <span class="color"></span>
              </div>
            </p>
          </div>
          <p>Status: <span>${value.quantity}</span></p>
          <div class="ctaw_box_product-grid-item-content-price">
            <p>$${value.price}</p>
            <a href="">
              <img src="../img/add-cart.svg" alt="" />
            </a>
          </div>  
        </div>
      </div>
      `;
    });
    document.getElementById("render").innerHTML = vew;
  }
};

// thêm sản phẩm vào cart

const addToCart = (product) => {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  // ktra sp da ton tai
  // add so luong = 1
  const checkSP = cart.find((item) => item.id === product.id);
  console.log(cart);

  if (checkSP) {
    checkSP.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const clickAddCart = (productId) => {
  const product = obj.find((item) => item.id === productId);
  if (product) {
    addToCart(product);
    alert("Product added to cart!");
  }
};
