const letters = ['a', 'b', 'c']

for(let i=0; i< letters.length; i++){
    const element = letters[i]
    const index = i
    console.log(`${index} - ${element}`)
}

letters.forEach((item , index)=> {console.log(`${index} - ${item}`)})