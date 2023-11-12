const API_PATH = 'http://localhost:3001/api'; // SENDING DATA
const mobileMenuBtn = document.querySelector('.header__menu-btn');
const mobileMenu = document.querySelector('.navigation__list');
const fullForm = document.querySelector('.full-form');
const links = Array.from(mobileMenu.children);
const form = document.querySelector('.form__wrapper'); // smallForm

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

// smallForm

toastr.options = {
  "closeButton": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "hideDuration": "1000",
}

function checkValidity(event) {
  const formNode = event.target.form
  const isValid = formNode.checkValidity()

  formNode.querySelector('button').disabled = !isValid
}

form.addEventListener('input', checkValidity)


function serializeForm(formNode) {
    const { elements } = formNode;
    const dataArr = Array.from(elements)
    .filter((item) => !!item.name)
        .map((element) => {
          const { name, value } = element
            
          return { name, value }
        })

        const data = {};

          for (let n = 0; n < dataArr.length; n++) {
            data[dataArr[n]["name"]] = dataArr[n]["value"];
          }

          console.log(data);
          return data;
        }

async function sendData(data) {
  return await fetch(`${API_PATH}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const data = serializeForm(event.target);

  toggleLoader();
  const { status } = await sendData(data);
  const response = await sendData(data);
  console.log(response);
  toggleLoader();
  if (status === 201) {
    // succsess
    toastr.success(`${data.name}! Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер`);
    event.target.reset();
    event.target.classList.remove('active');
    document.body.classList.remove('lock');

  } else {
    // error
    toastr.error('Что-то пошло не так')
    
  }
}

form.addEventListener('submit', handleFormSubmit);



// LOADER SERNDING

function toggleLoader() {
  const loader = document.getElementById('loader')
  loader.classList.toggle('hidden')
}    


//fullForm

fullForm.addEventListener('submit', handleFormSubmit);


// CAROUSEL

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
        ]
      });
}

carousel();

Fancybox.bind("[data-fancybox]", {

  });

  // SING-UP FORM

  const fullFormMenuBtn = document.querySelectorAll('.sing-up__button');
  const closeBtn = document.querySelector('.close');

  function openFullForm () {
    fullForm.classList.toggle('active');
    document.body.classList.toggle('lock');
  };

  fullFormMenuBtn.forEach((btn) => {
    btn.addEventListener('click', openFullForm)
});

  closeBtn.addEventListener('click', openFullForm);

  

  $(function () {
    $("#fullForm").validate({
      rules: {
        name: {
          required: true,
        },
        phone: {
          required: true,
        }
      },
      messages: {
        name: {
          required: 'Введите ваше имя'
        },
        phone: {
          required: 'Введите ваш номер телефона'
        }
      }
    });
  });

  jQuery(function ($) {
    $(".client-phone").mask("+7 (999) 999-99-99");
    });

