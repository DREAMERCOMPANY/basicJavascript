function isObject(subject){
    return typeof(subject) == 'object'
}

function isArray(subject){
    return Array.isArray(subject)
}

function deepCopy(subject){
    const subjectIsArray = isArray(subject)
    const subjectIsObject = isObject(subject)
    let copySubject;

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
    
    return copySubject
}



const studentBase = {
    name: undefined,
    approvedCourses: undefined,
    caracteristicas: {
      age: undefined,
      colorCabello: undefined,
      gustos: {
        musica: undefined,
        peliculas: undefined,
      },
    },
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };

  const jhoncena = deepCopy(studentBase)
  Object.seal(jhoncena)
  Object.isSealed(jhoncena)
  Object.freeze(jhoncena)
  console.log(Object.isFrozen(jhoncena))
  console.log(Object.getOwnPropertyDescriptors(jhoncena))




function deepFreeze(obj) {
    if (typeof (obj) !== 'object') return
    Object.freeze(obj)
  
    for (let key in obj) {
      deepFreeze(obj[key])
    }

    console.log(obj)
  }

  deepFreeze()



