//Crear un histograma con reduce de los elementos que mas se repiten dentro de un arreglo

const items =[1,1,2,2,4,5,55,55,6,6,7,8,9,99,99]
const rta = items.reduce((acc,item)=>{
    if(!acc[item]){
        acc[item] = 1
    }else{
        acc[item] = acc[item] + 1

    }
    return acc
}, {})

console.log(rta)

//Crear un histograma por rangos de los numeros que mas se repiten

const list = []

for(let i =0 ; i<=30; i++){
    list.push(Math.floor(Math.random()  * 10) +1 )
}


const listObj = list.reduce((acc, item)=> {
    if(item < 5){
        acc["1-4"] += 1
    }else if(item < 7){
        acc["5-6"] += 1
    }else{
        acc["7-10"] += 1
    }
    return acc

}, {
    '1-4': 0,
    '5-6': 0,
    '7-10':0
})

console.log(listObj);

//Iterando sobre un objeto con reduce

const levels = [{name: 'Jhon', level: 'low'} ,{name: 'Juan', level: 'Medium'}, {name: 'Cat', level: 'low'} , {name: 'Jhon', level: 'low'} , {name: 'Jhon', level: 'low'}]

const levelsCounter = levels.map(item => item.level).reduce((obj, level)=> {
    if(!obj[level]){
        obj[level] = 1

    }else{
        obj[level] = obj[level] + 1
    }

    return obj
}, {})

console.log(levelsCounter);
