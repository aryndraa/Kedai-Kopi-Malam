function openNav() {
  var sideNav = document.getElementById("nav-side");
  if (sideNav.classList.contains("active")) {
    sideNav.classList.remove("active");
  } else {
    sideNav.classList.add("active");
  }
}

// cart
var kopi = {};
var item = 0;
function addToCart(product, price) {
  var keranjangSec = document.getElementById("cart-list");
  if (kopi[prduct]) {
    kopi[product].quantity++;
    item++;
  } else {
    kopi[product] = { quantity: 1, price: price };
  }

  render();
}

// hapus item
function HapusItem(product) {
  if (kopi[product].quantity === 1) {
    delete kopi[product];
  } else {
    kopi[product].quantity--;
    item--;
  }
  render();
}

// munculkan side
function sideActive(sectionId) {
  var sidebar = document.getElementById(sectionId);
  sidebar.classList.add("active");
}

// tampilkan
function render() {
  var itemKeranjang = document.getElementById("cart-items");
  itemKeranjang.innerHTML = "";
  var harga = 0;

  for (var i in kopi) {
    var li = document.createElement("li");
    var total = kopi[i].price * kopi[i].quantity;
    harga += total;
    li.appendChild(
      document.createTextNode(
        i + " " + kopi[i].quantity + " " + "x  : " + harga
      )
    );

    var deleteItems = document.createElement("button");
    deleteItems.classList.add("remove-button");
    deleteItems.innerHTML = "-";
    deleteItems.onclick = (function (product) {
      return function () {
        HapusItem(product);
      };
    })(i);
    li.appendChild(deleteItems);
    itemKeranjang.appendChild(li);
  }
}

function cart() {
  var cart = document.getElementById("cart");
  if (cart.classList.contains("active")) {
    cart.classList.remove("active");
  } else {
    cart.classList.add("active");
  }
}
