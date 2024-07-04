function createObject({name , age, location, email, learningPaths = []} = {}){
    
    const private = {
        '_name': name
    };

    const public = {
        age,
        location,
        email,
        learningPaths,
        get name(){
            return private['_name']
        },
        set name(newName){
            private['_name'] = newName
        }

    };

    

    return public;
}


const ale = createObject({name: 'Ale'});
