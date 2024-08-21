
// const result= [5, 6, 1, 509,3012, 941,9, -4, 924, 5, 123, 59, 91, 59, 1249, 596, 9124, 67, -68, 823]
const searchNum = 596

const binarySearch = (result, searchNum) => {
    let first = 0;
    let last = result.length - 1;
    let foundIndex = -1

    while(first <= last) {
        const mid = Math.floor((first+last) / 2)

        if(result[mid] == searchNum) {
            foundIndex = mid
            break
        }
        else if (result[mid] > searchNum) {
            last = mid - 1
        }
        else {
            first = mid + 1
        }
    }
    return foundIndex
}
console.log(binarySearch(result, searchNum))


