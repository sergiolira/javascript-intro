
//objeto literal
const person = {
    name: 'SE',
    lasname: 'Stark',  
    age: 45,
    //puefo tener mas objetos
    address: {
        city: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
}

//referencia
//const person2 = person;
//romper referencia
const person2 = {...person};

person2.name = 'Petersa';
console.log(person);
console.log(person2);