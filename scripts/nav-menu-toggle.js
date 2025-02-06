
// variables for menu toggle
const button = document.getElementById('nav-button');
const list = document.getElementById('nav-list');

// variables for icon switching
const svgOpen = document.getElementById('open-menu-svg');
const svgClose = document.getElementById('close-menu-svg');

svgClose.style.display = 'none';

button.addEventListener('click', function(){
    // toggle menu
    list.classList.toggle('toggled');

    // switch icons
    if (list.classList.contains('toggled')) {
        svgClose.style.display = 'block';
        svgOpen.style.display = 'none';
        button.style.backgroundColor = '#09121a';
    }
    else {
        svgClose.style.display = 'none';
        svgOpen.style.display = 'block';
        button.style.backgroundColor = '#FFFFFF';
    }
})


