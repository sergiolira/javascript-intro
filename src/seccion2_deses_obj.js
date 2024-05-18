const person = {
    name: 'Emely',
    age: 25,
    codeName: 'Black Widow',
    power : 'Golden'
}
//Desestructurando un objeto
const {name, codeName, age, power = 'No tiene poder' } = person
//console.log(person.name)
console.log( codeName )
console.log( name )
console.log( age )
console.log( power )

//Funcion que retorna un heroe

/*Opcion 1
const createHero = ( person ) => {
    const {name, codeName, age, power = 'No tiene poderes' } = person
    return {
        id: 123,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    }
}*/
/*Opcion 2

const createHero = ( {name, codeName, age, power = 'No tiene poderes' } ) => {
    //si codeName es igual a codeName se puede simplificar
    return {
        id: 1212,
        name,
        age,
        codeName,
        power
    }
}*/
//Opcion 3
//aplicando la Desestructurando de objetos
const createHero = ( {name, codeName, age, power = 'No tiene poderes' } ) => (

    //si codeName es igual a codeName se puede simplificar
     {
        id: 12122,
        name,
        age,
        codeName,
        power
    }
)
    
console.log( createHero(person) )


