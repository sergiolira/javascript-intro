//Manera uno de crear un array
//const array = new Array();

//Manera dos de crear un array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//agregar un item - push

//vizualizar un valor de arreglo por su posicion : array[4])
array.push(11);
//console.log(array[4]);

/*Referencias de arreglos
const array2 = array;
array2.push(13)
console.log(array)
console.log(array2)*/

//Romiendo las Referencias de arreglos [...array] para crear un arreglo nuevo
const array2 = [...array];
array2.push(12)
console.log(array)
console.log(array2)

//Nuevo arreglo con map (recorre el arreglo y retorna un nuevo arreglo con los valores modificados
const array3 = array2.map( function( number ){
    return number*2
})
array3.push(14)
console.log(array3)