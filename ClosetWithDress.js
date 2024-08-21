/*
Шкаф с платьями
В шкафу платья 4-х разных цветов (красные, синие, белые и зеленые).
Также есть 2 коробки. Нужно положить в первую коробку платья красного
и зеленого цвета. Платья синего цвета положить во вторую коробку. А
белые платья оставить в шкафу.
*/
let closet = ['white', 'green', 'red', 'blue','white', 'green',  'white','green', 'green', 'green', 'white','blue','blue','white','blue','green', 'white','green', 'green','red','red','white','red','red',]
let boxOne = []
let boxTwo = []
let indexDelete = 0

for(let dress = 0; dress < closet.length; dress++) {
    if(closet[dress] === 'red' || closet[dress] === 'green') {
        boxOne.push(closet[dress])
        closet[dress] = 0;
        indexDelete++
    }
    else if(closet[dress] === 'blue') {
        boxTwo.push(closet[dress])
        closet[dress] = 0
        indexDelete++
    }
}


for(let index = 0; index < indexDelete; index++) {
    // let emptyDressNum = closet.indexOf(0)
    // closet.splice(emptyDressNum, 1)
    closet = closet.filter
}

console.log(`Коробка с зелеными и красными | ${boxOne.join(' ')}`)
console.log(`Коробка с синими | ${boxTwo.join(' ')}`)
console.log(`Шкаф с оставшимися белыми | ${closet.join(' ')}`)