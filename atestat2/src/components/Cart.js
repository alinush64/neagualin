let cart = [];

export function addToCart(movie) {
  cart.push(movie);
  renderCart();
}

export function removeFromCart(movieId) {
  cart = cart.filter(item => item.id !== movieId);
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById('cart');
  if (!cartContainer) return;

  const cartList = cart.map(movie => `
    <li>
      ${movie.title} <button onclick="removeFromCart(${movie.id})">Șterge</button>
    </li>
  `).join('');

  cartContainer.innerHTML = `
    <h2>Coș</h2>
    <ul>${cartList}</ul>
  `;
}
