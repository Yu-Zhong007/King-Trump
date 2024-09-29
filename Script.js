var prevScrollPos = window.scrollY;
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.right_phone');
const closeButton = document.querySelector('.close-button');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.nav').classList.remove('slide-up');
  } else {
    document.querySelector('.nav').classList.add('slide-up');
  }

  prevScrollPos = currentScrollPos;
});



burgerMenu.addEventListener('click', (event) => {
  menu.classList.toggle('active');
  event.stopPropagation(); // Prevent click event from reaching the document

  // Disable scrolling when the menu is open
  if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
  } else {
      document.body.style.overflow = 'auto';
  }
});

menu.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click event from reaching the document
});

closeButton.addEventListener('click', (event) => {
  menu.classList.remove('active');
  event.stopPropagation(); // Prevent click event from reaching the document

  // Enable scrolling when the menu is closed
  document.body.style.overflow = 'auto';
});

// Close the menu when the user clicks anywhere outside the menu
document.addEventListener('click', () => {
  menu.classList.remove('active');

  // Enable scrolling when the menu is closed
  document.body.style.overflow = 'auto';
});