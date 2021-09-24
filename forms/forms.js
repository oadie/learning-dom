const nameText = document.querySelector('#name');
const input = document.querySelector('#input');

const writeN = () => {
    const inputValue = input.value;
    nameText.textContent = inputValue;
}