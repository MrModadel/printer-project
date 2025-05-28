
let burgerModal = document.querySelector('.burger-modal');
let burgerMenu = document.querySelector('.burger-menu');
let burgetClose = document.querySelector('.burger-modal__close');

burgerMenu.onclick = () => {
  burgerModal.style.display = 'block';
  setTimeout(() => {
    burgerModal.style.right = "0";
  }, 300)
}
burgetClose.onclick = () => {
  burgerModal.style.right = "-100%";

  setTimeout(() => {
    burgerModal.style.display = 'none';
  }, 300)
}
const swiper = new Swiper('.project-sw', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
const swiperCl = new Swiper('.swiper-clients', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: "auto", // Показывает 3 слайда одновременно
  spaceBetween: 20, // Расстояние между слайдами в пикселях
  initialSlide: 1,

});
let questions = document.querySelectorAll('.frequestions__el');

questions.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation(); // чтобы клик не дошел до window
    questions.forEach(q => {
      q.querySelector('.frequestions__el-answer').style.display = "none";
      q.style.borderRadius = '50px';
      q.querySelector('img').style.transform = "none";
    });
    item.querySelector('.frequestions__el-answer').style.display = 'block';
    item.style.borderRadius = '20px';
    item.querySelector('img').style.transform = "scale(-1)";
  });
});

// Закрытие при клике вне .frequestions__el
window.addEventListener('click', function () {
  questions.forEach(q => {
    q.querySelector('.frequestions__el-answer').style.display = "none";
    q.style.borderRadius = '50px';
    q.querySelector('img').style.transform = "none";
  });
});
