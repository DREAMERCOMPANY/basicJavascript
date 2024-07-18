const names = ['Jhon', 'Oscar', 'Juan', 'David']
/* const newNames = []

for(let i = 0; i<names.length; i++){
    newNames.push(`__${names[i]}__`)
} */
const newNames = names.map(item => `__${item}__`)

console.log({
    names,
    newNames
})

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

  const rta = orders.map(item => item.total)
  /* const rta2 = orders.map(order =>{
    order.tax = 0.19
    return order
  }) */
 
  const rta3 = orders.map(order => {
    return {
        ...order ,
        tax:0.19
    }
  })
  console.log({orders, rta3});

  //Spread operator

  