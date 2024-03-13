const button = document.getElementById('_button');
const notification = document.getElementById('_notification');

function changeColor() {
    var button = document.querySelector('.button');
    button.classList.toggle('clicked');
}

button.addEventListener('click', () => {
    const counter = Number(notification.getAttribute('data-count')); 

    notification.setAttribute('data-count', counter + 1);
    notification.classList.add('count');
    notification.classList.add('notify');

    button.classList.add('active');
});

notification.addEventListener('animationend', () => { 
    notification.classList.remove('notify');
    button.classList.remove('active');
});
