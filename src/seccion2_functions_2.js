/** funcion
function saludar(xyz){
    return `Hola ${xyz}`
} */
//saludar = true (ejemlo de inseguridad)


//funcion asignado , en teoria este codigo seria mas seguro que el anterior
/** const saludar = function ( xyz ){
    return `Hola ${xyz}`
}*/

//funciones de flechas, es una forma mas corta y se le puede asignar a una variable o directamente llamarla.


/**Opcion 1 
const saludar = ( xyz ) => {
    return `Hola ${xyz}`
}*/

/**Opcion 2 */
const saludar = ( xyz = 'Sheila' ) => `Hola ${xyz}`
//const saludar = fullname  => `Hola ${xyz}`
//Si solo manda un argumento los parentesis puedes ser omitidos
//const saludar = fullname  => `Hola ${xyz}`

const fullname = 'Sersgio';
//console.log(saludar(fullname));
console.log(saludar());

//Vamos por unos ejercicios y crear objetos
/*
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}*/

/* problema 
const getUser = () => 
    {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
*/

// solucion  el parentesis es necesario para que no se confunda con el cuerpo de la funcion
const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    })


//console.log(getUser());

//crear una constante
const heroes = [
    {
    id: 1,
    name: 'Batman'
    },
    {
    id: 2,
    name: 'Superman'
    }
]

//Crear funcion que valide si exiete (true o false) el heroe con el id que se le pase
//some es una funcion que recorre el arreglo y si encuentra una coincidencia regresa 
//true en caso contrario false
const heroexists = (id) => (
    heroes.some((heroe) => heroe.id === id)
)

//metodos
//some
const exists = heroes.some((heroe) => heroe.id === 1) // true
//console.log(exists)
//find
const find = heroes.find((heroe) => heroe.id === 1) // {id: 1, name: 'Batman'}
//console.log(find)
//filter
const filter = heroes.filter((heroe) => heroe.id === 1) // [{id: 1, name: 'Batman'}]
//desestructurando el objeto para obtener solo el nombre
const {name} = heroes.find((heroe) => heroe.id === 1) // {id: 1, name: 'Batman'}
//console.log(name)
console.log(name)