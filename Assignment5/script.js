const images = [
    "https://cdn.realtor.ca/listing/TS638787787138400000/reb7/highres/7/202506347_0.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwVi9oHtEEDy1mDghpeUzQ1ewL_ejLBvZyg&s",
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/1080p-Nature-Wallpaper.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/images6/Nature-HD-Wallpaper-Free-download.jpg",
    "https://m.media-amazon.com/images/I/A1Tg3wGjeeL.png"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

updateImage();

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
