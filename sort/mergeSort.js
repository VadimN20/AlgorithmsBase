const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    const merge = (left, right) => {
        console.log(left, right)
        const result = []
        while(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift())
            }
            else {
                result.push(right.shift())
            }
        }
        return result.concat(left, right)
    }
    return merge(mergeSort(left), mergeSort(right))
}


const startArray = [5, 6, 1, 509,3012, 941,9, -4, 924, 5, 123, 59, 91, 59, 1249, 596, 9124, 67, -68, 823]
const resultArray = mergeSort(startArray)
console.log(resultArray)