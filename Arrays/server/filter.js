//filtrar en un arreglo de palabras con filter y for

//Con un ciclo for
const letters = ['Jhon', 'Juanes', 'Cata', 'Sebas', 'Ingrid', 'aa']
const filterLetters = []

for(let i=0; i<letters.length; i++){
    const element = letters[i]
    if(element.length<= 4){
        filterLetters.push(element)
    }
}

//con filter
const rta = letters.filter(word => word.length <= 2)
console.log(
    letters,
    filterLetters,
    rta
)

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

 const ordersDelivered = orders.filter(order => order.delivered)
  const ordersDeliveredHight = orders.filter(order => order.delivered && order.total>=180)
  console.log({
    ordersDelivered,
    ordersDeliveredHight
  }) 

  const search = (query, obj) => {
    const lowerCaseQuery = query.toLocaleLowerCase()
    return obj.filter(order => order.customerName.toLocaleLowerCase().includes(lowerCaseQuery))
  }

  console.log(search('S',orders))



  
