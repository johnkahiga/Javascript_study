// Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
let num = Number(prompt("Enter number:"))

for (let i=0;i<num;i++){
    let star = ""
    for (let j=1;j<=i;j++)
    star+="*"
    console.log(star)
}