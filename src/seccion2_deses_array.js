//Desestructurando de arreglo (la posicion es importante)

const characters = ['Goku', 'Vegeta', 'Trunks']

//si deseo el valor de vegeta
const veg = characters[1];
console.log(veg);

//Mas facil con Desestructuracion
//
const [g, v, t] = characters
console.log(g, v, t);

//Con funciones

const returnArray = ([numbers, letters]) =>{
    return [numbers, letters]
}

const [numbers, letters] = returnArray([999156604, 'Sergio lira']);

console.log(numbers, letters);