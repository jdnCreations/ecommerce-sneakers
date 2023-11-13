let currentlySelectedImage = 0;
let currentlySelectedThumnail = null;
let currentlySelectedLightboxThumbnail = null;
let currentQuantity = 0;
let cartItems = [];
let cartQuantity = 0;
let isCartOpen = false;
let isCartIndicatorVisible = false;
let isCartEmpty = cartItems.length > 0;
let isModalOpen = false;
let isLightboxOpen = false;

const largeProductImages = [
  '/images/image-product-1.jpg',
  '/images/image-product-2.jpg',
  '/images/image-product-3.jpg',
  '/images/image-product-4.jpg',
];

let largeProductImage = largeProductImages[currentlySelectedImage];

const largeImageElement = document.getElementById('large-image');
const lightboxLargeImageElement = document.getElementById(
  'lightbox-large-image'
);
const quantity = document.getElementById('quantity');
const cartIndicator = document.getElementById('cart-indicator');
const cart = document.getElementById('cart');
const cartItemsElement = document.getElementById('cart-items');
const emptyCartElement = document.getElementById('empty-cart');

const cartTitleElement = document.getElementById('cart-title');
const cartItemPrice = document.getElementById('price');
const cartItemTotal = document.getElementById('total');
const cartItemAmount = document.getElementById('amount');

const modal = document.getElementById('modal');
const lightbox = document.getElementById('lightbox');

largeImageElement.src = largeProductImage;

function setImage(number) {
  for (let i = 0; i < 4; i++) {
    if (i !== number) {
      document
        .getElementById(i)
        .classList.remove(
          'outline-oj',
          'outline-2',
          'outline',
          'mix-blend-overlay'
        );

      document
        .getElementById('lightbox-' + i)
        .classList.remove(
          'outline-oj',
          'outline-2',
          'outline',
          'mix-blend-overlay'
        );
    }
  }

  currentlySelectedThumnail = document.getElementById(number);
  currentlySelectedLightboxThumbnail = document.getElementById(
    'lightbox-' + number
  );

  // set selected css on thumbnail
  currentlySelectedThumnail.classList.add(
    'outline-oj',
    'outline-2',
    'outline',
    'mix-blend-overlay'
  );

  currentlySelectedLightboxThumbnail.classList.add(
    'outline-oj',
    'outline-2',
    'outline',
    'mix-blend-overlay'
  );

  currentlySelectedImage = number;
  largeImageElement.src = largeProductImages[currentlySelectedImage];
  lightboxLargeImageElement.src = largeProductImages[currentlySelectedImage];
}

function openLightbox() {
  console.log('open lightbox');
}

function changeImage(number) {
  if (number === -1) {
    if (currentlySelectedImage === 0) {
      currentlySelectedImage = 3;
    } else {
      currentlySelectedImage -= 1;
    }
  }

  if (number === 1) {
    if (currentlySelectedImage === 3) {
      currentlySelectedImage = 0;
    } else {
      currentlySelectedImage += 1;
    }
  }

  lightboxLargeImageElement.src = largeProductImages[currentlySelectedImage];
  largeImageElement.src = largeProductImages[currentlySelectedImage];
}

function handleQuantity(number) {
  if (currentQuantity === 0 && number === -1) return;
  currentQuantity += number;

  quantity.innerHTML = currentQuantity;
}

function addToCart(item) {
  if (currentQuantity === 0) return;

  for (let i = 0; i < currentQuantity; i++) {
    cartItems.push(item);
  }

  cartQuantity += currentQuantity;
  currentQuantity = 0;
  quantity.innerHTML = currentQuantity;

  cartItemsElement.classList.remove('hidden');
  cartItemsElement.classList.add('flex');

  emptyCartElement.classList.add('hidden');

  // if this were a real app, iterate over each unique item, create elements for each item and add items data. little bit hacky here ;D
  cartTitleElement.innerHTML = cartItems[0].title;
  cartItemPrice.innerHTML = cartItems[0].price;
  cartItemTotal.innerHTML = getTotalCartCost();
  cartItemAmount.innerHTML = cartQuantity;

  updateCartNumber();
}

function getTotalCartCost() {
  let total = 0;

  for (let item of cartItems) {
    total += item.price;
  }

  return new Intl.NumberFormat('en-au', {
    style: 'currency',
    currency: 'AUD',
  }).format(total);
}

function toggleCart() {
  if (isCartOpen) {
    // hide cart
    cart.classList.add('hidden');
  } else {
    // show cart
    cart.classList.remove('hidden');
  }

  isCartOpen = !isCartOpen;
}

function updateCartNumber() {
  cartIndicator.innerHTML = cartQuantity;

  if (cartQuantity > 0 && !isCartIndicatorVisible) {
    // show cart indictator
    cartIndicator.classList.add('flex');
    cartIndicator.classList.remove('hidden');
  } else {
    // hide cart indicator
    cartIndicator.classList.remove('flex');
    cartIndicator.classList.add('hidden');
  }
}

function clearCart() {
  cartItems = [];
  cartQuantity = 0;
  updateCartNumber();
  cartItemsElement.classList.add('hidden');
  cartItemsElement.classList.remove('flex');
  emptyCartElement.classList.remove('hidden');
}

function handleModal() {
  if (isModalOpen) {
    modal.classList.add('hidden');
  } else {
    modal.classList.remove('hidden');
  }

  isModalOpen = !isModalOpen;
}

function handleLightbox() {
  if (window.innerWidth > 638) {
    if (isLightboxOpen) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('grid');
    } else {
      lightbox.classList.add('grid');
      lightbox.classList.remove('hidden');
    }

    isLightboxOpen = !isLightboxOpen;
  }
}
