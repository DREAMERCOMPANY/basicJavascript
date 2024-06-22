//Creando objetos literales

const Alejandro = {
    name: 'Jhon',
    age: 25,
    cursosAprovados: [],
    agregarCurso(curso) {
        this.cursosAprovados.push(curso);
    },
    aprovarCurso(curso) {
        const isCursoIn = this.cursosAprovados.some(item => item === curso);
        if (isCursoIn) {
            console.log(`Curso aprobado: ${curso}`);
        } else {
            console.log(`No has aprobado ${curso}`);
        }
    }
};

// Ejemplo de uso:
Alejandro.agregarCurso('Matemáticas');
Alejandro.aprovarCurso('Matemáticas'); // Imprimirá: Curso aprobado: Matemáticas
Alejandro.aprovarCurso('Ciencias'); // Imprimirá: No has aprobado Ciencias

//Creando un prototipo con la sintaxis de funciones

function Student(name, age){
    this.name = name
    this.age = age
    this.cursosAprovados = []
}

Student.prototype.aprovarCurso = function (curso){
    this.cursosAprovados.push(curso)
}

let oscar = new Student('Oscar', 19)

//Creando prototipos con la sintaxis de clases:
//Patron ROR, receive an object, return an object

class Student2{
    constructor({
        name,
        age,
        cursosAprovados = []
    }){
        this.name = name
        this.age = age
        this.cursosAprovados = cursosAprovados
    }

    aprovarCursos(nuevoCurso){
        this.cursosAprovados.push(nuevoCurso)

    }
}

const juanito = new Student2({name: 'Juanito'})

//Ventajas POO
//Reutilizacion de codigo, el codigo se vuelve mas escalable.

class Course{
    constructor({name, classes = []}){
        this.name = name
        this.classes = classes
    }
}

const cursoProgBasica = new Course({name: 'Curso gratis de prg basica'})
const cursoDefHTML = new Course({name: 'Curso definitivo'})

class learningPath{
    constructor({name, courses =[]}){
        this.name = name
        this.courses = courses

    }
}

const escuelaWeb = new learningPath({
    name: 'Escuela de desarrollo web',
    courses : [cursoDefHTML, cursoProgBasica]
})

const escuelaDataScience = new learningPath({
    name: 'Escuela de DB',
    courses : [cursoProgBasica]
})

const escuelaVgs = new learningPath({
    name: 'Escuela de VudeiJuegis',
    courses : [cursoDefHTML, cursoProgBasica]
})

class Student3{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }){

        this.name = name
        this.email = email
        this.username = username
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses
        this.learningPaths = learningPaths
    }
}

const alejito = new Student3({
    name: 'Alejon',
    username: 'alejito34',
    email: 'alejito@correo.co',
    twitter: 'aleTy6',
    learningPaths: [escuelaDataScience , escuelaWeb]
})

const miguelito = new Student3({
    name: 'miguel',
    username: 'miguelito34',
    email: 'miegue@correo.co',
    twitter: 'eeemeTy6',
    learningPaths: [escuelaDataScience , escuelaVgs]
})