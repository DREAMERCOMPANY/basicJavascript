function requiredParam(param){
    throw new Error(`${param} is required`)
}

function createLearningPath({name = requiredParam('name'), courses = []}){
    const private = {
        '_name': name,
        '_courses': courses
    }

    const public = {
        get name(){
            return private['_name']
        },

        set name(newName){
            if(newName.length !== 0){
                private['_name'] = newName
            }else{
                console.warn('Tu nombre debe tener al menos un caracter')
            }
        },

        get courses(){
            return private['_courses']
        }

    }

    return public
    
}

function isArray(arr){
    return Array.isArray(arr)
}

function createStudent({name = requiredParam('name'), age, learningPath = [], email = requiredParam('email')}){


    const private = {
        '_name' : name,
        '_learningPath': learningPath
    }

    const public = {
        age,
        email,

        get name(){
            return private['_name']
        },

        set name(newName){
            if(typeof(newName) !== 'string') console.warn('el nombre debe ser un caracter')
            if(newName == '') console.warn('El nombre no puede estar vacio')
            private['_name'] = newName
        },

        get learningPath(){
            return private['_learningPath']
        },

        set learningPath(newLp){
            if(!newLp['name']) console.warn('Learning path debe tener la propiedad NAME')
            if(!newLp['courses']) console.warn('Learning path debe tener la propiedad COURSES')
            if(!isArray(newLp['courses'])) console.warn('courses debe ser un arreglo')
            private['_learningPath'].push(newLp)
        }


    }

    return public

}

const jhon = createStudent({name: 'Jhon', email: 'aaa'})