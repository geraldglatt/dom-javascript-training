console.log('script chargé');

// =====================
// Sélection des éléments
// =====================
const button = document.querySelector('#btn-action');
const message = document.querySelector('#message');
const counterElement = document.querySelector('#counter');

// =====================
// État de l’application
// =====================
let count = 0;

// =====================
// Fonctions
// =====================
function updateMessage() {
  message.textContent = 'Le DOM fonctionne 🎉';
}

function updateCounter() {
  counterElement.textContent = `Nombre de clics : ${count}`;
}

function focusMessage() {
  message.focus();
}

function handleButtonClick() {
  count += 1;
  updateMessage();
  updateCounter();
  focusMessage();
}

// =====================
// Événements
// =====================
button.addEventListener('click', handleButtonClick);
