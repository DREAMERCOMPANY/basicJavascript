/*
Estudiante(nombre, edad, nacionalidad str, rutasAprendizaje-arr, puntos:int)
rutaAprendizaje(name:str, cursos:arr)
curso(nombre, clases:arr)
clase(nombre, comentarios)
*/ 

class Comentario{
    constructor({positivo = undefined, negativo= undefined}){
        this.positivo = positivo
        this.negativo = negativo
    }
}

const negativo = new Comentario({negativo: 'No me gusta la manera de explicar del profesor'})
const positivo = new Comentario({positivo: 'Me encanta como enseña JuanDC'})

class Clase{
    constructor({nombre, comentarios = []}){
        this.nombre= nombre
        this.comentarios = comentarios
    }
}

const IntroduccionHTML = new Clase({nombre: 'Etiquetas en HTML', comentarios:[negativo]})
const IntroduccionJS = new Clase({nombre: '¿Que es Javascript?', comentarios:[positivo]})

class Curso{
    constructor({nombre, clases=[]}){
        this.nombre = nombre
        this.clases = clases
    }
}

const curso_pro_basica = new Curso({nombre: 'Curso gratis de programacion basica', clases:[IntroduccionHTML]})
const curso_manipulacion_DOM = new Curso({nombre: 'Curso de manipulacion del DOM', clases:[IntroduccionJS]})

 class LearningPath{
    constructor({nombre, cursos=[]}){
        this.nombre = nombre
        this.cursos = cursos
    }
 }

 const Js_desde_cero = new LearningPath({name: 'De cero a experto en JS', cursos:[curso_manipulacion_DOM, curso_pro_basica]})
 const pro_basica = new LearningPath({name: 'Domina los fundamentos de programacion basica', cursos:[curso_pro_basica]})

 class Student{
    constructor({nombre, edad, nacionalidad= undefined, rutas =[], puntos=0}){
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
        this.rutas = rutas
        this.puntos = puntos

    }

    ganarPuntos(){
        this.puntos +=1
    }

    darInfo(){
        console.log(`Estudiante ${this.nombre} tiene ${this.edad} esta inscrito en las rutas: ${this.rutas}`)
    }
 }

 const juan = new Student({nombre: 'Juan dela Ponse', edad: 23, rutas: [Js_desde_cero, pro_basica], puntos: 100})
 const jhoncena = new Student({nombre: 'Jhoncito', edad: 30, rutas: [ pro_basica], puntos: 250})

