/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;
}

document.querySelector('#subtractNumbers').addEventListener('click', function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    if (!isNaN(subtractNumber1) && !isNaN(subtractNumber2)) {
        document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
        } else{
            alert("Please enter a valid number");
        }
});
/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

//Arrow function for multiplyNumbers
document.querySelector('#multiplyNumbers').addEventListener('click', () => {
    const factor1 = parseFloat(document.getElementById('factor1').value);
    const factor2 = parseFloat(document.getElementById('factor2').value);

    if(!isNaN(factor1) && !isNaN(factor2)) {
        document.getElementById('product').value=multiply(factor1, factor2);
    }else{
        alert("Please provide numeric input!");
    }
});

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){
    if(divisor !== 0){
        return dividend / divisor
    } else{
        alert('Cannot divide by zero');
        return NaN;
    }
}

//Arrow function for dividenNumbers
const divideNumbers = function() {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseInt(document.getElementById('divisor').value);
    
    //Checking whether the user has entered numbers or not
    if ((!isNaN(dividend)) && (!isNaN(divisor))) {
        
        /* Using normal functions to access arrow function*/
        document.getElementById('quotient').value = divide(dividend, divisor);
    } else{
        alert("Invalid Input");
    }
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('getTotal').addEventListener('click', calculateTotal);
});

function calculateTotal(){
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;
    const discount = isMember ? subtotal * 0.2 : 0;
    const total = subtotal - discount;

    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */
document.addEventListener('DOMContentLoaded', function(){
    let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
    document.getElementById('array').textContent = numbersArray.join(', ')
/* Output Odds Only Array */
    const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
    document.getElementById('odds').textContent= oddNumbers.join(", ");
    
/* Output Evens Only Array */
    const evenNumbers = numbersArray.filter( num => num % 2 === 0);
    document.getElementById('evens').textContent = evenNumbers.join(', ');
/* Output Sum of Org. Array */
    const sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
    document.getElementById('sumOfArray').textContent = sumOfArray;
/* Output Multiplied by 2 Array */
    const multipliedArray = numbersArray.map(num => num * 2);
    document.getElementById('multiplied').textContent =  multipliedArray.join(', ');
/* Output Sum of Multiplied by 2 Array */
    const sumOfMultiplied = multipliedArray.reduce((acc, num) => acc +  num , 0);
    document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
});
