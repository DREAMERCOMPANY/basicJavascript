/*
Namespaces:
    -es la forma de definir que alcance van a tener ciertas variables en el futuro.
    -Se separan las propiedades publicas de las privadas para de cierta manera 'encapsular'
    -Utilizando el scope de JS se puede evitar que se modifiquen algunas variables
*/

function requiredParam(param){
    throw new Error(`${param} is required`);
}

function createObject({name = requiredParam('name'), age, location, email, learningPaths = []} = {}){
    

    const private = {
        '_name': name
    };

    const public = {
        age,
        location,
        email,
        learningPaths,
        readName: function(){
            return private['_name'];
        },

        changeName: function(newName){
            private['_name'] = newName;
        }

    };

    Object.defineProperty(public, 'readName', {
        configurable: false,
        writable: false
    });

    Object.defineProperty(public, 'changeName', {
        configurable: false,
        writable: false
    });

    return public;
}


const ale = createObject({name: 'Ale'});
console.log(ale.readName()); // Output: Ale


