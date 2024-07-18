//Transformamos un arreglo a string con un ciclo for

const countries = ['Col', 'RD', 'Mex', 'EU']

let str = ''
let separator = '--'

for(let i =0; i<countries.length;i++){
    const country = countries[i]
    if(i === countries.length -1){
        str = str + country
    }else{
        str = str + country + separator
    }
}


//Transformamos un arreglo a string con Array.join()

const str2 = countries.join('--')
console.log({
    str,
    str2
})

//Metodo Array.split() se utiliza para transformar un string a un array

const header= 'Los padrinos MAGICOS'
const urlHeader = header.split(' ').join('-').toLocaleLowerCase()
console.log({
    header,
    urlHeader
}
)