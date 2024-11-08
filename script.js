function openLightbox(src) {
    document.getElementById("lightbox-img").src = src; // Set the image source
    document.getElementById("lightbox").style.display = "flex"; // Show the lightbox
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none"; // Hide the lightbox
}

// JavaScript for carousel scrolling functionality
function scrollCarousel(direction) {
    const carousel = document.querySelector(".carousel");
    const scrollAmount = 210; // Width of one image (200px) + gap (10px)

    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

function updateCarouselButtons() {
    const carousel = document.querySelector(".carousel");
    const leftButton = document.querySelector(".carousel-btn.left");
    const rightButton = document.querySelector(".carousel-btn.right");

    // Check if we are at the start of the carousel
    if (carousel.scrollLeft <= 0) {
        leftButton.disabled = true;
        leftButton.classList.add("disabled");
    } else {
        leftButton.disabled = false;
        leftButton.classList.remove("disabled");
    }

    // Check if we are at the end of the carousel
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
        rightButton.disabled = true;
        rightButton.classList.add("disabled");
    } else {
        rightButton.disabled = false;
        rightButton.classList.remove("disabled");
    }
}

// Attach an event listener to update buttons whenever the carousel is scrolled
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
  
    // Initial button state update
    updateCarouselButtons();
  
    // Update buttons on scroll
    carousel.addEventListener("scroll", updateCarouselButtons);
  });