function validateParam(param){
    throw new Error(`${param} is required`)

}

function createObject({name = validateParam('name'), age, location, email = validateParam('email'), learningPaths = []} = {}){
   
    return {
        name, 
        age,
        location,
        email,
        learningPaths

    }
}

const felipe = createObject({name:'Pipe', email: 'pipe@correo.com'})