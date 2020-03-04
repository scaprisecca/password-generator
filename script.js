//Selectors
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
characterAmountContainer = document.querySelector('.characterAmountContainer');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const form = document.querySelector('.form');
const passwordDisplay = document.querySelector('.password-display');
const copyToClipboard = document.querySelector('.copyPassword');
const passwordHistory = document.querySelector('.passwordHistory');
const passwordHistoryContainer = document.querySelector('.displayPasswordHistory');
const closeBtn = document.querySelector('.closePasswordHistoryBtn');


//Variables
let oldPasswordsArray = [];
const oldPassword = {
    password: '',
    date: new Date(),
    time: '',
}


//Adding Event Listeners
characterAmountContainer.addEventListener('input', snycCharacterAmounts);

copyToClipboard.addEventListener('click', copyContent);

passwordHistory.addEventListener('click', displayPasswordHistory);

closeBtn.addEventListener('click', closePasswordDisplay);

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

    const tempPassword = Object.create(oldPassword);
    const tempTime = new Date();

    tempPassword.password = password;
    tempPassword.date = tempTime.toDateString();
    tempPassword.time = tempTime.toLocaleTimeString()

    oldPasswordsArray.push(tempPassword);
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

function copyContent() {
    let copiedText = passwordDisplay.innerText;
    let el = document.createElement('textarea');
    el.value = copiedText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    console.log(copiedText);
    document.body.removeChild(el);
}



function displayPasswordHistory(){
    
    passwordHistoryContainer.style.display = 'block';
    closeBtn.style.display = "block";

    let passwordElement = `
        <h2 class="passwordHistoryTitle">Password History</h2>
        ${oldPasswordsArray.map(password => `<p class="pass"><strong>Password:</strong> ${password.password}</p><p class="date">Created on ${password.date} at ${password.time}</p>`).join('')}
    `;

    return passwordHistoryContainer.innerHTML = passwordElement;
}

function closePasswordDisplay() {
    passwordHistoryContainer.style.display = 'none';
    closeBtn.style.display = 'none';
}