// Rotating banner on the home page
(function () {
  const banner = document.getElementById('banner');
  if (!banner) return;

  const slides = Array.from(banner.querySelectorAll('.slide'));
  const dotsWrap = banner.querySelector('.banner-dots');
  const prevBtn = banner.querySelector('.banner-nav .prev');
  const nextBtn = banner.querySelector('.banner-nav .next');
  let current = slides.findIndex(s => s.classList.contains('is-active'));
  if (current < 0) current = 0;
  let timer;
  const INTERVAL = 5000;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
    if (i === current) dot.classList.add('is-active');
    dot.addEventListener('click', () => show(i, true));
    dotsWrap.appendChild(dot);
  });

  function show(index, userTriggered) {
    slides[current].classList.remove('is-active');
    dotsWrap.children[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dotsWrap.children[current].classList.add('is-active');
    if (userTriggered) restart();
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  prevBtn.addEventListener('click', () => show(current - 1, true));
  nextBtn.addEventListener('click', () => show(current + 1, true));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) restart();
})();
