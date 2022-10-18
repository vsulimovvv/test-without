window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');
  $('#dob').mask('99/99/9999');
  $('select').niceSelect();

  // * ===== file upload
  // (function loadForm() {
  //   let inputs = document.querySelectorAll('.input-file-upload');
  //   Array.prototype.forEach.call(inputs, function (input) {
  //     let label = input.previousElementSibling,
  //       labelVal = label.querySelector('.custom-file-upload span').innerText;

  //     input.addEventListener('change', function (e) {
  //       let countFiles = '';
  //       if (this.files && this.files.length >= 1)
  //         countFiles = this.files.length;

  //       if (countFiles)
  //         label.querySelector('.custom-file-upload span').innerText =
  //           'Выбрано файлов: ' + countFiles;
  //       else
  //         label.querySelector('.custom-file-upload span').innerText = labelVal;
  //     });
  //   });
  // })();

  // * ===== Add Tags
  // (function addTags() {
  //   const tags = document.querySelectorAll('.tag input');
  //   tags.forEach((tag) => {
  //     if (tag) {
  //       tag.addEventListener('click', (e) => {
  //         tag.parentElement.classList.toggle('active');
  //       });
  //     }
  //   });
  // })();

  // * ===== Slider
  // (function slider() {
  //   const sliderEl = document.querySelector('.reviews__slider');
  //   new Swiper(sliderEl, {
  //     loop: true,
  //     spaceBetween: 40,
  //     slidesPerView: 'auto',
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       320: {
  //         spaceBetween: 25,
  //       },
  //       1560: { spaceBetween: 40 },
  //     },
  //   });
  // })();

  // * ===== Slider
  // (function slider() {
  //   const sliderEl = document.querySelector('.photos__slider');
  //   new Swiper(sliderEl, {
  //     loop: true,
  //     spaceBetween: 15,
  //     slidesPerView: 'auto',
  //     navigation: {
  //       nextEl: document.querySelector('.photos__slider .swiper-button-next'),
  //       prevEl: document.querySelector('.photos__slider .swiper-button-prev'),
  //     },
  //   });
  // })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.directions__slider');
    new Swiper(sliderEl, {
      navigation: {
        nextEl: document.querySelector('.directions .swiper-button-next'),
        prevEl: document.querySelector('.directions .swiper-button-prev'),
      },
      loop: true,
      slidesPerView: 1,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.mentors__slider');
    new Swiper(sliderEl, {
      navigation: {
        nextEl: document.querySelector('.mentors__slider .swiper-button-next'),
        prevEl: document.querySelector('.mentors__slider .swiper-button-prev'),
      },
      spaceBetween: 45,
      loop: true,
      slidesPerView: 'auto',
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        991: { spaceBetween: 45 },
      },
    });
  })();

  // * ===== Slider
  (function showMore() {
    const showMoreBtn = document.querySelector('.event-program__more');
    const showMoreContainer = document.querySelector('.event-program__list');
    if (showMoreBtn) {
      showMoreBtn.addEventListener('click', (e) => {
        showMoreContainer.classList.toggle('active');

        if (showMoreContainer.classList.contains('active')) {
          showMoreBtn.textContent = 'Скрыть';
        } else {
          showMoreBtn.textContent = 'Показать еще';
        }
      });
    }
  })();

  // * ===== toggleAccordion
  function toggleAccordion(accordionControl, accordionContent, accordion) {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  }

  toggleAccordion('.accordion-control', '.accordion-content', '.accordion');

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', (e) => {
      menu.style.transform = 'translateX(0)';
      body.classList.toggle('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.style.transform = 'translateX(-100%)';
      body.classList.remove('no-scroll');
    });
  })();

  // * Vanilla Calendar
  (function calendar() {
    const calendar = new VanillaCalendar('#calendar', {
      settings: {
        lang: 'ru',
        selection: {
          // day: 'multiple',
        },
      },
    });

    calendar.init();
  })();

  function showCalendarModal() {
    const days = document.querySelectorAll('.vanilla-calendar-day');
    const popup = document.querySelector('.calendar__popup');

    days.forEach((day) => {
      day.addEventListener('click', (e) => {
        popup.classList.add('active');
      });
    });
  }

  showCalendarModal();

  // * ===== Show Menu
  // (function showFilters() {
  //   const filtersBtn = document.querySelector('.header-profile__btn-filter');
  //   const filters = document.querySelector('.filters-mobile');
  //   const filtersCloseBtn = document.querySelector('.members-filters__close');
  //   const body = document.querySelector('body');

  //   if (filtersBtn) {
  //     filtersBtn.addEventListener('click', (e) => {
  //       filters.style.transform = 'translateX(0)';
  //       body.classList.toggle('no-scroll');
  //     });

  //     filtersCloseBtn.addEventListener('click', (e) => {
  //       filters.style.transform = 'translateX(-100%)';
  //       body.classList.remove('no-scroll');
  //     });
  //   }
  // })();

  function modalNeed() {
    const valueItems = document.querySelectorAll('.values__item');
    const popup = document.querySelector('.popup--value');
    let popupTitle = popup.querySelector('.popup__title');
    let popupText = popup.querySelector('.popup__text p');
    let popupImg = popup.querySelector('.popup__img');

    valueItems.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          const valueText = item.textContent;
          const ftext = item.getAttribute('data-ftext');
          const img = item.querySelector('.values__img').src;
          popupTitle.textContent = valueText;
          popupText.textContent = ftext;
          popupImg.setAttribute('src', img);
          popupImg.setAttribute('alt', valueText);
        });
      }
    });
  }

  modalNeed();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.enter__btn', '.popup--enter', '.popup__close');
    bindModal('.values__item', '.popup--value', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs(
    '.tabs',
    '.tabs__top-btn',
    '.tabs__content',
    'tabs__top-btn--active'
  );
});
