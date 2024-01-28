/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jhonatan Rios Vargas';
let currentYear = 2024;
let profilePicture = 'images/profile2.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
document.getElementById('year').textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
const favFood = ['Rice',' Beans',' Ramen', ' Sushi Rolls',' Tacos',' Pizza',' Chiken'];
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift()
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop()
foodElement.innerHTML += `<br>${favFood}`;


