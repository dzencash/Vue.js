// Переменные ES6 (let, const)
// for(i = 0; i <= 10; i++){
// 	console.log(i)
// }
// ----------------------------

// Стрелочные функции

// Сделать число из строки

// function test(arg){
// 	return Number(arg);
// }
const test = arg => Number(arg);
// console.log(test('11'))

// Отсортировать массив

const arr = [1,13,23,32,300,-1,0];
// arr.sort(function(a,b){
// 	return a - b;
// })
arr.sort((a,b) => a - b);
// console.log(arr)

// Вывести полное имя пользователя
const person = {
	name: 'Alex',
	surname: 'Petrov',
	friendList: ['Vasya','Anna','Sasha']
}
person.getFullName = function (){
	return this.name + ' ' + this.surname;
}
// console.log(person.getFullName())
// В стрелочной функции this. всегда взять из окружения, а не из контекста
// person.getFriendList = function(){

// В данном случае this берется из контекста функции(friend), а не объекта
// 	this.friendList.forEach(function(friend){
// 		console.log(this.name + ' friend with ' + friend)
// 	})
// }
// В данном случае this берется из объекта, а не из контекста функции(friend)
person.getFriendList = function(){
	this.friendList.forEach(friend =>{
		console.log(this.name + ' friend to '+ friend)
	})
}
// person.getFriendList()



