const startArray = [5, 6, 1, 509,3012, 941,9, -4, 924, 5, 123, 59, 91, 59, 1249, 596, 9124, 67, -68, 823]

const bubleSort = (array) => {
    let arrayCopy = [...array]
    for(let i = 0; i < startArray.length; i++) {
        for(let j = 0; j < startArray.length-i; j++) {
            if(arrayCopy[j+1] < arrayCopy[j]) {
                let temp = arrayCopy[j+1]
                arrayCopy[j+1] = arrayCopy[j]
                arrayCopy[j] = temp
            }
        }
    }
    return arrayCopy
}

const resultArray = bubleSort(startArray)
console.log(startArray)
console.log(resultArray)