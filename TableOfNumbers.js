/* 
Таблица с числами
Есть таблица, в каждой ячейке которой может находиться число,
отрицательное или положительное. Нужно пройтись по строкам таблицы
и заменить число на 0, если оно отрицательное.
*/

let tableOfNumber = [ [1, 2, -1, -5, 23, -524],
                      [6, -20, 6, 46, 91, -2],
                      [2, 5, 14, 6, -5, 12]
]

console.log(tableOfNumber)

for(let i = 0; i < tableOfNumber.length; i++) {
    for(let j = 0; j < tableOfNumber[i].length; j++) {
        if(tableOfNumber[i][j] < 0) {
            tableOfNumber[i][j] = 0
        }
    }
}

console.log(tableOfNumber)