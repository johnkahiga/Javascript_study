// Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
let num = String(Number(prompt("Enter number:")))
let star = "*"
for (let i=0;i<num.length;i++){
    star+="*"
    console.log(star)
}