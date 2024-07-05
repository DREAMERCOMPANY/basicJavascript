function requiredParam(param) {
    throw new Error(`${param} is required`);
}

function LearningPath(name = requiredParam('name'), courses = []) {
    this.name = name;
    this.courses = courses;
}

function isArray(arr) {
    return Array.isArray(arr);
}



function Student({ name = requiredParam('name'), age, learningPaths, email = requiredParam('email') }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.learningPaths = [];

    if (isArray(learningPaths)) {
       for(let path of learningPaths){
        if(path instanceof LearningPath){
            this.learningPaths.push(path)
        }
        else{
            console.warn('LP is not an instance of LearningPath')
        }

       }
    } else {
        console.warn('LP must be an array');
    }
}

// Ejemplo de uso
const web = new LearningPath('Web Development', []);
const impostor = { name: 'Impostor', courses: [] };
const ale = new Student({ name: 'Jhon', email: 'jhon@correo.co', learningPaths: [web, impostor]});






