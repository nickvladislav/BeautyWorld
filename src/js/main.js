// HEADER-LINK
const mobileMenuBtn = document.querySelector('.header__menu-btn');
const mobileMenu = document.querySelector('.navigation__list');
const links = Array.from(mobileMenu.children);

function toggleMenu () {
    mobileMenu.classList.toggle('mobile__open');
    mobileMenuBtn.classList.toggle('active');
    document.body.classList.toggle('lock');
};

mobileMenuBtn.addEventListener('click', toggleMenu);

links.forEach((link) => {
    link.addEventListener('click', toggleMenu)
});

// TABS-PRICE

const tabsPrice = document.querySelectorAll('.service-price__link');
const tabsItems = document.querySelectorAll('.service-price__wrapper');

tabsPrice.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsPrice.forEach(function(item) {
                item.classList.remove('active');
            });
            
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    }); 
}

document.querySelector('.service-price__link').click();

// SUBMIT-FORM

function serializeForm(formNode) {
    const { elements } = formNode;
    const data = Array.from(elements)
    .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element;
            
            return { name, value}
        })

        console.log(data);
}

function submitForm(event) {
    event.preventDefault();
    serializeForm(form);
}

const form = document.querySelector('.form__wrapper');
form.addEventListener('submit', submitForm);

// PORTPHOLIO

function carousel() {
    $('.portfolio-about').slick({
        nextArrow: '#right',
        prevArrow: '#left',
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2150,
                settings: {
                  slidesToShow: 5,
                  infinite: true,
                }
              },
              {
                breakpoint: 1800,
                settings: {
                  slidesToShow: 4,
                  infinite: true,
                }
              },
              {
                breakpoint: 1450,
                settings: {
                  slidesToShow: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 1282,
                settings: {
                  slidesToShow: 5,
                  infinite: true,
                }
              },
              {
                breakpoint: 1150,
                settings: {
                  slidesToShow: 4,
                  infinite: true,
                }
              },
              {
                breakpoint: 950,
                settings: {
                  slidesToShow: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  infinite: true,
                  centerMode: true,
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 2,
                  infinite: true,
                  centerMode: true,
                  focusOnSelect: true,
                }
              },
              {
                breakpoint: 422,
                settings: {
                  slidesToShow: 1,
                  infinite: true,
                  centerMode: true,
                  focusOnSelect: true,
                }
              },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
};

carousel();

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });