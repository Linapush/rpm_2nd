// слайд-шоу для автоматического переключения изображения через определенные промежутки времени
// выбираем контейнер слайд-шоу и все изображения внутри него
// устанавливаем начальное положение для каждого изображения: первое изображение - левом краю контейнера, остальные - за пределами экрана справа

let slideShow = document.querySelector('.slide-show');
let images = Array.from(slideShow.querySelectorAll('.image'));
let currentIndex = 0;

// начальное положение
images.forEach((image, index) => {
  if (index === 0) { // первое изображение
    image.style.left = '0';
  } else { // остальные изображения
    image.style.left = '100%';
  }
});

// animateSlide()  вызывается периодически для анимации перехода между слайдами
// внутри этой функции мы выбираем текущее и следующее изображения на основе текущего индекса

function animateSlide() {
  let currentImage = images[currentIndex];
  let nextImage = images[(currentIndex + 1) % images.length];  // следующее изображение или вернуться к первому

// animate() для анимации перемещения текущего изображения за пределы экрана слева и перемещения следующего изображения в центр экрана

  // переместить текущее изображение за пределы экрана слева
  currentImage.animate([
    { left: '0%' },
    { left: '-100%' }
  ], {
    duration: 2500, // время перемещения
  });
  
  // переместить следующее изображение к центру
  nextImage.animate([
    { left: '100%' },
    { left: '0%' }
  ], {
    duration: 500, // время перемещения
    fill: 'forwards'
  });
  
  // после завершения анимации обновляем текущий индекс
  currentIndex = (currentIndex + 1) % images.length; // обновить текущий индекс
}
// setInterval() для вызова функции animateSlide() каждые 5 секунд
setInterval(animateSlide, 5000); // время задержки до следующего слайда