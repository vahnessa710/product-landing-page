// send button
let sendBtn = document.getElementById("submit"); 
let emailBar = document.getElementById("email");

function response() {
        alert("We'll send you an email as soon as possible!");
}
sendBtn.addEventListener('click', response);

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
