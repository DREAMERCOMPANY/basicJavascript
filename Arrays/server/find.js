//Iterar sobre un arreglo para encontrar en primer elemento que cumpla con la condicion con un ciclo for

const numsFind = [1,2,3,4,5,6,7,8,9,10]
let rta1= undefined

for(let i=0; i<numsFind.length; i++){
    const element = numsFind[i]
    if(element === 4){
        rta1 = element
        break;
    }
}

//Iterar sobre un arreglo para encontrar en primer elemento que cumpla con la condicion con un Array.find()

const rta2 = numsFind.find(num => num === 4)
const rta3 = numsFind.findIndex(num => num === 4)

console.log({
    rtaFor: rta1,
    rtaFind: rta2,
    rtaIndex: rta3
})

//Dentro de un objeto buscar el producto que tenga determinado ID

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const productRequiered = products.find(product => product.id === '🌭')
  const productRequieredIndex = products.findIndex(product => product.id === '🌭')
  const values = [...Object.values(productRequiered)]

  console.log({
    productFind: productRequiered,
    productFindIndex: productRequieredIndex,
    valuesProductFind: values
  })
