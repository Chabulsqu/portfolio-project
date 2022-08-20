let icon = document.getElementById('mode-toggle');
let imageContainers = document.getElementsByClassName('image-container');
let w = window.innerWidth;
let darkMode = localStorage.getItem('dark-mode');
link = document.createElement('link');

const toggleMode = () => {
  if (document.body.className == 'dark') {
    document.body.classList.replace('dark', 'light');
    localStorage.removeItem('dark-mode');
    icon.src = './resources/images/dark-mode.svg';
    icon.alt = 'Toggle Dark mode';
    icon.style.filter = 'none';
    for (let box of imageContainers) {
      box.style.backgroundColor = '';
      box.style.filter = 'drop-shadow(9px 9px 3px var(--secondary-background-color))';
     }
     if (link.href === './styles2.css') {
      document.head.removeChild(link);
   }
  } else {
    document.body.classList.replace('light', 'dark');
    localStorage.setItem('dark-mode', 'enabled');
    icon.src = './resources/images/light-mode.svg';
    icon.alt = 'Toggle Light mode';
    icon.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(214deg) brightness(116%) contrast(108%)';
    for (let box of imageContainers) {
      box.style.backgroundColor = 'var(--secondary-background-color)';
      box.style.filter = 'none';
     }
     document.head.appendChild(link);
     link.href = './styles2.css';
     link.type = 'text/css';
     link.rel = 'stylesheet';
  }
};

if (localStorage.getItem('dark-mode') !== null) {
  toggleMode();
} else {
document.body.classList.replace('light', 'dark');
  toggleMode();
}


const openMenu = () => {
    document.querySelector('ul').style.transform = 'translateX(-74vw)';
    document.querySelector('#close').style.display = 'inline-block';
    document.getElementsByClassName('mobile')[1].style.display = 'none';
    document.getElementsByTagName('div')[1].style.visibility = 'hidden';
    for (image of imageContainers) {
      image.style.visibility = 'hidden';
    }
}
const closeMenu = () => {
    document.querySelector('ul').style.transform = 'translateX(30vw)';
    document.querySelector('#close').style.display = 'none';
    document.getElementsByClassName('mobile')[1].style.display = 'block';
    document.getElementsByTagName('div')[1].style.visibility = 'visible';
    for (image of imageContainers) {
      image.style.visibility = 'visible';
    }
}

function preventKeyBoardScroll(e){
  e.preventDefault();
  e.stopPropagation();

  return false;
}
function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function disable(){
  document.body.addEventListener('touchmove', preventKeyBoardScroll, {passive:false});
  document.body.addEventListener('wheel', preventScroll, {passive:false});
}

function enable(){
  document.body.removeEventListener('touchmove', preventKeyBoardScroll);
  document.body.removeEventListener('wheel', preventScroll);
}


document.getElementsByClassName('mobile')[1].addEventListener('click', openMenu);
document.querySelector('#close').addEventListener('click', closeMenu);
document.getElementsByClassName('mobile')[1].addEventListener('click', disable, {passive:false});
document.querySelector('#close').addEventListener('click', enable, {passive:false});
document.body.addEventListener('resize', () => {
  if (w > 768) {
    document.querySelector('#close').style.display = 'none';
    document.getElementsByClassName('mobile')[1].style.display = 'none';
  }
})