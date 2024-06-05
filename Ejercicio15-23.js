//15
const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

for (let i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    console.log(products[i])
  }
}

products.forEach((product) => {
  if (product.includes('Camiseta')) {
    console.log(product)
  }
})
//16
const placeToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

for (const place of placeToTravel) {
  console.log(place)
}
//17
const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}

for (const property in alien) {
  console.log(`La propiedad ${property} tiene cómo valor: ${alien[property]}`)
}
//18
const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

const filteredPlaces = []

for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {
    filteredPlaces.push(placesToTravel[i])
  }
}

console.log(filteredPlaces)
//19
const tois = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
]

const filteredToys = []

for (const toy of tois) {
  if (!toy.name.includes('gato')) {
    filteredToys.push(toy)
  }
}

console.log(filteredToys)
//20
const popularToys = []

const toys = [
  { id: 101, name: 'Super Soaker', sellCount: 15 },
  { id: 102, name: 'Tamagotchi', sellCount: 22 },
  { id: 103, name: 'Polly Pocket', sellCount: 8 },
  { id: 104, name: 'Yo-yo', sellCount: 33 },
  { id: 105, name: 'Pikachu plush toy', sellCount: 19 },
  { id: 106, name: "Rubik's Cube", sellCount: 27 },
  { id: 107, name: 'Fidget Spinner', sellCount: 12 },
  { id: 108, name: 'Slinky', sellCount: 5 },
  { id: 109, name: 'Magic 8-Ball', sellCount: 38 },
  { id: 110, name: 'Troll Doll', sellCount: 20 }
]

for (const toy of toys) {
  if (toy.sellCount > 15) {
    popularToys.push(toy)
  }
}

console.log(popularToys)
//21
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

console.log('Usuarios menores de edad:')
for (const user of users) {
  if (user.years < 18) {
    console.log(user.name)
  }
}

console.log('Usuarios mayores de edad:')
for (const user of users) {
  if (user.years >= 18) {
    console.log(user.name)
  }
}
//22
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule.splice(i, 1)

    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)]
    if (!foodSchedule.some((food) => food.name === randomFruit)) {
      foodSchedule.push({ name: randomFruit, isVegan: true })
    }
  }
}

console.log(foodSchedule)
//23
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]

const smallMovies = []
const mediumMovies = []
const largeMovies = []

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie)
  } else {
    largeMovies.push(movie)
  }
}

console.log('Películas pequeñas:')
console.log(smallMovies)

console.log('\nPelículas medianas:')
console.log(mediumMovies)

console.log('\nPelículas grandes:')
console.log(largeMovies)
