let icon = document.getElementById('mode-toggle');
let link;
let dropdowns = document.getElementsByClassName('about');
let firstDrop = document.getElementById('first-drop');
let secondDrop = document.getElementById('second-drop');
let imageContainers = document.getElementsByClassName('image-container');
let w = window.innerWidth;
let menu = document.querySelector('img');


if (document.querySelector('body').className == 'dark') {
    firstDrop.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(214deg) brightness(116%) contrast(108%)';
    secondDrop.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(214deg) brightness(116%) contrast(108%)';
    icon.alt = 'Toggle Light mode';
    icon.src = './resources/images/light-mode.svg';
    icon.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(214deg) brightness(116%) contrast(108%)';
    for (let box of imageContainers) {
      box.style.backgroundColor = 'var(--secondary-background-color)';
      box.style.filter = 'none';
    }
} else {
    icon.alt = '.Toggle Dark Mode';
    icon.src = './resources/images/dark-mode.svg';
    icon.style.filter = 'none';
    for (let box of imageContainers) {
      box.style.backgroundColor = '';
      box.style.filter = 'drop-shadow(9px 9px 3px var(--secondary-background-color))';
    }
}

document.querySelector('h1').style.opacity = '1';
document.querySelector('h1').style.top = '12%';

const toggleMode = () => {
    if (document.body.className == 'dark') {
        document.body.classList.replace('dark', 'light');
        firstDrop.style.filter = '';
        secondDrop.style.filter = '';
        document.head.removeChild(link);
        icon.src = './resources/images/dark-mode.svg';
        icon.alt = 'Toggle Dark mode';
        icon.style.filter = 'none';
        for (let box of imageContainers) {
         box.style.backgroundColor = '';
         box.style.filter = 'drop-shadow(9px 9px 3px var(--secondary-background-color))';
       }
    } else {
        document.body.classList.replace('light', 'dark');
        link = document.createElement('link');
        document.head.appendChild(link);
        link.href = './resources/zbeforepseudoclass.css';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        icon.src = './resources/images/light-mode.svg';
        icon.alt = 'Toggle Light mode';
        icon.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(214deg) brightness(116%) contrast(108%)';
        firstDrop.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(214deg) brightness(116%) contrast(108%)';
        secondDrop.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(214deg) brightness(116%) contrast(108%)';
        for (let box of imageContainers) {
         box.style.backgroundColor = 'var(--secondary-background-color)';
         box.style.filter = 'none';
       }
    }
};

const toggleDropdown = event => {
    if (event.target.style.transform === 'rotate(90deg)') {
        event.target.style.transform = 'rotate(0deg)';
        event.target.id == 'first-drop' ? dropdowns[0].style.display = 'none' : dropdowns[1].style.display = 'none';
    } else {
        event.target.style.transform = 'rotate(90deg)';
        document.getElementById('second-drop').style.marginLeft = '18%';
        event.target.id == 'first-drop' ? dropdowns[0].style.display = 'flex' : dropdowns[1].style.display = 'flex';
    }
}

const openMenu = () => {
    document.querySelector('ul').style.transform = 'translateX(-70.75vw)';
    document.querySelector('#close').style.display = 'inline-block';
    document.getElementsByClassName('mobile')[1].style.display = 'none';
    document.querySelector('h1').style.visibility = 'hidden';
}
const closeMenu = () => {
    document.querySelector('ul').style.transform = 'translateX(30vw)';
    document.querySelector('#close').style.display = 'none';
    document.getElementsByClassName('mobile')[1].style.display = 'block';
    document.querySelector('h1').style.visibility = 'visible';
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

