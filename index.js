function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("-translate-x-full");
  console.log("clicked");
}

// JavaScript Logic for Auto Carousel
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel > div");
const indicators = document.querySelectorAll(".indicator");
const totalSlides = slides.length;

let currentIndex = 0;

// Function to update the carousel
function updateCarousel() {
  const offset = -currentIndex * 100; // Calculate the transform value
  carousel.style.transform = `translateX(${offset}%)`;

  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.style.backgroundColor =
      index === currentIndex ? "white" : "rgba(255, 255, 255, 0.5)";
    indicator.style.transform =
      index === currentIndex ? "scale(1.25)" : "scale(1)";
  });
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  updateCarousel();
}

// Initialize auto slide change
let interval = setInterval(nextSlide, 3000);

// Add click event for manual indicator selection
indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    clearInterval(interval); // Stop auto-slide when manually clicked
    currentIndex = parseInt(indicator.getAttribute("data-slide"));
    updateCarousel();
    interval = setInterval(nextSlide, 3000); // Resume auto-slide
  });
});

// Initialize the carousel
updateCarousel();

document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("our-business-line");
  const brand = document.getElementById("PT JYN GROUP INDONESIA");
  const carousel = document.getElementById("carousel");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tambahkan efek saat carousel terlihat
          link.classList.add("text-gold");
          link.classList.remove("text-white");
          brand.classList.add("text-white");
          brand.classList.remove("text-gold");
        } else {
          // Kembalikan ke kondisi default
          link.classList.remove("text-gold");
          brand.classList.remove("text-white");
          link.classList.add("text-white");
          brand.classList.add("text-gold");
        }
      });
    },
    {
      root: null, // Menggunakan viewport sebagai root
      threshold: 0.5, // 50% dari carousel harus terlihat
    }
  );

  observer.observe(carousel);
});
