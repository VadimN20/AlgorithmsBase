/*
Пакет яблок
Есть пакет с яблоками. В нем может быть 2 вида яблок, которые
отличаются по виду. Нужно понять, находятся ли в пакете яблоки одного
вида. Если в пакете яблоки разного вида, то нужно понять какого вида
яблок больше
*/
// reduce

const apples = [1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2]

let typeOne = apples[0]
let typeTwo = 0
let countTypeOne = 0
let countTypeTwo = 0

for(let apple = 0; apple < apples.length; apple++) {
    if(apples[apple] === typeOne) {
        countTypeOne++        
    }
    else {
        typeTwo = apples[apple]
        countTypeTwo++
    }
}

if(countTypeTwo === 0) {
    console.log(`В пакете только вида "${typeOne}" в количестве ${countTypeOne}`)
}
else {
    console.log(`В пакете яблоки двух видов "${typeOne}" и "${typeTwo}" в количестве ${countTypeOne} и ${countTypeTwo} соответственно`)
}

console.log(countTypeOne >= countTypeTwo ? `Яблок типа ${typeOne} больше` : `Яблок типа ${typeTwo} больше`)