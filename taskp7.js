// Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40
let marks = Number(prompt("Enter student marks "))
if (marks<100){
    if (marks > 79) {
        console.log('Grade A')
    } else if (marks >= 60) { 
        console.log('Grade B')
    } else if (marks >= 50) {
        console.log('Grade C')
    } else if (marks >= 40) { 
        console.log('Grade D')
    } else {                 
       console.log('Grade E')
    }
}else{
    console.log('Not Wthin range of O-100')
}
