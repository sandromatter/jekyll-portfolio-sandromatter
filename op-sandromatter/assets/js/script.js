// Show current active section on cv page
window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.add("active");
      } else {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.remove("active");
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});

// Toggle cv sidebar and add class active
function toggleSidebar() {
  function showSidebar() {
    document.getElementById("cv-sidebar").classList.toggle("active");
  }

  function changeNoteText() {
    // Change note text
    const note = document.getElementById("note--text");
    if (note.innerHTML === "open") {
      note.innerHTML = "close";
    } else {
      note.innerHTML = "open";
    }
  }
  showSidebar();
  changeNoteText();
}

// Swiper JS
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
