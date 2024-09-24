let sendBtn = document.getElementById("submit"); 


function response() {
    alert("We'll send you an email as soon as possible!")
}

sendBtn.addEventListener('click', response);


let add = document.getElementById("add");
let counter = document.getElementById("counter");

function incrementOne() {
    let parseToNumber = parseInt(counter.textContent);
    parseToNumber += 1;
    counter.textContent = parseToNumber;
}

add.addEventListener('click', incrementOne);

function decrementOne() {
    let parseToNumber = parseInt(counter.textContent);
    parseToNumber -= 1;
    counter.textContent = parseToNumber;
}
let minus = document.getElementById("minus");
minus.addEventListener('click', decrementOne);

if (counter === 0) {
    
};