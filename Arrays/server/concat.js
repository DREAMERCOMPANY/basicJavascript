const elements = [1,2,3,4,5,6,7,8,9]
const newElements = [10,11,12,13,14,15,16]

//Crear un nuevo arreglo con for
const rta = [...elements]

for(let num of newElements){
    rta.push(num)
}

//Crear un nuevo arreglo con concat()

const rta2 = elements.concat(newElements)

//Crear un nuevo arreglo con spread Operator(...)

const rta3 =[...elements, ...newElements]

//Agregar un nuevo arreglo a elements con push()

elements.push(...newElements)

console.log({
    for: rta,
    concat: rta2,
    spread: rta3,
    elements: elements
})

