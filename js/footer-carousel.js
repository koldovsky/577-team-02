const carouselImages = [
    'img/footer-kyiv.jfif',
    'img/footer-chornobul.jpg',
    'img/footer-karpatu.jpg',

]

let currentIdx = 0;

function showCurrImg() {
    const imgContainer = document.querySelector('.footer-carousel .footer-img');
    imgContainer.src = carouselImages[currentIdx];
}

document.querySelector('.next-pic').addEventListener('click', next);
function next() {
    currentIdx++;
    if (currentIdx > carouselImages.length - 1) currentIdx = 0;
    showCurrImg();
}

document.querySelector('.prev-pic').addEventListener('click', prev);
function prev() {
    currentIdx--;
    if (currentIdx < 0) currentIdx = carouselImages.length - 1;
    showCurrImg();
}

showCurrImg()

setInterval(next, 3000);