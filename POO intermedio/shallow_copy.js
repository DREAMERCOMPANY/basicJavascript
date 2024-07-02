/*
Crear copias que no apunten a la misma referencia en memoria
    -Con Object.create(), no se afecta el objeto original si se cambian las propiedades desde el objeto copia, pero si se cambian desde el objeto original se cambian las del objeto copia
    -Con un ciclo for se puede hacer para crear otra referencia en memoria pero cuando se crea un objeto dentro de un objeto no funciona.
*/

const fake_love = {heart_broken: true, victim:'Jhon', reasons: {person: 'rosa'}}
const fake_love_copy = {}

for(let item in fake_love){
    fake_love_copy[item] = fake_love[item]
}

fake_love.heart_broken = false
fake_love.reasons.person = null

console.log(fake_love)
console.log(fake_love_copy)

