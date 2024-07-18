//Recorrer un array y validar si uno de los elementos existe dentro de ese array con un ciclo for

const names = ['Juan', 'Jhon', 'Cata', 'Felipe']
let nameFoundFor = false

for(let i=0 ; i< names.length; i++){
    const name = names[i].toLocaleLowerCase()
    if(name === 'jhon'){
        nameFoundFor = true
    }
}

//Recorrer un array y validar si un elemento existe con includes

const nameFoundIncludes = names.map(item => item.toLocaleLowerCase()).includes('jhon')

console.log({nameFoundFor, nameFoundIncludes})

