//Selectors
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
characterAmountContainer = document.querySelector('.characterAmountContainer');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const btn = document.querySelector('.btn');
const passwordDisplay = document.querySelector('.password-display');


//Adding Event Listeners
characterAmountContainer.addEventListener('input', snycCharacterAmounts);

btn.addEventListener('submit', generatePassword);



//Functions
function snycCharacterAmounts(e){
    let value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}


function generatePassword(e){
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const uppercaseChecked = includeUppercase.checked;
    const numbersChecked = includeNumbers.checked;
    const symbolsChecked = includeSymbols.checked;

    createRandomPassword(characterAmount, uppercaseChecked, numbersChecked, symbolsChecked);
}

function createRandomPassword(characterAmount, uppercaseChecked, numbersChecked, symbolsChecked) {
    let password = '';
    for (let i = 0; i < characterAmount; i++) {

    }
}

const uppercaseCharCodes = () => {
    let uppercaseArray = [];
    for (let i = 65; i <= 90; i++){
        uppercaseArray.push(i);
    }
    return uppercaseArray;
}

const numberCharCodes = () => {
    let numberArray = [];
    for (let i = 48; i <= 57; i++){
        numberArray.push(i);
    }
    return numberArray;
}

const symbolCharCodes = () => {
    let symbolArray = [];
    for (let i = 33; i <= 47; i++){
        symbolArray.push(i);
    }
    return symbolArray;
}

const lowercaseCharCodes = () => {
    let lowercaseArray = [];
    for (let i = 97; i <= 122; i++) {
        lowercaseArray.push(i);
    }
    return lowercaseArray;
}