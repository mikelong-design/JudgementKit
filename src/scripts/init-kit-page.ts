function setupMenu(): void {
  const menuToggle = document.querySelector<HTMLElement>('[data-menu-toggle]');
  const mobileMenu = document.querySelector<HTMLElement>('#mobile-nav');

  if (!menuToggle || !mobileMenu || menuToggle.dataset.bound === 'true') {
    return;
  }

  menuToggle.dataset.bound = 'true';

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.setAttribute('data-open', String(!expanded));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('data-open', 'false');
    });
  });
}

function setupCarousels(): void {
  const carousels = Array.from(document.querySelectorAll<HTMLElement>('[data-carousel]'));

  carousels.forEach((carousel) => {
    if (carousel.dataset.bound === 'true') {
      return;
    }

    const slides = Array.from(carousel.querySelectorAll<HTMLElement>('[data-slide]'));
    const dots = Array.from(carousel.querySelectorAll<HTMLElement>('[data-carousel-dot]'));
    const prev = carousel.querySelector<HTMLElement>('[data-carousel-prev]');
    const next = carousel.querySelector<HTMLElement>('[data-carousel-next]');

    if (slides.length === 0 || dots.length === 0) {
      return;
    }

    let activeIndex = 0;

    const setSlide = (index: number): void => {
      activeIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex;
        slide.hidden = !isActive;
        slide.setAttribute('aria-hidden', String(!isActive));
      });

      dots.forEach((dot, dotIndex) => {
        dot.setAttribute('aria-current', dotIndex === activeIndex ? 'true' : 'false');
      });
    };

    prev?.addEventListener('click', () => setSlide(activeIndex - 1));
    next?.addEventListener('click', () => setSlide(activeIndex + 1));

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => setSlide(index));
    });

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSlide(activeIndex - 1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSlide(activeIndex + 1);
      }
    });

    setSlide(0);
    carousel.dataset.bound = 'true';
  });
}

function setupMatrixFilter(): void {
  const matrixSearch = document.querySelector<HTMLInputElement>('[data-matrix-search]');
  const matrixClear = document.querySelector<HTMLButtonElement>('[data-matrix-clear]');
  const matrixCount = document.querySelector<HTMLElement>('[data-matrix-count]');
  const matrixRows = Array.from(document.querySelectorAll<HTMLElement>('[data-matrix-row]'));
  const matrixCards = Array.from(document.querySelectorAll<HTMLElement>('[data-matrix-card]'));

  if (!matrixSearch || matrixRows.length === 0 || matrixSearch.dataset.bound === 'true') {
    return;
  }

  const applyFilter = (query: string): void => {
    const normalized = query.trim().toLowerCase();
    let visible = 0;

    matrixRows.forEach((row, index) => {
      const haystack = row.getAttribute('data-search') || '';
      const match = haystack.includes(normalized);
      row.hidden = !match;

      if (matrixCards[index]) {
        matrixCards[index].hidden = !match;
      }

      if (match) {
        visible += 1;
      }
    });

    if (matrixCount) {
      matrixCount.textContent = `Showing ${visible} of ${matrixRows.length}`;
    }
  };

  matrixSearch.addEventListener('input', (event) => {
    const value = (event.target as HTMLInputElement).value || '';
    applyFilter(value);
  });

  matrixClear?.addEventListener('click', () => {
    matrixSearch.value = '';
    applyFilter('');
    matrixSearch.focus();
  });

  applyFilter('');
  matrixSearch.dataset.bound = 'true';
}

export function initKitPage(): void {
  setupMenu();
  setupCarousels();
  setupMatrixFilter();
}
