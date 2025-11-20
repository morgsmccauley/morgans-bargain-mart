// Product catalog configuration
const products = [
    {
        title: "Ergobaby 360 baby carrier",
        description: "Hands-free baby carrying!",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3wSf5Ddt_tri9W1ahr3jV-oJZfQwW_YOTw2phBAUEcZ0h8h4sJTpnf__pBcWhAgw18dszACjQbVxKt02YKGm8c1XAF1ZUCL9-Vl_g8gcbihr6ihnJJahctw",
        price: 100.00,
        condition: "Good",
        additionalInfo: "Includes: Original bulb"
    },
    {
        title: "Stokke Tripp Trapp High Chair",
        description: "Portable cassette player with headphones. Perfect for nostalgic music lovers!",
        image: "https://assets.babybunting.com.au/prd/118293_1.jpg?tr=w-2000,h-2000,f-webp,q-80,cm-pad_resize",
        price: 150.00,
        condition: "Good",
        additionalInfo: "Features: Auto-reverse"
    },
    {
        title: "Gaming Console",
        description: "Classic 16-bit gaming console with 2 controllers. Relive your childhood!",
        image: "https://via.placeholder.com/300x300/95e1d3/ffffff?text=Item+3",
        price: 120.00,
        condition: "Very Good",
        additionalInfo: "Includes: 5 games"
    },
    {
        title: "Polaroid Camera",
        description: "Instant camera from the 90s. Captures memories in physical form instantly!",
        image: "https://via.placeholder.com/300x300/f38181/ffffff?text=Item+4",
        price: 85.00,
        condition: "Good",
        additionalInfo: "Film: Available separately"
    },
    {
        title: "Vintage Typewriter",
        description: "Mechanical typewriter in working condition. Perfect for writers seeking authenticity!",
        image: "https://via.placeholder.com/300x300/aa96da/ffffff?text=Item+5",
        price: 150.00,
        condition: "Excellent",
        additionalInfo: "Type: Manual"
    },
    {
        title: "Neon Wall Clock",
        description: "Battery-powered neon-style clock. Lights up your room with retro vibes!",
        image: "https://via.placeholder.com/300x300/fcbad3/ffffff?text=Item+6",
        price: 35.00,
        condition: "Like New",
        additionalInfo: "Features: LED backlight"
    }
];

// Function to render products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-description">${product.description}</p>
                <div class="product-details">
                    <span class="detail">📏 Condition: ${product.condition}</span>
                    <span class="detail">📦 ${product.additionalInfo}</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', renderProducts);
