const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }

    const keyArr = arr[arr.length - 1]
    const left = []
    const right = []
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] < keyArr) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), keyArr, ...quickSort(right)]
}

const startArray = [5, 6, 1, 509,3012, 941,9, -4, 924, 5, 123, 59, 91, 59, 1249, 596, 9124, 67, -68, 823]
const result = quickSort(startArray)
console.log(result)