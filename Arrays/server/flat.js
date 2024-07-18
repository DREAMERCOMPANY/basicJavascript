const matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, ['A', 'B', 'C', ['Jhon','Cata', 'Rose']], 8],
    [9, 10, 11, 12]
];

const flatMatrizFor = []

for(let i=0; i<matriz.length; i++){
    for(let j= 0; j< matriz[i].length; j++){
        if(Array.isArray(matriz[i][j])){
            for(let k= 0; k<matriz[i][j].length; k++){
                if(Array.isArray(matriz[i][j][k])){
                    for(let l=0; l<matriz[i][j][k].length; l++){
                        const element = matriz[i][j][k][l]
                        flatMatrizFor.push(element)
                        //console.log(matriz[i][j][k][l])
                    }
                }else{
                    const element = matriz[i][j][k]
                    flatMatrizFor.push(element)
                    //console.log(matriz[i][j][k])
                }
            }
        }else{
            const element = matriz[i][j]
            flatMatrizFor.push(element)
            //console.log(matriz[i][j])
        }
    }
}



const flatMatriz = matriz.flat(Infinity)

console.log({
    flatMatrizFor,
    flatMatriz
})