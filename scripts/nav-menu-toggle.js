

const button = document.getElementById('nav-button');
const list = document.getElementById('nav-list');

button.addEventListener('click', function(){
    list.classList.toggle('toggled');
})

