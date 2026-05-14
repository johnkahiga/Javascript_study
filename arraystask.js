// Assignment1
let colors=['red','green','blue']
console.log(colors)
//Assignment2
colors[1]='pink'
console.log(colors)
//Assignment3
let lenghtofcolors=colors.length
console.log(lenghtofcolors)
//Assignment4
colors.pop()
console.log(colors)

//Combine Arrays
let arr1=[1,2,3,'John']
let arr2=[4,5,6,'Kahiga']
let combinedArray=arr1.concat(arr2)
combinedArray.shift()
console.log(combinedArray)

//Extract Subarray
let sourcearray=[1,2,3,4,5,6,7,'ghii']
let extractedarray=sourcearray.slice(2,5)
console.log(sourcearray)
console.log(extractedarray)
extractedarray.splice(0,3,'x','y','z')
console.log(extractedarray)