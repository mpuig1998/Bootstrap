const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
interval: 5000,
ride: "carousel",
wrap: true
})