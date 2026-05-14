let person={
    name:'John Kahiga',
    age:29,
    address:'123 kimathi Street',
    'is employed':true
}
console.log(person)
console.log(person.name)
console.log(person['is employed'])
console.log(person['address'])

person.name='Philip'
person.age=67
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))