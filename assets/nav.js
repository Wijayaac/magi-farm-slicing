function headerNavigation() {
  const headerElm = document.querySelector(".header");
  if (!headerElm) {
    return;
  }

  const headerNav = document.querySelector("nav[data-visible]");
  // toggle menu
  const headerToggle = document.querySelector(".header__toggle");
  headerToggle.addEventListener("click", function () {
    let isExpanded = headerToggle.getAttribute("aria-expanded");
    if (isExpanded === "false") {
      headerToggle.setAttribute("aria-expanded", "true");
      headerNav.setAttribute("data-visible", "true");
    } else {
      headerToggle.setAttribute("aria-expanded", "false");
      headerNav.setAttribute("data-visible", "false");
    }
  });

  const submenuToggle = document.querySelectorAll(".nav__submenu-toggle");
  if (!submenuToggle[0]) {
    return;
  }

  submenuToggle.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const parentSubmenu = toggle.closest(".nav__item");
      const navSubmenu = parentSubmenu.querySelector(".nav__submenu");
      let submenuHeight = navSubmenu.getBoundingClientRect().height;
      if (parentSubmenu.classList.contains("active")) {
        parentSubmenu.classList.remove("active");
        navSubmenu.parentElement.removeAttribute("style");
        return;
      }

      parentSubmenu.classList.add("active");
      navSubmenu.parentElement.style.height = submenuHeight + "px";
    });
  });
}

function testimonialSlider() {
  const testimonialSlider = new Swiper(
    ".testimonial__wrapper .swiper-container",
    {
      slidesPerView: 1.3,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    }
  );
}

window.addEventListener("DOMContentLoaded", function () {
  headerNavigation();
  testimonialSlider();
});
