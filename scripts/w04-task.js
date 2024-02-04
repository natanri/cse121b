/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Jhonatan Rios V.',
    photo: 'images/profile2.jpg',
    favoriteFood: [
        'Rice',
        ' Beans',
        ' Ramen', 
        ' Sushi Rolls',
        ' Tacos',
        ' Pizza',
        ' Chiken'
    ],
    hobbies: ['Reading',
    'Coding',
    'Playing Video Games'
    ],
    
    placesLived:[],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        city:'Bogota, Colombia',
        length:' 32 years'
    },
    {
        city:"Granada, Colombia",
        length: '5 years'
    },
    {
        city: 'San Luis, Colombia',
        length: '1 year'
    }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
photo.setAttribute('src',  myProfile.photo);
photo.setAttribute('alt', `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let ul = document.createElement('ul');
    ul.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = places.city;
    dd.textContent = "Length of stay: " + places.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

