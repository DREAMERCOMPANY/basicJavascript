const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  //Con map y flat sacar solo la informacion de los atributos en un arreglo unidimensional

  const userAttributes = users.map(item =>item.attributes).flat()

  //Con flatMap sacar la info de los atributos de un arreglo unidimensional
  const userAttributes2 = users.flatMap(item => item.attributes)

  console.log({
    userAttributes,
    userAttributes2
  })

  //Exercise: sacar solo la fecha de inicio de esta respuesta de una API

  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };


  const rta2 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate)
  })

  console.log(rta2);
