const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll('img').length;
  let clickCounter = 0;
  arrow.addEventListener('click', () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get('transform')[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = 'translateX(0)';
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector('.toggle');
const items = document.querySelectorAll(
  '.full,.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.input-box,.input-box.open,.icon,.sub-profile-menu,.user-info,.profile-sub-menu-link,.toggle,.toggle-ball'
);

ball.addEventListener('click', () => {
  items.forEach((item) => {
    item.classList.toggle('active');
  });
});

//MENU

let profileMenu = document.getElementById('profileMenu');

function toggleMenu() {
  profileMenu.classList.toggle('open-menu');
}

//Search
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.icon'),
  closeIcon = document.querySelector('.close-icon');
searchIcon.addEventListener('click', () => inputBox.classList.add('open'));
closeIcon.addEventListener('click', () => inputBox.classList.remove('open'));
