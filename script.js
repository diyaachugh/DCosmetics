// Shop Now button interaction
const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", () => {
    alert("✨ Welcome to DCosmetics!\n\nOur online store is coming soon. Stay tuned for exciting beauty products!");
});

// Navbar shadow effect on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
    } else {
        nav.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
    }
});