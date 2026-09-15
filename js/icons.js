/*
  Product imagery
  --------------------------------------------------------------------------
  Products now render real photographs from the images/ folder. Each product in
  data.js carries an `image` path and an `imageAlt` description, and
  getProductImage(product) returns an <img> tag built from those two fields.

  To use your own photography, drop replacement .jpg files into images/ using the
  same filenames (they match each product id) — no code changes needed. To point
  at differently named files, edit the `image` field on the product in data.js.

  If a photo is missing or fails to load, the <img> onerror handler swaps in the
  category line-art SVG below, so a card never renders as a broken image. Those
  SVGs are also used on their own for the category tiles and the empty cart.
*/
(function () {
  const wrap = (label, drawing) => `
    <svg viewBox="0 0 200 200" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg"
      fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      ${drawing}
    </svg>`;

  window.PRODUCT_ICONS = {
    helmet: wrap("Line illustration of a full-face motorcycle helmet", `
      <path d="M38 111c0-43 24-73 66-73 34 0 56 19 62 50l-9 20-47 2-16 18 10 20H63c-16-8-25-20-25-37Z"/>
      <path d="M66 79c24-17 55-20 88-6l7 17-56 5-30 17-30-2"/>
      <path d="M94 128h47l16-20M104 148l-10-20M55 122c5 11 13 18 24 22"/>
    `),
    jacket: wrap("Line illustration of a motorcycle riding jacket", `
      <path d="M73 43 48 57 24 112l25 12 14-30v65h74V94l14 30 25-12-24-55-25-14-12 14H85L73 43Z"/>
      <path d="M85 57 100 72l15-15M100 72v87M72 101h18v17H72zM110 101h18v17h-18z"/>
      <path d="m48 57 15 37M152 57l-15 37M73 43l12 14M127 43l-12 14"/>
    `),
    gloves: wrap("Line illustration of an armoured motorcycle glove", `
      <path d="M59 145 47 91c-2-9 10-12 14-4l9 22-8-48c-1-9 12-11 14-2l9 43-5-54c-1-9 13-10 14-1l5 53 1-49c0-9 14-9 14 0l1 52 7-38c2-9 15-6 13 3l-6 54 19-15c8-6 16 5 9 12l-35 39H78c-10 0-17-5-19-13Z"/>
      <path d="M63 127h67M67 140h55M78 83l39-4M79 92l39-4"/>
      <path d="M83 112c7-8 15-9 23-2M108 109c7-7 14-7 21-1"/>
    `),
    boots: wrap("Line illustration of a mid-calf motorcycle boot", `
      <path d="M72 37h52l5 70 15 20c7 9 17 16 30 20l-3 16H45l4-23 17-18 6-85Z"/>
      <path d="m72 57 54 6M70 80l57 7M67 102l61 8M64 122l67 3"/>
      <path d="M49 140c35 7 68 4 95-13M45 163h126M87 63l-4 37M101 66l-4 37"/>
    `),
    luggage: wrap("Line illustration of a roll-top motorcycle saddlebag", `
      <path d="M52 55h96l10 104H42L52 55Z"/>
      <path d="M52 55c7-15 89-15 96 0l-4 20H56l-4-20ZM56 75l-5 12h98l-5-12"/>
      <path d="M72 49v82M128 49v82M64 126h16v18H64zM120 126h16v18h-16z"/>
      <path d="M42 159h116M51 87l-5 65M149 87l5 65"/>
    `),
    accessories: wrap("Line illustration of a strap-on motorcycle knee guard", `
      <path d="M84 34c17-5 35 2 43 17l13 30-8 72c-11 12-27 18-48 13l-20-18 7-78 13-36Z"/>
      <path d="M72 70c18 11 38 14 63 8M67 111c21 11 44 12 69 1M83 166l8-55 10-26 34-7"/>
      <path d="M68 83 42 78v14l25 5M66 126l-29 4v14l28-3M132 93l28 3v14l-29-3M130 132l25 8v14l-27-8"/>
    `)
  };

  // Category line art on its own, used by category tiles and the empty cart.
  window.getCategoryIcon = function (category) {
    return window.PRODUCT_ICONS[category] || window.PRODUCT_ICONS.accessories;
  };

  // Swaps a failed photo for the category line art so a card never shows a broken image.
  window.handleImageError = function (image) {
    const tile = image.parentNode;
    if (!tile) return;
    tile.classList.add("is-fallback");
    tile.innerHTML = window.getCategoryIcon(image.dataset.category);
  };

  // A product photo, falling back to the category line art if the file is missing.
  window.getProductImage = function (product, options) {
    if (typeof product === "string") return window.getCategoryIcon(product);
    const loading = options && options.eager ? "eager" : "lazy";
    return `<img class="product-photo" src="${product.image}" alt="${product.imageAlt}"
      data-category="${product.category}" loading="${loading}" decoding="async"
      onerror="window.handleImageError(this)">`;
  };
})();
