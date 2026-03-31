// Tracker 1: Checks if the file is actually loading
console.log("✅ script.js has successfully loaded!");

const toggleBtn = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Tracker 2: Checks if JavaScript can actually find your HTML elements
console.log("Toggle Button found:", toggleBtn);
console.log("Sidebar found:", sidebar);

// When the hamburger button is clicked
toggleBtn.addEventListener('click', function() {
    // Tracker 3: Checks if the click is registering and what the screen size is
    console.log("🖱️ Hamburger clicked! Current screen width is:", window.innerWidth);

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
        console.log("📱 Mobile menu triggered");
    } else {
        sidebar.classList.toggle("collapsed");
        console.log("💻 Desktop menu collapsed");
    }
});

// When a user clicks the dark background on mobile, close the menu
overlay.addEventListener('click', function() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// Safety check: If user resizes screen from mobile to desktop, remove mobile active classes
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }
});
// --- MODAL LOGIC FOR PRODUCTS PAGE ---

const addProductBtn = document.querySelector('.add-btn');
const productModal = document.getElementById('addProductModal');
const closeModalBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');

// SAFETY CHECK: We only want to run this code if the modal actually exists on the page
if (addProductBtn && productModal) {
    
    // 1. Open modal when clicking the blue "Add New Product" button
    addProductBtn.addEventListener('click', () => {
        productModal.classList.add('show');
    });

    // 2. Function to close the modal
    const closeTheModal = () => {
        productModal.classList.remove('show');
    };

    // 3. Close it if they click the "X" or the "Cancel" button
    closeModalBtn.addEventListener('click', closeTheModal);
    cancelBtn.addEventListener('click', closeTheModal);

    // 4. (Bonus) Close it if they click outside the white box on the dark background
    window.addEventListener('click', (event) => {
        if (event.target === productModal) {
            closeTheModal();
        }
    });
}