const animal = {
    name: 'lion',
    type: 'Feline',
    dinners:{
        monday : 'Fish',
        tuesday: 'Chicken'
    }
}

const stringifyObj = JSON.stringify(animal)
const animalCopy = JSON.parse(stringifyObj)
console.log(typeof(stringifyObj));
console.log(typeof(animalCopy))

animal.dinners.monday = 'nnnnnnn'

console.log(animalCopy);
console.log(animal)

