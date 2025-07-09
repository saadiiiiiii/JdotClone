document.addEventListener("DOMContentLoaded", () => {
    const announcementBarSection = document.getElementById("announcementBarSection");
    const closeButton = document.getElementById("closeAnnouncementBar");
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".scroll-left");
    const nextButton = document.querySelector(".scroll-right");
  
    let currentIndex = 0;
    const isHidden = localStorage.getItem("announcementBarHidden");

  if (isHidden === "true") {
    announcementBarSection.style.display = "none";
  }
  closeButton.addEventListener("click", () => {
    announcementBarSection.style.display = "none";
    localStorage.setItem("announcementBarHidden", "true");
  });
  
    const updateCarousel = () => {
      const itemWidth = items[0].clientWidth;
      const offset = -currentIndex * itemWidth;
      track.style.transform = `translateX(${offset}px)`;
    };
  
    prevButton.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });
  
    // Initial Update
    updateCarousel();
  });
  