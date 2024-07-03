function isObject(subject){
    return typeof(subject) == 'object'
}

function isArray(subject){
    return Array.isArray(subject)
}

function deepCopy(subject){
    const subjectIsArray = isArray(subject)
    const subjectIsObject = isObject(subject)

    if(subjectIsArray ){
        copySubject = []
    }else if(subjectIsObject){
        copySubject = {}
    }else{
        return subject
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key])
        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key])
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key])
            }else{
                copySubject[key] = subject[key]
            }
        }
    }
    //Validad si es un objeto, si es un array si no es un objeto o un array
    let copySubject;
    return copySubject
}

const juan = {
    name: "Juanito",
    approvedCourses: ["Curso 1","Curso 2"],
    caracteristicas: {
      age: 18,
      colorCabello: 'Negro',
      gustos: {
        musica: ['rock', 'punk', 'ska'],
        peliculas: ['drama', 'horros', 'comedia'],
      },
    },
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };

function deepFreeze(obj) {
    if (typeof (obj) !== 'object') return
    Object.freeze(obj)
  
    for (let key in obj) {
      deepFreeze(obj[key])
    }

    console.log(obj)
  }

  deepFreeze(juan)



