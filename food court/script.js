// Food Court Data
const foodCourts = [
    {
        id: 1,
        name: "Main Food Court",
        image: "img/Main food.jpeg",
        description: "The central hub for food lovers with multiple outlets.",
        shops: [
            { name: "SANTUSHTI", description: "Shakes & More..", image: "img/santhusti.png" },
            { name: "Jagdish", description: "Vadodara's Taste Since 1945", image: "img/jagdish.png" },
            { name: "Indian Salt (Tandoor)", description: "Amritsari Kulcha | Chur Chur Naan | Chole Bhature", image: "img/indian salt.png" },
            { name: "Plus91 Boba", description: "The Korean Cafe", image: "img/91boba.png" },
            { name: "Messy Bowl", description: "Cafe & Lounge", image: "img/messybowl.png" },
            { name: "Wok & Chops", description: "PAN ASIAN FOOD", image: "img/wok&chops.png" },
            { name: "MARCOS DA' PIZZA", description: "Fresh Out of Oven", image: "img/marcospizza.png" },
            { name: "Havmor Ice cream", description: "Ice cream & more..", image: "img/havmor.png" },
            { name: "Brown Burger CO", description: "Choose your health", image: "img/brownburger.png" },
            { name: "GOODNESS By NAIRA", description: "Food For good friends", image: "img/goodness.png" },
            { name: "HONEST FOOD CENTER", description: "The Taste of Real Happiness", image: "img/honest.png" },
            { name: "Cafe Appetito", description: "Fresh Brown Delicious Bites", image: "img/cafeapp.png" },
            { name: "Kudrati Kahumbo", description: "Shots | Moctails | Juices", image: "img/kk.png" },
        ]
    },
    {
        id: 2,
        name: "Greenzy Court",
        image: "img/Greenzyfood.jpg",
        description: "Coffee, snacks, and good vibes.",
        shops: [
            { name: "Fruiteria", description: "Fresh finds For Bright Minds", image: "img/fruit.png" },
            { name: "Vadilal Ice cream", description: "Ice Cream & more..", image: "img/vadilal.png" },
            { name: "Night Express", description: "Tasty food & more..", image: "img/nightexpress.png" },
            { name: "Patels Rajwadi Chai", description: "Chai & coffee", image: "img/chai.png" },
            { name: "Egg Zone", description: "eggs and more", image: "img/eggzone.png" },
            { name: "Ur Choice Bakery", description: "Bakes the fresh", image: "img/urchoice.png" },
            { name: "The Vadapav factory", description: "Day & Night Vadapav and Dabeli", image: "img/d&nvadapav.png" },
            { name: "Mr. Puff", description: "Bakery & more..", image: "img/mrpuff.png" },
            { name: "Pahadi Mo:Mo", description: "The real taste of Nepal", image: "img/pmomo.png" },
            { name: "The Biryani Hub", description: "The best biryani", image: "img/thebiryanihub.png" },
            { name: "Het Staionery", description: "Books | Xerox & more..", image: "img/hetstationery.png" },
            { name: "Samosazz", description: "The Fun Triangle", image: "img/samosazz.png" }
        ]
    },
    {
        id: 3,
        name: "Will Be Updated Soon",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        description: "comming soon.",
        shops: [
            { name: "none", description: "none", image: "none" }
        ]
    },
    {
        id: 4,
        name: "Will Be Updated Soon",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        description: "comming soon.",
        shops: [
            { name: "none", description: "none", image: "none" }
        ]
    }
];

// Elements
const grid = document.getElementById('food-grid');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementById('close-btn');

// Render Grid
function renderFoodCourts() {
    grid.innerHTML = '';
    foodCourts.forEach(court => {
        const card = document.createElement('div');
        card.className = 'court-card';
        card.onclick = () => openModal(court);

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${court.image}" alt="${court.name}" class="card-img" onerror="this.src='https://via.placeholder.com/400x200?text=Food+Court'">
            </div>
            <div class="card-content">
                <h3 class="card-title">${court.name}</h3>
                <p class="card-sub">${court.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Open Modal
function openModal(court) {
    modalTitle.innerText = court.name;

    // Render Shops
    modalBody.innerHTML = '<div class="shops-list"></div>';
    const list = modalBody.querySelector('.shops-list');

    if (court.shops && court.shops.length > 0) {
        court.shops.forEach(shop => {
            const item = document.createElement('div');
            item.className = 'shop-item';
            item.innerHTML = `
                <img src="${shop.image}" alt="${shop.name}" class="shop-img" onerror="this.src='https://via.placeholder.com/60?text=Shop'">
                <div class="shop-info">
                    <h3>${shop.name}</h3>
                    <p>${shop.description}</p>
                </div>
            `;
            list.appendChild(item);
        });
    } else {
        list.innerHTML = '<p style="text-align:center; color:#666;">No shops listed yet.</p>';
    }

    modalOverlay.classList.add('active');
}

// Close Modal
function closeModal() {
    modalOverlay.classList.remove('active');
}

closeBtn.onclick = closeModal;
modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) closeModal();
};

// Initialize
renderFoodCourts();
