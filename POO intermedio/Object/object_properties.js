const juan= {
    name: 'Juanito',
    age: '18', 
    approvedCourses : ['curso1'],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}

// Cuando se intenta ejecutar la función addCourse en Object.entries, no va a funcionar porque 'this' hará referencia al array que se seleccionó.
console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
console.log(Object.getOwnPropertyDescriptors(juan))

/*
Object.defineproperties()
    -Caso: Enmerable = false
        -Cuando se manda a llamar Object.keys() no aparece la propiedad
        -Con Object.getOwnPropertyNames() si aparece la propiedad, es una pequeña diferencia
    -Caso: Writable = false
        -Cuando se manda a llamar Object.keys() si aparece la propiedad
        -No va a permitir editar esa propiedad pero si nos va a dejar eliminar la propiedad.
    -Caso: Configurable = false
        -Cuando se manda a llamar Object.keys() si aparece la propiedad
        -No va a permitir editar eliminar esa propiedad del objeto
        -Si va a permitir editar la propiedad del objeto
     -Caso: Configurable = false , Writable = false , Enumerable = false
        -No nos va a dejar ni eliminar, ni editar ni enumerar los atributos del objeto
*/

/*
Object.seal()
    -Va a hacer que las propiedades del objeto no se puedan eliminar

Object.freeze()
    -No va a dejar ni eliminar ni editar las propiedades del objeto

*/ 

Object.defineProperty(juan, 'friends',{
    value: false,
    enumerable: false,
    writable: true,
    configurable:true
})

Object.defineProperty(juan, 'family',{
    value: true,
    enumerable: true,
    writable: false,
    configurable:true
})

Object.defineProperty(juan, 'love',{
    value: false,
    enumerable: true,
    writable: true,
    configurable:false
})

Object.defineProperty(juan, 'self_love',{
    value: true,
    enumerable: false,
    writable: false,
    configurable:false
})

const jhon = {
    name:'jhoncito',
    age: 22,
    country:'Col'
}

//Object.seal(jhon)
Object.freeze(jhon)

//Shallow copy
