const title = document.getElementsByTagName('h1');
/* busca una etiqueta en el HTML y la regresa como Array */
title[1].innerHTML = 'JS changer title (.innerHTML)';
console.log(title);

const testing = document.getElementById('test');
testing.innerHTML = 'testing: document.getElementById';
testing.style.background = 'yellow';
testing.style.color = 'blue';

document.getElementsByClassName

document.write('Hallo, wie geht´s?');

const phone = document.querySelector('#phone');
phone.textContent = 'es geht';

/* crea elementos HTML */
const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);

