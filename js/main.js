(function () {
  "use strict";

  const products = window.PRODUCTS || [];
  const cart = [];
  const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  let toastTimer;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const formatPrice = value => money.format(value);
  const productById = id => products.find(product => product.id === id);
  const titleCase = value => value.charAt(0).toUpperCase() + value.slice(1);

  function fillIcons() {
    qsa("[data-icon]").forEach(element => {
      element.innerHTML = window.getCategoryIcon(element.dataset.icon);
    });
  }

  function productCard(product) {
    return `
      <article class="product-card">
        ${product.inStock ? "" : '<span class="stock-ribbon">OUT OF STOCK</span>'}
        <a class="product-image" href="product.html?id=${product.id}" aria-label="View ${product.name}">
          ${window.getProductImage(product)}
        </a>
        <p class="card-category">${titleCase(product.category)}</p>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p class="card-meta"><span class="card-rating"><span class="stars">★</span> ${product.rating} (${product.reviews})</span></p>
        <p class="card-price">${formatPrice(product.price)}${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}</p>
        <button class="button ${product.inStock ? "button-secondary" : ""} card-add" type="button" data-add-id="${product.id}" ${product.inStock ? "" : "disabled"}>
          ${product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </article>`;
  }

  function renderCards(target, list) {
    if (target) target.innerHTML = list.map(productCard).join("");
  }

  function showToast(message = "Added to cart") {
    const toast = qs(".toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  }

  function addToCart(product, quantity = 1, size, color) {
    if (!product || !product.inStock) return;
    const selectedSize = size || product.sizes[0];
    const selectedColor = color || product.colors[0].name;
    const existing = cart.find(item => item.id === product.id && item.size === selectedSize && item.color === selectedColor);
    if (existing) existing.quantity += quantity;
    else cart.push({ id: product.id, quantity, size: selectedSize, color: selectedColor });
    updateCart();
    showToast();
  }

  function cartQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function updateCart() {
    const count = cartQuantity();
    qsa(".cart-count").forEach(node => node.textContent = count);
    const countText = `${count} ${count === 1 ? "item" : "items"}`;
    qsa(".drawer-count").forEach(node => node.textContent = countText);
    const container = qs(".cart-items");
    if (!container) return;

    if (!cart.length) {
      container.innerHTML = `<div class="cart-empty">${window.getCategoryIcon("luggage")}<h3>Your cart is empty</h3><p>Add some gear and get ready to ride.</p></div>`;
    } else {
      container.innerHTML = cart.map((item, index) => {
        const product = productById(item.id);
        return `<div class="cart-row">
          <div class="cart-thumb">${window.getProductImage(product)}</div>
          <div><h3>${product.name}</h3><p class="cart-variant">${item.color} · ${item.size}</p>
            <div class="mini-stepper" aria-label="Quantity for ${product.name}">
              <button type="button" data-cart-action="minus" data-index="${index}" aria-label="Decrease ${product.name} quantity">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-action="plus" data-index="${index}" aria-label="Increase ${product.name} quantity">+</button>
            </div>
            <button class="cart-remove" type="button" data-cart-action="remove" data-index="${index}">Remove</button>
          </div>
          <div class="cart-line-price">${formatPrice(product.price * item.quantity)}</div>
        </div>`;
      }).join("");
    }
    const total = cart.reduce((sum, item) => sum + productById(item.id).price * item.quantity, 0);
    const totalNode = qs(".cart-total");
    if (totalNode) totalNode.textContent = formatPrice(total);
    const checkout = qs(".checkout-button");
    if (checkout) checkout.disabled = !cart.length;
  }

  function openCart() {
    const drawer = qs(".cart-drawer");
    const overlay = qs(".drawer-overlay");
    if (!drawer || !overlay) return;
    overlay.hidden = false;
    requestAnimationFrame(() => drawer.classList.add("open"));
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    qs(".drawer-close", drawer).focus();
  }

  function closeCart() {
    const drawer = qs(".cart-drawer");
    const overlay = qs(".drawer-overlay");
    if (!drawer || !overlay) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
    setTimeout(() => { overlay.hidden = true; }, 250);
  }

  function initSharedEvents() {
    qs(".nav-toggle")?.addEventListener("click", event => {
      const nav = qs(".site-nav");
      const open = nav.classList.toggle("open");
      event.currentTarget.setAttribute("aria-expanded", open);
      event.currentTarget.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    qs(".cart-button")?.addEventListener("click", openCart);
    qs(".drawer-close")?.addEventListener("click", closeCart);
    qs(".drawer-overlay")?.addEventListener("click", closeCart);
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeCart();
        qs(".site-nav")?.classList.remove("open");
      }
    });
    document.addEventListener("click", event => {
      const addButton = event.target.closest("[data-add-id]");
      if (addButton && !addButton.disabled) {
        const product = productById(addButton.dataset.addId);
        addToCart(product);
        const original = addButton.textContent;
        addButton.textContent = "Added ✓";
        addButton.disabled = true;
        setTimeout(() => { addButton.textContent = original; addButton.disabled = false; }, 1100);
      }
      const cartControl = event.target.closest("[data-cart-action]");
      if (cartControl) {
        const index = Number(cartControl.dataset.index);
        const item = cart[index];
        if (!item) return;
        if (cartControl.dataset.cartAction === "plus") item.quantity += 1;
        if (cartControl.dataset.cartAction === "minus") item.quantity = Math.max(1, item.quantity - 1);
        if (cartControl.dataset.cartAction === "remove") cart.splice(index, 1);
        updateCart();
      }
    });
    qs(".checkout-button")?.addEventListener("click", event => {
      if (!cart.length) return;
      const note = qs(".checkout-note");
      note.textContent = "Checkout is a demo. Your cart has not been charged.";
      event.currentTarget.textContent = "Checkout Ready ✓";
      setTimeout(() => { event.currentTarget.textContent = "Proceed to Checkout"; }, 1800);
    });
  }

  function initHome() {
    renderCards(qs("#home-product-grid"), products);
  }

  function initCatalog() {
    const grid = qs("#catalog-grid");
    const sort = qs("#product-sort");
    const buttons = qsa(".filter-button");
    const allowed = ["helmet", "jacket", "gloves", "boots", "luggage", "accessories"];
    const requested = new URLSearchParams(location.search).get("category");
    let category = allowed.includes(requested) ? requested : "all";

    function render() {
      let visible = category === "all" ? [...products] : products.filter(product => product.category === category);
      if (sort.value === "low") visible.sort((a, b) => a.price - b.price);
      if (sort.value === "high") visible.sort((a, b) => b.price - a.price);
      if (sort.value === "rating") visible.sort((a, b) => b.rating - a.rating);
      renderCards(grid, visible);
      qs("#product-count").textContent = `Showing ${visible.length} of ${products.length} products`;
      qs("#empty-state").hidden = visible.length !== 0;
      buttons.forEach(button => button.classList.toggle("active", button.dataset.category === category));
    }

    buttons.forEach(button => button.addEventListener("click", () => { category = button.dataset.category; render(); }));
    sort.addEventListener("change", render);
    qs(".clear-filters")?.addEventListener("click", () => { category = "all"; sort.value = "featured"; render(); });
    render();
  }

  function initDetail() {
    const id = new URLSearchParams(location.search).get("id");
    const product = productById(id);
    if (!product) {
      qs("#product-not-found").hidden = false;
      return;
    }
    qs("#product-content").hidden = false;
    document.title = `${product.name} — MOTORIP`;
    qs("#detail-image").innerHTML = window.getProductImage(product, { eager: true });
    qs("#detail-category").textContent = titleCase(product.category);
    qs("#detail-name").textContent = product.name;
    qs("#detail-rating").innerHTML = `<span class="stars">★★★★★</span>${product.rating} from ${product.reviews} reviews`;
    qs("#detail-pricing").innerHTML = `<span class="detail-price">${formatPrice(product.price)}</span>${product.oldPrice ? `<span class="detail-old-price">${formatPrice(product.oldPrice)}</span><span class="save-tag">Save ${formatPrice(product.oldPrice - product.price)}</span>` : ""}`;
    qs("#detail-description").textContent = product.shortDesc;
    qs("#tab-description").innerHTML = `<p>${product.fullDesc}</p>`;
    qs("#tab-features").innerHTML = `<ul class="feature-list">${product.features.map(feature => `<li>${feature}</li>`).join("")}</ul>`;

    let selectedColor = product.colors[0].name;
    let selectedSize = "";
    let quantity = 1;
    qs("#selected-color").textContent = selectedColor;
    qs("#color-options").innerHTML = product.colors.map((color, index) => `<button class="color-swatch ${index === 0 ? "selected" : ""}" type="button" style="background:${color.hex}" data-color="${color.name}" aria-label="Select ${color.name}" aria-pressed="${index === 0}"></button>`).join("");
    qs("#size-options").innerHTML = product.sizes.map(size => `<button class="size-button" type="button" data-size="${size}" aria-pressed="false">${size}</button>`).join("");

    qsa(".color-swatch").forEach(button => button.addEventListener("click", () => {
      selectedColor = button.dataset.color;
      qs("#selected-color").textContent = selectedColor;
      qsa(".color-swatch").forEach(item => { item.classList.toggle("selected", item === button); item.setAttribute("aria-pressed", item === button); });
    }));
    qsa(".size-button").forEach(button => button.addEventListener("click", () => {
      selectedSize = button.dataset.size;
      qs("#selection-error").textContent = "";
      qsa(".size-button").forEach(item => { item.classList.toggle("selected", item === button); item.setAttribute("aria-pressed", item === button); });
    }));
    qsa(".quantity-stepper button").forEach(button => button.addEventListener("click", () => {
      quantity = button.dataset.action === "plus" ? quantity + 1 : Math.max(1, quantity - 1);
      qs("#detail-quantity").textContent = quantity;
    }));

    const addButton = qs(".detail-add");
    if (!product.inStock) {
      addButton.disabled = true;
      addButton.textContent = "Out of Stock";
    } else {
      addButton.addEventListener("click", () => {
        if (!selectedSize) {
          qs("#selection-error").textContent = "Please select a size before adding this item.";
          qs(".size-button").focus();
          return;
        }
        addToCart(product, quantity, selectedSize, selectedColor);
        addButton.textContent = "Added ✓";
        addButton.disabled = true;
        setTimeout(() => { addButton.textContent = "Add to Cart"; addButton.disabled = false; }, 1100);
      });
    }

    qsa(".tab-button").forEach(button => button.addEventListener("click", () => {
      qsa(".tab-button").forEach(tab => { tab.classList.toggle("active", tab === button); tab.setAttribute("aria-selected", tab === button); });
      qsa(".tab-panel").forEach(panel => { const active = panel.id === `tab-${button.dataset.tab}`; panel.classList.toggle("active", active); panel.hidden = !active; });
    }));

    let related = products.filter(item => item.category === product.category && item.id !== product.id);
    if (related.length < 4) related = related.concat(products.filter(item => item.category !== product.category));
    renderCards(qs("#related-grid"), related.slice(0, 4));
  }

  function initContact() {
    const form = qs("#contact-form");
    if (!form) return;
    form.addEventListener("submit", event => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form));
      const errors = {
        name: values.name.trim() ? "" : "Please enter your name.",
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) ? "" : "Please enter a valid email address.",
        message: values.message.trim().length >= 10 ? "" : "Please enter at least 10 characters."
      };
      Object.entries(errors).forEach(([field, message]) => {
        qs(`#${field}-error`).textContent = message;
        qs(`#${field}`).classList.toggle("invalid", Boolean(message));
        qs(`#${field}`).setAttribute("aria-invalid", Boolean(message));
      });
      const firstError = Object.keys(errors).find(field => errors[field]);
      if (firstError) {
        qs("#form-success").textContent = "";
        qs(`#${firstError}`).focus();
        return;
      }
      qs("#form-success").textContent = "Thanks for reaching out. We’ll get back to you within one working day.";
      form.reset();
    });
    qsa("#contact-form input, #contact-form textarea").forEach(input => input.addEventListener("input", () => {
      input.classList.remove("invalid");
      input.removeAttribute("aria-invalid");
      const error = qs(`#${input.id}-error`);
      if (error) error.textContent = "";
    }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    fillIcons();
    initSharedEvents();
    updateCart();
    const page = document.body.dataset.page;
    if (page === "home") initHome();
    if (page === "products") initCatalog();
    if (page === "detail") initDetail();
    if (page === "contact") initContact();
  });
})();
