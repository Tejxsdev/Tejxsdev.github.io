let images = [
    "gallery/1.jpg",
    "gallery/2.jpg",
    "gallery/3.jpg",
    "gallery/4.jpg",
    "gallery/5.jpg",
    "gallery/6.jpg",
    "gallery/7.jpeg",
    "gallery/8.jpeg",
];

// Render images to the container
for (let image of images) {
    document.getElementById("images-container").innerHTML += '<img class="photos" src="' + image + '" width="250px"></img>';
}

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentIndex = 0; 

document.querySelectorAll(".photos").forEach((img, index) => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = images[index];
        currentIndex = index;
        document.body.style.overflow = "hidden";
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
});

prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1) % images.length;
    modalImg.src = images[currentIndex];
});