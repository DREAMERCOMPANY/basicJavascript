//Every some
//metodos que no modifican el array original

//every()

const ages = [23,21,20,30,19,50]
const upperTo30 = ages. every(item => item >18)

//some()
const isUpperto20 = ages. some(item => item >= 20)
console.table(ages, upperTo30, isUpperto20)

//!! Metodos de busqueda, includes(), indexOf(), lastIndexOf

//includes()
const numsIncludes = [1,2,3,4,56,55]
const numFindIncludes1= numsIncludes.includes(56)
const numFindIncludes2= numsIncludes.includes(100)
console.log({
    numsIncludes,
    numFindIncludes1,
    numFindIncludes2
})

//indexOf()
const arrIndexOf = ['Pera', 'Manzana', 'Piña', 'Banana']
const findArrIndexOf1 = arrIndexOf.indexOf('Piña')
const findArrIndexOf2 = arrIndexOf.indexOf('Banana')
console.log({
    arrIndexOf,
    findArrIndexOf1,
    findArrIndexOf2
})

//lastIndexOf()
const arrLastIndexOf = [1,2,2,3,4,5,10,55,5]
const findLastIndexOf1 = arrLastIndexOf.lastIndexOf(5)
const findLastIndexOf2 = arrLastIndexOf.lastIndexOf(100)

console.log({
    arrLastIndexOf,
    findLastIndexOf1,
    findLastIndexOf2
})

//Exercise: econtrando indices

const wordsIndexes = ['Alejo', 'Rosita', 'Jhon', 'Luz', 'Oswaldo', 'Paula']
const wordToLocate = wordsIndexes[Math.floor(Math.random() * wordsIndexes.length )]

function locateWord(arr, word){
    const result ={
        word: null,
        includesTargetString:false,
        indexOfWord: null,
        lasIndexofWord: null
    }

    arr.forEach((el, index)=>{
        if(el.includes(word)){
            result.word = el
            includesTargetString = true
            result.indexOfWord = index
            result.indexOfWord = arr.lastIndexOf(word)
        }
    })

    return result;

  
}

//Crear copias con arrays, Slice()
const animalSlice = ['Lion', 'Coconut', 'Jiraffe', 'Zebra']
console.log(animalSlice.slice(1,3))
console.log(animalSlice.slice(2,4))
console.log(animalSlice.slice(-1))
console.log(animalSlice.slice(-2))


//Spread operator, casos de uso

//creando copias con spreadOperator
const arrSpreadOperatorOne = [1,2,3]
const arrCopy = arr.arrSpreadOperatorOne.map(item => Math.pow(item,10))
const newArrCopy =[...arrSpreadOperatorOne, ...arrCopy]

//añadir elementos con spreadOperator
const newArrCopy2 = arrCopy.map(item => item * 2)
const resultArrCopy = [...newArrCopy2 , 2]

//Recibiendo parametros dentro de una funcion con spread Operator

function sumElements(...els){
    const result = els.filter(element=> element %2 == 0).reduce((acc, el) => acc + el, 0)
    console.log(result)
}

sumElements(1,2,3,4,5,6)

//Introduccion a arrays bidimensionales

const arrUnaDimension= [1,2,3,4,5,6,7,8,9,10]
const arrBidimensional = [[1,2,3], [4,5,6], [7,8,9,10]]
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//Cambiar un elemento de la matriz
 matriz[2][2] = 10

 //Iterar sobre un arreglo bidimensional con for

 for(let i = 0; i< matriz.length ; i++){
    for(let j= 0; j < matriz[i].length; j++){
        console.log(matriz[i][j])
    }
 }

 // multiplicar elementos de una matriz bidimensional por un numero

 function multipliMatrixPerNum(matrix, num){
    let newMatrix = []
    for(let i = 0 ; i< matrix.length; i++){
        let row = []
        for(let j = 0 ; j < matrix[i].length; j++){
            row.push(matrix[i][j] * num)
        }
        newMatrix.push(row)
    }
 }

 //crear copiar una arreglo bidimensional 

 function createCopyMatrix(matrix){
    let copyMatrix = []
    for(let i= 0; i<matrix.length; i++){
        copyMatrix[i] = [...matrix[i]]
    }
 }

 //Proyecto: encuentra al ganador del torneo

 function tournamentWinner(competitions, results){
    const scores = {}
    let winner = ''
    for(let i=0; i<competitions.length;i++){
        const [home, away] = competitions[i]
        const winningTeam = results[i] === 0 ? away:home

        /* if(!scores[winningTeam]){
            scores[winningTeam] = 0
        }else{
            scores[winningTeam] += 3

        }
         */
        scores[winningTeam] = (scores[winningTeam] || 0) + 3

        if(!winner || scores[winningTeam] > scores[winner]){
            winner = winningTeam
        }
        
    }

    const result = [scores, winner]
    return result
 }

 const competitions = [
    ['Javascript', 'C#'],
    ['C#','Python'],
    ['Python', 'Javascript']
 ]


 const results = [0,0,1]

 tournamentWinner(competitions, results)

 //Anatomia de un objeto
 //Objeto: es una estructura de dato de guarda valores de tipo(key,value)
 

 const persona = {
    name: 'Jhon',
    age: 35,
    country: 'COl',
    saludar(){
        console.log(`Hello. I am ${persona.name} from ${persona.country}`)
    },
    direccion: {calle: 'Cra 56', avenida: '68', cuidad: 'Bogota'},
    darDireccion(){
        console.log(`${persona.name} vive en la calle ${persona.direccion.calle} # ${persona.direccion.avenida} en ${persona.direccion.cuidad}`)
    }
}
 persona.telefono = 30025633
 delete persona.telefono

 //Funcion constructora

 function Persona(name,age, country){
    this.name = name
    this.family = []
    this.age = age
    this.country= country
 }

 Persona.prototype.addFamilyMembers = function(...members){
    this.family.push(...members)
 }

 Persona.prototype.getFamilyMembers = function(){
    console.log(`Family members: ${this.family.join(' ,')}`)
 }

 Persona.prototype.getInfo = function(){
    console.log(`Hi, I am ${this.name}.`)
 }

 const jhon = new Persona('Jhon', 20, 'Col')
jhon.addFamilyMembers('Luz', 'Oswaldo')
jhon.getFamilyMembers()

//Clases: manera de crear objetos mas secilla, sugar syntax para poder generar objetos.
//Una clase es como un molde que se crea para construir otros objetos

class Animal{
    constructor(name,age, location){
        this.name = name
        this.age = age
        this.location = location
    }

    saludar(){
        console.log(`Hello, I am based in ${this.location}`)
    }
}

const perro = new Animal('Firulais', 25, 'Bogota')
perro.saludar()

//Prototipos y herencia.
//Js funciona con objetos y prototipos
//POO funciona con herencia
//Las instancias no tienen un prototipo pero las clases si.
//se debe agregar el metodo al prototipo o la clase de la funcion constructora

//Herencia en la practica, polimorfismo

class Persona{
    constructor(name, gender){
        this.name = name
        this.gender = gender
    }

    comer(){
        `${this.name} is eating`
    }

    correr(){
        console.log(`${this.name} is running`)
    }
}

class Estudiante extends Persona{
    constructor(name, gender, university, career){
        super(name, gender)
        this.university = university
        this.career = career
    }

    estudiar(){
        console.log(`${this.name} is studying`)
    }

}

let persona = new Persona('Jhon' , 22)
let estudiante = new Estudiante('Alice', 'Female', 'Harvard', 'Tech')
estudiante.comer()

//This
//this es una palabra reservada que hace referencia al objeto o clase que construimos.

class Personita {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    comer() {
        return `${this.name} is eating`; // Agregamos 'return' para devolver la cadena
    }

    correr() {
        console.log(`${this.name} is running`);
    }
}

class Estudiante extends Personita {
    constructor(name, gender, university, career) {
        super(name, gender);
        this.university = university;
        this.career = career;
    }

    estudiar() {
        console.log(`${this.name} is studying`);
    }
}

Estudiante.prototype.pasarMaterias = function(){
    return true
}

let persona = new Personita('John', 'Male');
let estudianteThis = new Estudiante('Alice', 'Female', 'Harvard', 'Tech');
estudiante.correr(); // Imprime: Alice is running
console.log(persona.comer()); // Imprime: John is eating

//This

class Carro{
    constructor(tipo, modelo){
        this.tipo = tipo
        this.modelo = modelo
    }

    prender(){
        return false
    }
}

let toyota = new Carro('Camioneta', 2025)

toyota.pintar = function(){
    return `${this.name} se esta pintando`
}

