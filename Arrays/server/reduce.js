//Sumar elementos de un array con un ciclo for

const elements = [1,2,34,5,66,77]
let sum = 0

for(let i = 0; i<elements.length; i++ ){
    sum += elements[i]
}

//Sumar elementos de un array con el metodo reduce()

const sumaTotales= elements.reduce((sum, item) => sum + item, 0)

console.log({
    sum,
    sumaTotales
});

//Con reduce mirar los elementos que se repiten