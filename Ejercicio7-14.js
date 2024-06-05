function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log('El número más alto es:', numberOne)
  } else if (numberTwo > numberOne) {
    console.log('El número más alto es:', numberTwo)
  } else {
    console.log('Los números son iguales:', numberOne)
  }
}

greaterNumber(5, 10) // Devuelve: El número más alto es: 10
greaterNumber(20, 10) // Devuelve: El número más alto es: 20
greaterNumber(8, 8) // Devuelve: Los números son iguales: 8
//8
const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(stringList) {
  let longestWord = stringList[0]
  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i]
    }
  }

  return longestWord
}

// Ejemplo de uso:
console.log(findLongestWord(avengers)) // Devuelve: "Iron Man"
//9
const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(numberList) {
  let sum = 0 // Inicializamos la variable sum para almacenar la suma

  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i] // Sumamos cada número del array a la variable sum
  }

  return sum
}

console.log(sumNumbers(numbers)) //
//10
const number = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  let sum = 0

  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i]
  }

  let avg = sum / numberList.length

  return avg
}

console.log(average(number))
//11
const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]

function averageWord(list) {
  let sum = 0
  let count = 0
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      sum += list[i]
    } else if (typeof list[i] === 'string') {
      sum += list[i].length
    }
    count++
  }

  let avg = sum / count

  return avg
}
//12
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(list) {
  let uniqueList = []

  for (let i = 0; i < list.length; i++) {
    if (!uniqueList.includes(list[i])) {
      uniqueList.push(list[i])
    }
  }

  return uniqueList
}

;+console.log(removeDuplicates(duplicates))

console.log(averageWord(mixedElements))
//13
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function nameFinder(nameList, value) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === value) {
      return { found: true, position: i }
    }
  }
  return { found: false }
}

console.log(nameFinder(names, 'Natasha'))
console.log(nameFinder(names, 'Thor'))
//14
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

function repeatCounter(list) {
  const count = {}
  for (let i = 0; i < list.length; i++) {
    const word = list[i]
    if (count[word]) {
      count[word]++
    } else {
      count[word] = 1
    }
  }

  return count
}

console.log(repeatCounter(words))
