const pText = document.getElementById('pContent');

console.log(pText.id);
console.log(pText.name);

// Query Selector let you select any CSS selector 
const buttons = document.querySelector('.b');

console.log(buttons.id);

// Query Selector All let you get an array of CSS selector 
const allButtons = document.querySelectorAll('.b');

console.log(allButtons[2].innerHTML);

// use querySelector to grab specific elements
const pTag = document.querySelector('#addAt p');
const spans = pTag.children;

console.log(spans);