let icon = document.getElementById('mode-toggle');
let imageContainers = document.getElementsByClassName('image-container');

if (document.body.className == 'dark') {
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

const toggleMode = () => {
    if (document.body.className == 'dark') {
        document.body.classList.replace('dark', 'light');
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