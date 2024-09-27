// send button
let sendBtn = document.getElementById("submit"); 
let emailBar = document.getElementById("email");

function response() {
    if(emailBar.textContent === ""){
    } else {
        alert("We'll send you an email as soon as possible!");
}
}
sendBtn.addEventListener('click', response);

const quantityInput = document.getElementById('quantity');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

<<<<<<< HEAD
=======
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

>>>>>>> a9a814812bd6d9f3541430f98154a588bb940bd1
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

<<<<<<< HEAD

// styles

let checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener ('click', click);

function click() {
    const quantity = document.getElementById('quantity').value;
    const responseDiv = document.getElementById('response-div');

    if (quantity > 0) {
        responseDiv.textContent = "Thank you for ordering!";
    } else {
        responseDiv.textContent = "Please add quantity.";
    }
};
=======
// styles
>>>>>>> a9a814812bd6d9f3541430f98154a588bb940bd1
