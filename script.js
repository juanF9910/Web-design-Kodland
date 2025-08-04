
  const pista = document.querySelector('.carousel__pista');
  const prevBtn = document.querySelector('.carousel__btn--prev');
  const nextBtn = document.querySelector('.carousel__btn--next');
  const itemWidth = pista.firstElementChild.offsetWidth;
  let bloqueado = false;

  function rotarIzquierdaAnimada() {
    if (bloqueado) return;
    bloqueado = true;

    pista.style.transition = 'transform 0.5s ease';
    pista.style.transform = `translateX(-${itemWidth}px)`;

    setTimeout(() => {
      pista.appendChild(pista.firstElementChild);
      pista.style.transition = 'none';
      pista.style.transform = 'translateX(0)';
      bloqueado = false;
    }, 500);
  }

  function rotarDerechaAnimada() {
    if (bloqueado) return;
    bloqueado = true;

    pista.insertBefore(pista.lastElementChild, pista.firstElementChild);
    pista.style.transition = 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)';

    pista.style.transform = `translateX(-${itemWidth}px)`;
    void pista.offsetWidth; 
    pista.style.transition = 'transform 0.5s ease';
    pista.style.transform = 'translateX(0)';

    setTimeout(() => {
      bloqueado = false;
    }, 500);
  }


  nextBtn.addEventListener('click', rotarDerechaAnimada); 
  prevBtn.addEventListener('click', rotarIzquierdaAnimada); 

