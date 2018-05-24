// first name & last name
let firstName = 'Sapi'
let lastName = 'Bebek'
console.log(firstName + ' ' + lastName)

// if else 
let name = 'sapi'
let age = 26 
let isMarried = 'no'

if (isMarried === 'yes'){
	console.log(name + ' is married')
} else {
	console.log(name + ' will married soon')
}

// objects 
// kalau di js ini namanya object 
// isinya property : variable name, lastname dst 
// 
let john = {
	name: 'Bebek', 
	lastname: 'Sapi',
	yob: 1990,
	job: 'teacher',
	isMarried: false
}

console.log(john)

// bisa juga dipanngil 
let jane = new Object()
jane.name = 'Saitama'
jane.lastname = 'opm'
jane['yob'] = 1500 // bisa juga dipanngil kaya gini, pakai arrray
jane.job = 'enterpreneur'
jane.isMarried = true

console.log(jane)