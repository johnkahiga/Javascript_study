// Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against “admin@123”. If the password is correct access is granted. After you show them a message , the account is blocked.
let correct_pas='admin@123'
for (let i=4;i>0;i--){
    let pas=prompt('Enter the pasword'+ [i] +' atempts remaining' )
    if (pas==correct_pas){
        console.log('Acces Granted')
        break;
    }else if(i==1){
        console.log('The account is blocked')
    }else{
        console.log('Try again')
    }
}