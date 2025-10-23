// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage or initialize empty
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartIcon = document.getElementById('cartIcon');
// Product detail modal
const productDetailModal = document.getElementById('productDetailModal');
const closeProduct = document.getElementById('closeProduct');
const productDetailTitle = document.getElementById('productDetailTitle');
const productDetailImage = document.getElementById('productDetailImage');
const productDetailPrice = document.getElementById('productDetailPrice');
const productDetailStock = document.getElementById('productDetailStock');
const productDescription = document.getElementById('productDescription');
const productRatingStars = document.getElementById('productRatingStars');
const productRatingCount = document.getElementById('productRatingCount');
const buyNowBtn = document.getElementById('buyNowBtn');
const addToCartBtn = document.getElementById('addToCartBtn');
// Notification
const notification = document.getElementById('notification');

// Product data (Images replaced with relative paths in HTML)
const products = [
    // Figures
    { 
        id: 1, 
        name: "Neon Genesis Evangelion Figure", 
        price: 2500000, 
        image: "evangelion_figure.jpg", // Replace with actual filename
        category: "figures", 
        stock: 5,
        description: "This high-quality Neon Genesis Evangelion figure features intricate details and vibrant colors. Perfect for collectors and fans of the classic anime series.",
        rating: 4.8,
        reviews: 45
    },
    { 
        id: 2, 
        name: "My Hero Academia Figure", 
        price: 1800000, 
        image: "mha_figure.jpg", // Replace with actual filename
        category: "figures", 
        stock: 3,
        description: "The My Hero Academia figure showcases your favorite hero in dynamic pose with excellent craftsmanship and attention to detail.",
        rating: 4.7,
        reviews: 32
    },
    { 
        id: 3, 
        name: "Demon Slayer Figure", 
        price: 2200000, 
        image: "demon_slayer_figure.jpg", // Replace with actual filename
        category: "figures", 
        stock: 7,
        description: "This Demon Slayer figure captures the intensity and emotion of the characters with remarkable detail and quality materials.",
        rating: 4.9,
        reviews: 58
    },
    { 
        id: 4, 
        name: "One Piece Figure", 
        price: 1900000, 
        image: "one_piece_figure.jpg", // Replace with actual filename
        category: "figures", 
        stock: 4,
        description: "The One Piece figure features your favorite pirate crew members in their iconic poses with excellent paintwork and articulation.",
        rating: 4.6,
        reviews: 42
    },
    { 
        id: 5, 
        name: "Naruto Figure", 
        price: 1700000, 
        image: "naruto_figure.jpg", // Replace with actual filename
        category: "figures", 
        stock: 6,
        description: "This Naruto figure showcases the ninja in his signature pose with incredible detail and vibrant colors that capture the spirit of the character.",
        rating: 4.7,
        reviews: 39
    },
    { 
        id: 6, 
        name: "Sailor Moon Figure", 
        price: 1500000, 
        image: "sailor_moon_figure.jpg", // Replace with actual filename
        category: "figures", 
        stock: 8,
        description: "The Sailor Moon figure features the magical girl in her classic transformation pose with exquisite detailing and sparkling effects.",
        rating: 4.8,
        reviews: 51
    },
    { 
        id: 7, 
        name: "Attack on Titan Figure", 
        price: 2000000, 
        image: "images/aot_figure.jpg", // Replace with actual filename
        category: "figures", 
        stock: 5,
        description: "This Attack on Titan figure captures the intensity of the battle scenes with detailed armor and dynamic posing.",
        rating: 4.7,
        reviews: 47
    },
    { 
        id: 8, 
        name: "Dragon Ball Z Figure", 
        price: 1600000, 
        image: "images/dbz_figure.jpg", // Replace with actual filename
        category: "figures", 
        stock: 9,
        description: "The Dragon Ball Z figure features your favorite Saiyan warrior in his Super Saiyan form with detailed musculature and energy effects.",
        rating: 4.9,
        reviews: 63
    },
    // Comics
    { 
        id: 9, 
        name: "Demon Slayer Comic", 
        price: 150000, 
        image: "demon_slayer_comic.jpg", // Replace with actual filename
        category: "comics", 
        stock: 12,
        description: "The Demon Slayer manga series follows Tanjiro Kamado as he becomes a demon slayer to save his sister and avenge his family. A must-read for any anime fan!",
        rating: 4.8,
        reviews: 89
    },
    { 
        id: 10, 
        name: "One Piece Manga", 
        price: 95000, 
        image: "one_piece_manga.jpg", // Replace with actual filename
        category: "comics", 
        stock: 20,
        description: "Join Monkey D. Luffy and his crew on their epic journey to find the legendary treasure, One Piece. The longest-running manga series with over 100 volumes!",
        rating: 4.9,
        reviews: 124
    },
    { 
        id: 11, 
        name: "Naruto Comic", 
        price: 85000, 
        image: "naruto_comic.jpg", // Replace with actual filename
        category: "comics", 
        stock: 15,
        description: "Follow Naruto Uzumaki's journey from outcast to Hokage in this beloved ninja adventure. Features stunning artwork and compelling storylines.",
        rating: 4.7,
        reviews: 98
    },
    { 
        id: 12, 
        name: "Attack on Titan Comic", 
        price: 120000, 
        image: "aot_comic.jpg", // Replace with actual filename
        category: "comics", 
        stock: 10,
        description: "In a world where humanity lives behind walls to protect themselves from Titans, Eren Yeager discovers a terrible secret that changes everything.",
        rating: 4.8,
        reviews: 76
    },
    { 
        id: 13, 
        name: "My Hero Academia Comic", 
        price: 100000, 
        image: "mha_comic.jpg", // Replace with actual filename
        category: "comics", 
        stock: 18,
        description: "In a world where nearly everyone has superpowers called Quirks, Izuku Midoriya dreams of becoming a hero despite being born without powers.",
        rating: 4.7,
        reviews: 82
    },
    { 
        id: 14, 
        name: "Dragon Ball Z Comic", 
        price: 130000, 
        image: "dbz_comic.jpg", // Replace with actual filename
        category: "comics", 
        stock: 10,
        description: "Continue the Dragon Ball saga with Goku and his friends as they face powerful enemies from across the universe in thrilling battles.",
        rating: 4.6,
        reviews: 71
    },
    { 
        id: 15, 
        name: "Fate/Stay Night Comic", 
        price: 140000, 
        image: "images/fate_comic.jpg", // Replace with actual filename
        category: "comics", 
        stock: 9,
        description: "Shirou Emiya becomes involved in the Holy Grail War, summoning a heroic spirit to fight alongside him against other magicians.",
        rating: 4.5,
        reviews: 54
    },
    { 
        id: 16, 
        name: "Bleach Comic", 
        price: 110000, 
        image: "images/bleach_comic.jpg", // Replace with actual filename
        category: "comics", 
        stock: 14,
        description: "Ichigo Kurosaki gains the powers of a Soul Reaper and protects the living world from evil spirits while navigating the complex world of the afterlife.",
        rating: 4.6,
        reviews: 68
    },
    // Keychains
    { 
        id: 17, 
        name: "Neon Genesis Evangelion Keychain", 
        price: 45000, 
        image: "evangelion_keychain.jpg", // Replace with actual filename
        category: "keychains", 
        stock: 25,
        description: "Show off your love for Neon Genesis Evangelion with this adorable keychain featuring your favorite characters from the series.",
        rating: 4.5,
        reviews: 33
    },
    { 
        id: 18, 
        name: "Demon Slayer Keychain", 
        price: 40000, 
        image: "demon_slayer_keychain.jpg", // Replace with actual filename
        category: "keychains", 
        stock: 30,
        description: "Carry your favorite Demon Slayer characters with you everywhere with this high-quality keychain featuring detailed designs.",
        rating: 4.6,
        reviews: 41
    },
    { 
        id: 19, 
        name: "One Piece Keychain", 
        price: 35000, 
        image: "one_piece_keychain.jpg", // Replace with actual filename
        category: "keychains", 
        stock: 40,
        description: "Add some pirate flair to your keys with this One Piece keychain featuring your favorite characters from the Straw Hat Pirates.",
        rating: 4.7,
        reviews: 56
    },
    { 
        id: 20, 
        name: "Naruto Keychain", 
        price: 38000, 
        image: "naruto_keychain.jpg", // Replace with actual filename
        category: "keychains", 
        stock: 35,
        description: "Show your ninja spirit with this Naruto keychain featuring the orange-clad ninja in his signature pose.",
        rating: 4.6,
        reviews: 48
    },
    { 
        id: 21, 
        name: "My Hero Academia Keychain", 
        price: 42000, 
        image: "mha_keychain.jpg", // Replace with actual filename
        category: "keychains", 
        stock: 28,
        description: "Display your hero spirit with this My Hero Academia keychain featuring your favorite heroes from UA High School.",
        rating: 4.5,
        reviews: 37
    },
    { 
        id: 22, 
        name: "Attack on Titan Keychain", 
        price: 48000, 
        image: "aot_keychain.jpg", // Replace with actual filename
        category: "keychains", 
        stock: 22,
        description: "Show your determination to survive with this Attack on Titan keychain featuring your favorite characters from the Survey Corps.",
        rating: 4.4,
        reviews: 31
    },
    { 
        id: 23, 
        name: "Dragon Ball Z Keychain", 
        price: 37000, 
        image: "images/dbz_keychain.jpg", // Replace with actual filename
        category: "keychains", 
        stock: 32,
        description: "Carry the power of the Saiyans with you everywhere with this Dragon Ball Z keychain featuring Goku and his friends.",
        rating: 4.7,
        reviews: 45
    },
    { 
        id: 24, 
        name: "Sailor Moon Keychain", 
        price: 41000, 
        image: "images/sailor_moon_keychain.jpg", // Replace with actual filename
        category: "keychains", 
        stock: 26,
        description: "Add some magic to your keys with this Sailor Moon keychain featuring the magical girl in her classic transformation pose.",
        rating: 4.8,
        reviews: 39
    },
    // Gundam
    { 
        id: 25, 
        name: "Gundam RX-78-2 Model", 
        price: 3200000, 
        image: "gundam_rx78_2.jpg", // Replace with actual filename
        category: "gundam", 
        stock: 4,
        description: "Build your own Gundam RX-78-2 with this detailed model kit featuring multiple parts, decals, and assembly instructions for the perfect build.",
        rating: 4.9,
        reviews: 28
    },
    { 
        id: 26, 
        name: "Gundam Unicorn Model", 
        price: 2800000, 
        image: "gundam_unicorn.jpg", // Replace with actual filename
        category: "gundam", 
        stock: 3,
        description: "Create the legendary Gundam Unicorn with this advanced model kit featuring transforming parts and LED lighting effects for an authentic experience.",
        rating: 4.8,
        reviews: 24
    },
    { 
        id: 27, 
        name: "Gundam Barbatos Model", 
        price: 2500000, 
        image: "gundam_barbatos.jpg", // Replace with actual filename
        category: "gundam", 
        stock: 5,
        description: "Assemble the powerful Gundam Barbatos with this detailed model kit featuring multiple weapon options and articulated joints for dynamic posing.",
        rating: 4.7,
        reviews: 22
    },
    { 
        id: 28, 
        name: "Gundam AGE Model", 
        price: 2200000, 
        image: "gundam_age.jpg", // Replace with actual filename
        category: "gundam", 
        stock: 6,
        description: "Build the versatile Gundam AGE with this model kit featuring interchangeable parts for different combat modes and detailed cockpit interior.",
        rating: 4.6,
        reviews: 19
    },
    { 
        id: 29, 
        name: "Gundam Wing Model", 
        price: 2600000, 
        image: "gundam_wing.jpg", // Replace with actual filename
        category: "gundam", 
        stock: 4,
        description: "Construct the iconic Gundam Wing with this model kit featuring its distinctive wing design and beam weaponry for epic battles.",
        rating: 4.7,
        reviews: 21
    },
    { 
        id: 30, 
        name: "Gundam Strike Model", 
        price: 2400000, 
        image: "gundam_strike.jpg", // Replace with actual filename
        category: "gundam", 
        stock: 5,
        description: "Assemble the adaptable Gundam Strike with this model kit featuring multiple weapon systems and modular armor for various combat scenarios.",
        rating: 4.6,
        reviews: 20
    },
    { 
        id: 31, 
        name: "Gundam Exia Model", 
        price: 2700000, 
        image: "images/gundam_exia.jpg", // Replace with actual filename
        category: "gundam", 
        stock: 3,
        description: "Build the agile Gundam Exia with this detailed model kit featuring its unique sword weapons and transformable shield system.",
        rating: 4.8,
        reviews: 18
    },
    { 
        id: 32, 
        name: "Gundam Aegis Model", 
        price: 2300000, 
        image: "images/gundam_aegis.jpg", // Replace with actual filename
        category: "gundam", 
        stock: 6,
        description: "Create the versatile Gundam Aegis with this model kit featuring flight mode transformation and multiple weapon configurations.",
        rating: 4.5,
        reviews: 17
    },
    // Clothing
    { 
        id: 33, 
        name: "Attack on Titan T-Shirt", 
        price: 120000, 
        image: "aot_tshirt.jpg", // Replace with actual filename
        category: "clothing", 
        stock: 15,
        description: "Show your love for Attack on Titan with this comfortable cotton t-shirt featuring the iconic Survey Corps logo and design elements from the series.",
        rating: 4.6,
        reviews: 35
    },
    { 
        id: 34, 
        name: "Naruto Hoodie", 
        price: 200000, 
        image: "naruto_hoodie.jpg", // Replace with actual filename
        category: "clothing", 
        stock: 12,
        description: "Stay warm and stylish with this Naruto hoodie featuring the orange jumpsuit design and the Hidden Leaf Village symbol on the back.",
        rating: 4.7,
        reviews: 29
    },
    { 
        id: 35, 
        name: "Demon Slayer T-Shirt", 
        price: 110000, 
        image: "demon_slayer_tshirt.jpg", // Replace with actual filename
        category: "clothing", 
        stock: 18,
        description: "Wear your passion for Demon Slayer with this soft cotton t-shirt featuring the Hashira symbols and beautiful artwork from the series.",
        rating: 4.8,
        reviews: 42
    },
    { 
        id: 36, 
        name: "One Piece Hoodie", 
        price: 190000, 
        image: "one_piece_hoodie.jpg", // Replace with actual filename
        category: "clothing", 
        stock: 10,
        description: "Embrace your inner pirate with this One Piece hoodie featuring the Straw Hat Pirates logo and character art on the front and back.",
        rating: 4.7,
        reviews: 33
    },
    { 
        id: 37, 
        name: "My Hero Academia T-Shirt", 
        price: 100000, 
        image: "mha_tshirt.jpg", // Replace with actual filename
        category: "clothing", 
        stock: 20,
        description: "Show off your hero spirit with this My Hero Academia t-shirt featuring the UA High School logo and character designs from the series.",
        rating: 4.6,
        reviews: 38
    },
    { 
        id: 38, 
        name: "Dragon Ball Z Hoodie", 
        price: 180000, 
        image: "dbz_hoodie.jpg", // Replace with actual filename
        category: "clothing", 
        stock: 14,
        description: "Channel your inner Saiyan with this Dragon Ball Z hoodie featuring Goku's Super Saiyan form and the iconic Dragon Ball logo.",
        rating: 4.8,
        reviews: 31
    },
    { 
        id: 39, 
        name: "Sailor Moon T-Shirt", 
        price: 95000, 
        image: "images/sailor_moon_tshirt.jpg", // Replace with actual filename
        category: "clothing", 
        stock: 22,
        description: "Add some magic to your wardrobe with this Sailor Moon t-shirt featuring the magical girl in her classic transformation pose.",
        rating: 4.7,
        reviews: 27
    },
    { 
        id: 40, 
        name: "Bleach Hoodie", 
        price: 190000, 
        image: "images/bleach_hoodie.jpg", // Replace with actual filename
        category: "clothing", 
        stock: 16,
        description: "Show your Shinigami pride with this Bleach hoodie featuring Ichigo's Bankai form and the Gotei 13 insignia on the back.",
        rating: 4.6,
        reviews: 25
    }
];

// Update cart count and save to localStorage
function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
}

// Update cart display
function updateCartDisplay() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
        cartTotal.textContent = 'Total: Rp 0';
        return;
    }
    let cartHTML = '';
    let totalAmount = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">Rp ${item.price.toLocaleString()}</div>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="${item.stock}" data-id="${item.id}">
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
    });
    cartItemsContainer.innerHTML = cartHTML;
    cartTotal.textContent = `Total: Rp ${totalAmount.toLocaleString()}`;
    // Add event listeners to cart controls
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(i => i.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                updateCart();
                updateCartDisplay(); // Update display after change
            }
        });
    });
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(i => i.id === itemId);
            if (item && item.quantity < item.stock) {
                item.quantity += 1;
                updateCart();
                updateCartDisplay(); // Update display after change
            } else {
                showNotification(`Sorry, only ${item.stock} units available for ${item.name}`);
            }
        });
    });
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(i => i.id === itemId);
            const newQuantity = parseInt(this.value);
            if (newQuantity >= 1 && newQuantity <= item.stock) {
                item.quantity = newQuantity;
                updateCart();
                updateCartDisplay(); // Update display after change
            } else {
                this.value = item.quantity;
                showNotification(`Please enter a quantity between 1 and ${item.stock}`);
            }
        });
    });
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            cart = cart.filter(item => item.id !== itemId);
            updateCart();
            updateCartDisplay(); // Update display after removal
        });
    });
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Load products for products page
function loadProductsPage() {
    // Load figures
    const figures = products.filter(p => p.category === 'figures').slice(0, 6);
    renderProducts(figures, 'figuresGrid');
    // Load comics
    const comics = products.filter(p => p.category === 'comics').slice(0, 6);
    renderProducts(comics, 'comicsGrid');
    // Load keychains
    const keychains = products.filter(p => p.category === 'keychains').slice(0, 6);
    renderProducts(keychains, 'keychainsGrid');
    // Load gundam
    const gundam = products.filter(p => p.category === 'gundam').slice(0, 6);
    renderProducts(gundam, 'gundamGrid');
    // Load clothing
    const clothing = products.filter(p => p.category === 'clothing').slice(0, 6);
    renderProducts(clothing, 'clothingGrid');
}

// Load products for specific category page
function loadCategoryProducts(category) {
    const categoryProducts = products.filter(p => p.category === category);
    const containerId = 'all${category.charAt(0).toUpperCase() + category.slice(1)}Grid';
    renderProducts(categoryProducts, containerId);
}

// Render products to specified container
function renderProducts(productsList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found.`);
        return;
    }
    container.innerHTML = '';
    productsList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-id', product.id);
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">Rp ${product.price.toLocaleString()}</div>
                <div class="stock-info">Stock: ${product.stock}</div>
            </div>
        `;
        container.appendChild(productCard);
        // Add event listener to open product detail modal
        productCard.addEventListener('click', function() {
            showProductDetail(product);
        });
    });
}

// Show product detail modal
function showProductDetail(product) {
    productDetailTitle.textContent = product.name;
    productDetailImage.src = product.image;
    productDetailPrice.textContent = `Rp ${product.price.toLocaleString()}`;
    productDetailStock.textContent = `Stock: ${product.stock}`;
    productDescription.textContent = product.description;
    productRatingCount.textContent = `Based on ${product.reviews} reviews`;
    // Set rating stars
    productRatingStars.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        if (i < Math.floor(product.rating)) {
            star.textContent = '★';
        } else if (i < product.rating) {
            star.textContent = '★'; // Half star could be implemented with CSS
        } else {
            star.textContent = '☆';
        }
        productRatingStars.appendChild(star);
    }
    // Set data attributes for buttons
    buyNowBtn.setAttribute('data-id', product.id);
    addToCartBtn.setAttribute('data-id', product.id);
    // Show modal
    productDetailModal.style.display = 'flex';
}

// Event Listeners for Modals and Buttons (Applied globally)
document.addEventListener('DOMContentLoaded', function() {
    // Cart icon click
    cartIcon.addEventListener('click', function() {
        cartModal.style.display = 'flex';
        updateCartDisplay();
    });
    // Close cart modal
    closeCart.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    // Close cart modal when clicking outside
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (cart.length > 0) {
            alert('Thank you for your order! Your purchase will be processed soon.');
            cart = [];
            updateCart();
            cartModal.style.display = 'none';
        } else {
            showNotification('Your cart is empty!');
        }
    });
    // Product detail modal
    closeProduct.addEventListener('click', function() {
        productDetailModal.style.display = 'none';
    });
    productDetailModal.addEventListener('click', function(e) {
        if (e.target === productDetailModal) {
            productDetailModal.style.display = 'none';
        }
    });
    // Buy now button
    buyNowBtn.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        if (product && product.stock > 0) {
            alert('Thank you for your purchase! You have successfully bought ${product.name}.');
            product.stock -= 1; // Decrease stock
            updateCart();
            productDetailModal.style.display = 'none';
        } else {
            showNotification('Sorry, this item is out of stock.');
        }
    });
    // Add to cart button
    addToCartBtn.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        if (product && product.stock > 0) {
            // Check if item already in cart
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                if (existingItem.quantity < product.stock) {
                    existingItem.quantity += 1;
                } else {
                    showNotification('Sorry, only ${product.stock} units available for ${product.name}');
                    return;
                }
            } else {
                cart.push({
                    id: productId,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                    stock: product.stock
                });
            }
            updateCart();
            productDetailModal.style.display = 'none';
            // Show notification
            showNotification('Added ${product.name} to your cart!');
        } else {
            showNotification('Sorry, this item is out of stock.');
        }
    });
});