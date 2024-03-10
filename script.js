// Like effect
const buttons = document.querySelectorAll(".like-button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        var buttonColor = button.style.color;
        if (buttonColor === "rgb(235, 17, 17)")
            buttonColor = "rgb(60, 50, 40)";
        else
            buttonColor = "rgb(235, 17, 17)";

        button.style.color = buttonColor;
    });
});


/* Slide effect */

const imageArray = [
    `images/img1.jpg`,
    `images/img2.jpg`,
    `images/img3.jpg` 
];
let currentImage = document.getElementById("slide-image");
let index = 0;

function prevImage() {
    if (index > 0) index--;
    else index = imageArray.length - 1;

    showImage(index);
}

function nextImage() {
    if (index < imageArray.length - 1) index++;
    else index = 0;

    showImage(index);
}

function showImage(index) {
    currentImage.style.opacity = 0;
    setTimeout(() => {
        currentImage.src = imageArray[index]; 
        currentImage.style.opacity = 1;
    }, 200);
}

setInterval(nextImage, 5000);