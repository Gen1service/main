var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  spaceBetween: 30,
  

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});
