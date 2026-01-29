console.log('script chargé');

const button = document.querySelector('#btn-action');
const message = document.querySelector('#message');
const counterElement = document.querySelector('#counter');

let count = 0;

button.addEventListener('click', () => {
    count = count + 1;
    message.textContent = 'Le DOM Fonctionne';
    counterElement.textContent = 'Nombre de clics :  ' + count;

    message.focus();
});


