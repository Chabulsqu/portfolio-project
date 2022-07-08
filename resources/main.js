let head = document.head;
let link;
let dropdowns = document.getElementsByClassName('about');

const toggleMode = () => {
    if (document.querySelector('body').className == 'dark') {
        document.querySelector('body').classList.replace('dark', 'light');
        document.head.removeChild(link);
        dropdowns[0].src = './resources/images/dropdown_arrow_light.svg';
        dropdowns[1].src = './resources/images/dropdown_arrow_light.svg';
    } else { 
        document.querySelector('body').classList.replace('light', 'dark');
        link = document.createElement('link');
        document.head.appendChild(link);
        link.href = './zbeforepseudoclass.css';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        dropdowns[0].src = './resources/images/dropdown_arrow_dark.svg';
        dropdowns[1].src = './resources/images/dropdown_arrow_dark.svg';
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
