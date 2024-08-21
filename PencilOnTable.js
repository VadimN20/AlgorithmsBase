/* 
Карандаши на столе
На столе есть четное количество карандашей. Есть 2 пустых пенала.
Нужно, в каждый пенал положить одинаковое количество карандашей.
Брать можно только по 1 карандашу.
!Нельзя использовать длину изначального массива
*/

let pencilsOnTable = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(`На столе изначально ${pencilsOnTable.length} карандашей`)
let penaltyOne = []
let penaltyTwo = []
let switchPenalty = 0

while(pencilsOnTable[0]) {
    if(switchPenalty % 2 === 0) {
        penaltyOne.push(pencilsOnTable.pop())
    }
    else {
        penaltyTwo.push(pencilsOnTable.pop())
    }
    switchPenalty++
}

console.log(penaltyOne, penaltyTwo)
console.log(`По итогу в первом пенале ${penaltyOne.length} карандашей, и во втором - ${penaltyTwo.length}`)