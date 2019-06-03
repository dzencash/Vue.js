// Перепишите в виде стрелочной функции

// function cleanPhoneNumber(phone) { return phone.replace(/-/g, '') }

const cleanPhoneNumber = phone => phone.replace(/-/g,'')

// символ / - выражение /s/ ищет просто символ 's'; g — глобальный поиск (обрабатываются все совпадения с шаблоном поиска);
console.log(cleanPhoneNumber('89-13-140-131-4'));

// function anythingToLowerCase(anything) {
//   if (!anything) {
//     return ''
//   }
//   return String(anything).toLowerCase()
// }
const anythingToLowerCase = anything =>{
	if(!anything) return '';
	return String(anything.toLowerCase());

}
console.log(anythingToLowerCase('AdASDsda1'))