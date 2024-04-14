const countryNames = [
  "United States",
  "India",
  "France",
  "Germany",
  "Australia",
  "Canada",
  "Japan",
  "Brazil",
  "Italy",
  "Spain",
];

function changeCountryName() {
  const randomIndex = Math.floor(Math.random() * countryNames.length);
  document.getElementById("countryName").textContent =
    "To Visit " + countryNames[randomIndex];
}

setInterval(changeCountryName, 1300);

const images = document.querySelectorAll(".galleryImg");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
const maxIndex = images.length - 1;

function showImages() {
  images.forEach((image, index) => {
    if (index >= currentIndex && index <= currentIndex + 2) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

nextButton.addEventListener("click", () => {
  if (currentIndex < maxIndex - 2) {
    currentIndex++;
    showImages();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showImages();
  }
});

showImages();
