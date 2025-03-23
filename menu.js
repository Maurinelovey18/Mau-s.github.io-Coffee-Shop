function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const totalSlides = slider.children.length;
    let currentPosition = parseInt(slider.getAttribute('data-position')) || 0;
    if (currentPosition < totalSlides - 4) {
      currentPosition++;
      slider.style.transform = `translateX(-${currentPosition * 25}%)`;
      slider.setAttribute('data-position', currentPosition);
    }
  }
  
  function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    let currentPosition = parseInt(slider.getAttribute('data-position')) || 0;
    if (currentPosition > 0) {
      currentPosition--;
      slider.style.transform = `translateX(-${currentPosition * 25}%)`;
      slider.setAttribute('data-position', currentPosition);
    }
  }