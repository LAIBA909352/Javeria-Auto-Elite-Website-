// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

// Car Search and Category Filter
const search = document.getElementById("search");
const category = document.getElementById("category");
const cars = document.querySelectorAll(".car-card");
const noResults = document.getElementById("noResults");

function filterCars() {
  const searchValue = search.value.toLowerCase();
  const categoryValue = category.value;

  let visibleCars = 0;

  cars.forEach((car) => {
    const carName = car.dataset.name.toLowerCase();
    const carCategory = car.dataset.category;

    const matchesSearch = carName.includes(searchValue);

    const matchesCategory =
      categoryValue === "all" || categoryValue === carCategory;

    if (matchesSearch && matchesCategory) {
      car.style.display = "block";
      visibleCars++;
    } else {
      car.style.display = "none";
    }
  });

  noResults.hidden = visibleCars !== 0;
}

search.addEventListener("input", filterCars);
category.addEventListener("change", filterCars);

// Car Details Buttons
document.querySelectorAll(".details-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const carName = this.dataset.car;

    alert(
      "You selected: " + carName + "\nContact Auto Elite for more information.",
    );
  });
});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  document.getElementById("formMessage").textContent =
    "Thank you " + name + "! Your message has been received.";

  contactForm.reset();
});
