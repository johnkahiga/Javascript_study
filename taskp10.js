// Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit in every array/list.

// prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]
let prods = [['omo','30kshs','300'], ['milk','50kshs','200'],['bread','45kshs','359'], ['coffee','5kshs','79']]
let totalStock = 0
for (let i = 0; i < prods.length; i++){
    let val=prods[i][2]
    let val1=Number(val)
    totalStock+=val1
}
console.log(totalStock)