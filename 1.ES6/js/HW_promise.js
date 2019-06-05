// Задание 1
// Напишите стрелочную функцию с именем sleep, использующую Promise, которая принимает в качестве единственного аргумента количество миллисекунд и возвращает промис, который успешно исполнится через количество миллисекунд из аргумента.

const sleep = timeSecond =>{
	const newPromiseExample = new Promise(resolve =>{
	const message = `This was print in`;
	setTimeout(() => {
		resolve(`${message} ${timeSecond/1000} seconds`)
	}, timeSecond)
});
newPromiseExample
	.then(result =>{
		console.log(result)
	})
};
sleep(500);

// Задание 2

// Оберните в Promise (профисифицируйте) следующую функцию которую мы использовали в примерах ранее. Помните, что мы должны не только изменить состояние Promise, но и вернуть данные:

// function anythingToLowerCase(anything) {  
// if (!anything) {    
// return ''  
// }  
// return String(anything).toLowerCase()
// }

const anythingToLowerCase = anything =>{
	const toLC = new Promise ((resolve, reject)=>{

	resolve(String(anything).toLowerCase())	
	})
	toLC
		.then(result => {
			// return `Your result is ${result}`
			console.log(result)
		})
}
anythingToLowerCase('AshWaghaNDA')
