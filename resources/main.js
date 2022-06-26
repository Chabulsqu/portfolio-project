let checkbox = document.querySelector('input');
let root = document.querySelector(':root');
function toggle () {
   let computedStyle = getComputedStyle(root);
   computedStyle.getPropertyValue('--text-color') === 'hsl(0, 0%, 9%)' ? checkbox.style.setProperty('--text-color', 'hsl(0, 0%, 99%)') : checkbox.style.setProperty('--text-color', 'hsl(0, 0%, 9%)');
}