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
Object.defineProperty(juan, 'transporte', {
    value: 'moto',
    enumerable: true,
    writable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptors(juan))

//Object.defineProperty()
