const name = "sergio"
const lastname = "gonzalez"

//los template literals (string) son una forma de concatenar strings de una forma mas sencilla ` (back tick)
const fullname = `${name} ${lastname}`

console.log(fullname)

console.log(`Resultado ${1 + 1}`)

function getSaludo( name ){
    return 'holas ' + name
}

console.log(`Este es un texto: ${getSaludo(fullname)}`)