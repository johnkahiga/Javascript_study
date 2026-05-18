// // Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”
// Once you learn functions,revisit this and write this code inside a function.

let n=prompt('Enter phone number')
if ((n.startsWith('07')||n.startsWith('01'))&&n.length==10){
    console.log(n.slice(1).replace('','+254'))
}else{
    if(n.startsWith('+254')&& n.length==13){
        console.log(n) 
    }else if(n.startsWith('254')&& n.length==12){
        console.log("+"+n)
    }else if(n.startsWith('7')&& n.length==9){
        console.log(n.replace('','+254'))
    }else{
        console.log('Not a phone number')
    }   
}