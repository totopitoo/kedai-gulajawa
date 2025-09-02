// Filter Menu
function filterMenu(category) {
  const items = document.querySelectorAll("#menu .menu-item");
  items.forEach((item) => {
    if (category === "all") item.style.display = "block";
    else item.style.display = item.classList.contains(category) ? "block" : "none";
  });
}

// Form Kontak AJAX
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim! Terima kasih.");
  this.reset();
});

// Mini Cart
let cartItems = [];
function addToCart(item) {
  cartItems.push(item);
  renderCart();
}

function renderCart() {
  const cart = document.getElementById("cart");
  cart.innerHTML = "";
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item + " ";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    cart.appendChild(li);
  });
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  renderCart();
}
