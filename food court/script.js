// Food Court Data
const foodCourts = [
    {
        id: 1,
        name: "Main Food Court",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
        description: "The central hub for food lovers with multiple outlets.",
        shops: [
            { name: "SANTUSHTI", description: "Shakes & More..", image: "img/santhusti.png" },
            { name: "Jagdish", description: "Vadodara's Taste Since 1945", image: "img/jagdish.png" },
            { name: "Indian Salt (Tandoor)", description: "Naan, Chole & more..", image: "img/indian salt.png" },
            { name: "Plus91 Boba", description: "The Korean Cafe", image: "img/91boba.png" },
            { name: "Messy Bowl", description: "Cafe & Lounge", image: "img/messybowl.png" },
            { name: "Wok & Chops", description: "PAN ASIAN FOOD", image: "img/wok&chops.png" },
            { name: "MARCOS DA' PIZZA", description: "Fresh Out of Oven", image: "img/marcospizza.png" },
            { name: "Havmor Ice cream", description: "Ice cream & more..", image: "img/havmor.png" },
        ]
    },
    {
        id: 2,
        name: "Nescafe Area",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
        description: "Coffee, snacks, and good vibes.",
        shops: [
            { name: "Nescafe", description: "Coffee & Maggi", image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=200&q=80" },
            { name: "Ice Cream Parlour", description: "Shakes & Scoops", image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=200&q=80" }
        ]
    },
    {
        id: 3,
        name: "Hostel Mess Complex",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        description: "Daily meals for hostel students.",
        shops: [
            { name: "Mess 1", description: "Regular Thali", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80" },
            { name: "Fruit Shop", description: "Fresh Fruits & Juices", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=200&q=80" }
        ]
    },
    {
        id: 4,
        name: "Architecture Canteen",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        description: "A cozy spot near the architecture building.",
        shops: [
            { name: "Snack Point", description: "Sandwiches & Tea", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80" }
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
