//Selectors
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
characterAmountContainer = document.querySelector('.characterAmountContainer');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const form = document.querySelector('.form');
const passwordDisplay = document.querySelector('.password-display');


//Adding Event Listeners
characterAmountContainer.addEventListener('input', snycCharacterAmounts);

const lowercaseCharCodes = fromLowToHigh(97, 122);
const uppercaseCharCodes = fromLowToHigh(65, 90);
const numberCharCodes = fromLowToHigh(48, 57);
const symbolCharCodes = fromLowToHigh(33, 47);



form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const uppercaseChecked = includeUppercase.checked;
    const numbersChecked = includeNumbers.checked;
    const symbolsChecked = includeSymbols.checked;

    const password = createRandomPassword(characterAmount, uppercaseChecked, numbersChecked, symbolsChecked);
    passwordDisplay.innerText = password;
})

//Functions
function snycCharacterAmounts(e){
    let value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

function createRandomPassword(characterAmount, uppercaseChecked, numbersChecked, symbolsChecked) {
    let charCodes = lowercaseCharCodes;
    if (uppercaseChecked) {charCodes = charCodes.concat(uppercaseCharCodes);}
    if (numbersChecked) {charCodes = charCodes.concat(numberCharCodes);}
    if (symbolsChecked) {charCodes = charCodes.concat(symbolCharCodes);}

    let password = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCodes = charCodes[Math.floor(Math.random() * charCodes.length)];
        password.push(String.fromCharCode(characterCodes));
    }

    return password.join('');
}

function fromLowToHigh(low, high) {
    let array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}