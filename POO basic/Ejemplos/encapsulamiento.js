/*
Estudiante(nombre, edad, nacionalidad str, rutasAprendizaje-arr, puntos:int)
rutaAprendizaje(name:str, cursos:arr)
curso(nombre, clases:arr)
clase(nombre, comentarios)
*/ 

class Comentario{
    constructor({content, studentName, studentType = 'Estudiante'}){
        this.content = content
        this.studentName = studentName
        this.studentType = studentType
        this.likes = 0
    }

    publicar(){
        console.log(`${this.studentName}(${this.studentType})`)
        console.log(this.content)
        console.log(this.likes + ' likes')
    }
}

const negativo = new Comentario({ negativo: 'No me gusta la manera de explicar del profesor' });
const positivo = new Comentario({ positivo: 'Me encanta como enseña JuanDC' });

class Clase {
    constructor({ nombre, comentarios = [] }) {
        this.nombre = nombre;
        this.comentarios = comentarios;
    }

    agregarComentario(comentario) {
        this.comentarios.push(comentario);
    }

    obtenerComentarios() {
        return this.comentarios;
    }
}


const IntroduccionHTML = new Clase({ nombre: 'Etiquetas en HTML', comentarios: [negativo] });
const IntroduccionJS = new Clase({ nombre: '¿Que es Javascript?', comentarios: [positivo] });

class Curso{
    constructor({nombre, clases=[], isFree= false, lang = ''}){
        this._nombre = nombre
        this.clases = clases
        this.isFree = isFree
        this.lang = lang
    }

    get name(){
        return this._nombre
    }

    set name(newName){
        if(newName ===  'curso malito') {
            console.error('Web.. NO.')

        }else{
            this._nombre = newName

        }
    }
}

const curso_pro_basica = new Curso({
    nombre: 'Curso gratis de programacion basica', 
    clases:[IntroduccionHTML],
    isFree: true
})
const curso_manipulacion_DOM = new Curso({
    nombre: 'Curso de manipulacion del DOM', 
    clases:[IntroduccionJS],
    isFree:false,
    lang: 'english'
})

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

 
 class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    publicarComentario(commentContent){
        const comentarioExpert = new Comentario({content: commentContent, studentName: this.nombre})
        comentarioExpert.publicar()
    }

    aprovarCurso(newCourse) {
        if (newCourse.isFree) {
            this.rutas.push(newCourse);
        } else {
            console.warn(`I'm sorry ${this.nombre}, you can only take free courses.`);
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    publicarComentario(commentContent){
        const comentarioExpert = new Comentario({content: commentContent, studentName: this.nombre})
        comentarioExpert.publicar()
    }

    aprovarCurso(newCourse) {
        if (newCourse.lang !== 'english') {
            this.rutas.push(newCourse);
        } else {
            console.warn(`I'm sorry ${this.nombre}, you can't take English courses.`);
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    publicarComentario(commentContent){
        const comentarioExpert = new Comentario({content: commentContent, studentName: this.nombre})
        comentarioExpert.publicar()
    }

    aprovarCurso(newCourse) {
        this.rutas.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    publicarComentario(commentContent){
        const comentarioExpert = new Comentario(
            {content: commentContent, studentName: this.nombre,studentType: 'Teacher'}
        )
        comentarioExpert.publicar()
    }

    aprovarCurso(newCourse) {
        this.rutas.push(newCourse);
    }
}

 const juan = new FreeStudent({nombre: 'Juan dela Ponse', edad: 23,  puntos: 100})
 const jhon = new BasicStudent({nombre: 'Jhoncito', edad: 30,  puntos: 250})
 const catalina = new ExpertStudent({nombre: 'Cataleya', edad: 24,  puntos: 550})
 const JuanDC = new TeacherStudent({nombre: 'JuanDC', edad: 25,  puntos: 550})




