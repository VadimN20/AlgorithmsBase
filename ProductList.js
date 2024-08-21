/*
Разность продуктов
Есть 2 списка продуктов. Один список содержит продукты, которые
нужно купить к вечеринке. Второй - продукты, на которые у гостей
аллергия. Нужно из первого списка убрать все продукты, которые есть во
втором списке.
*/

let productList = ['Bread', 'Milk', 'Eggs', 'Nuts', 'Apples', 'Fish', 'Honey', 'Rice', 'Chicken', 'Cheese', 'Oranges', 'Pasta', 'Yogurt', 'Spinach', 'Bananas']
const allergyList =  ['Nuts', 'Milk', 'Eggs', 'Fish', 'Wheat', 'Soy', 'Shellfish', 'Peanuts']

for(const allergyProduct of allergyList) {
    let numberProduct = productList.indexOf(allergyProduct)
    productList.splice(numberProduct, 1)
}

console.log(productList)
console.log(allergyList)