const str1 = 'Текст'
const str2 = "Текст"
const str3 = `Текст "Текст"`

console.log(str1, str2, str3)

const User = {
	name: 'Anna',
	surname: 'Pattern',
	age: 23,
}

const string = 'Hi, it is '+ User.name +' '+ User.surname + '. She is '+ User.age + ' years old.';
const string2 = `Hi, it's ${User.name} ${User.surname}. She's ${User.age *= User.age} years old.`
// console.log(string)
console.log(string2);



const PiNum = `Pi number is ${parseInt(Math.PI)}`
console.log(PiNum)
