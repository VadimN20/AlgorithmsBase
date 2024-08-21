/* 
Подсчет частоты встречаемости карандашей
В пенале есть карандаши различных цветов. Нужно подсчитать сколько
раз встречаются карандаш с цветом из следующего списка «красный»,
«синий», «зеленый», «желтый», «черный». После этого нужно вывести
цвет, который встречался чаще остальных.
*/

const penaltyPalette = {
    black: 0,
    yellow: 0,
    green: 0,
    blue: 0,
    red: 0
}

const penalty = ['black', 'yellow', 'yellow','black', 'green','blue','red','green','yellow', 'green','blue','red','red','red','red','red','yellow','yellow','yellow','yellow', 'red' ]

for (color in penaltyPalette) {
    penalty.forEach((penColor) => color === penColor ? penaltyPalette[color]++ : '')
}

let max = 0
let colorMaxName = ''

for(color in penaltyPalette) {
    if (penaltyPalette[color] > max) {
        max = penaltyPalette[color]
        colorMaxName = color
    } 
}

Object.entries

console.log(penaltyPalette)
console.log(`Чаще всего встречался цвет ${colorMaxName} - ${max} раз`)