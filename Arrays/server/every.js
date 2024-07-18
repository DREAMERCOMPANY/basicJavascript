//Evaluar que todos los elementos de un array cumplan cierta condicion

const ages = [12,13,14,15,16,17,20]
let validationFor = false

for(let i=0; i<ages.length; i++){
    if(ages[i]<21){
        validationFor = true
    }
}

//Evaluar que todos los elementos de un array cumplan cierta condicion con every

const validationEvery = ages.every(age => age<=15)
console.log({
    validationFor,
    validationEvery
})


//Validar si todos los miembros del equipo son menores de 15 años.

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const validateTeam = team.every(player => player.age < 15)
  console.log(validateTeam)

  function validateTeamMembers(obj){
    const isLessThan15Years = obj.every(member => member.age <= 15)
    if(isLessThan15Years){
        console.log('Members are less than 15 years old')
    }else{
        console.log('Members are not less than 15 years old')
    }
  }

  validateTeamMembers(team)

