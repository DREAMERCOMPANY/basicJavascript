let numerito = 0
const numeritos = [0,1,0,22,55,2,33,66,55,2,0,55,85]
const numObj = {}

for(let index= 0; index < numeritos.length; index ++){
    numerito = numeritos[index]
    numObj[index] = numerito
}

console.log(numObj)

const recursivaArray = [1,2,3,4,5,6]
const objGenerate = {}
function recursiva(numbersArray, index = 0){
    if(index === numbersArray.length){
        return;
    }

    objGenerate[index] = numbersArray[index]
    recursiva(numbersArray, index + 1)
    
}

recursiva(recursivaArray)
