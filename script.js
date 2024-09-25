let sendBtn = document.getElementById("submit"); 


function response() {
    alert("We'll send you an email as soon as possible!")
}

sendBtn.addEventListener('click', response);


// let add = document.getElementById("add");
// let counter = document.getElementById("counter");

// function incrementOne() {
//     let parseToNumber = parseInt(counter.textContent);
//     parseToNumber += 1;
//     counter.textContent = parseToNumber;
// }

// add.addEventListener('click', incrementOne);

// function decrementOne() {
//     let parseToNumber = parseInt(counter.textContent);
//     parseToNumber -= 1;
//     counter.textContent = parseToNumber;
// }
// let minus = document.getElementById("minus");
// minus.addEventListener('click', decrementOne);

// if (counter === 0) {
//     decrementOne.disabled = true;
// };

const quantityInput = document.getElementById('quantity');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

// increasing button
function incrementOne() {
    let currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}
addButton.addEventListener('click', incrementOne);

//decreasing button
function decrementOne() {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 0) {
        quantityInput.value = currentQuantity - 1;
        };
    }
subtractButton.addEventListener('click', decrementOne);

// styles
