let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let item = cart.find(i => i.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function showCart() {
  let cartDiv = document.getElementById("cart");
  let total = 0;
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    cartDiv.innerHTML += `
      <div class="item">
        <strong>${item.name}</strong><br>
        $${item.price} × ${item.qty}
        <br>
        <button onclick="increase(${index})">+</button>
        <button onclick="removeItem(${index})">Remove</button>
      </div>`;
  });

  document.getElementById("total").innerText = total;
}

function increase(i) {
  cart[i].qty++;
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}
