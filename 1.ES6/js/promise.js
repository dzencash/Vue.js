// Синтаксис
// const getData = new Promise((resolve, reject) =>{
// 	cosnt data = `Some data string`

// 	setTimeout((){
// 		resolve(data)
// 	}, 1000)
// })
// getData
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	});
// Основные методы:
// Promise.reject - возвращает отклоненный Promise c указанным значением
// Promise.resolve - возвращает выполненный Promise c указанным значением
// Два дополнительных метода:
// Promise.all - возвращает Promise который выполнится после выполнения всех Promise в аргументе
// Promise.race - возвращает первый выполненный или отклоненный Promise из списка

// Состояние Promise:
// pending - начальное состояние 
// fulfill - обещание выполненного (после .then())
// rejected - ошибка (после .catch())

//resolve() - завершает Promise

// Пример

const getData = new Promise ((resolve, reject) => {
	const data = `This is some data string`

	//С помощью setTimeout симулируем асинхронный запрос (1000 = 1сек?)
	setTimeout(() => {
	//После получения данных мы отдаем их в resolve()
		resolve(data)
		reject(`Some error`)
	}, 1000)
});

// Если состояние Promise завершилось на fulfill(успешно завершен) мы следуем по пути then
getData
	.then(result =>{
		// console.log(result);
		return `Test! ` + result;
	})
	.then(data =>{
		return data.toUpperCase();
	})
	.then(console.log)
	.catch(err =>{
		console.log(err);
	});
