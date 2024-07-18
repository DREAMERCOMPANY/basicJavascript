//Reto: Eliminar un elemento sin modificar el array original
//Reto: copiar un Objeto sin modificar el arreglo original teniendo en cuenta un ID dado

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

const productIndex = products.findIndex(item => item.id == '🍔')

if(productIndex !== -1){
    myProducts.push(products[productIndex])
    products.splice(productIndex, 1)
}

//Actualizar un elemento del arreglo 

const arr = [1,2,3,4,5,6]
const sliceArr = arr.slice(2,5)

const arr2 = [1,2,3,4,5,6]
const sliceArr2 = arr2.splice(1,1)

console.log({
    arr2,
    sliceArr2
});


console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//------------------

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

changeProduct = {
    id: '🥞',
    changes:{
        price: 200,
        title: 'The best food'
    }
}

const indexProductToChange = productsV2.findIndex(item => item.id == changeProduct.id)

if(indexProductToChange !== -1){
    Object.assign(productsV2[indexProductToChange], changeProduct.changes);
}

console.log(productsV2)