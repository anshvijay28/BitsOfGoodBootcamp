function helloWorld(){
    return "Hello World!"
}

const helloWorld1 = (name) => {
    return "Hello " + name + "!"
}

//actualyyy arrow functions implicitly return things ex:

const square = (num) => num**2

const dog = {
    age: 42,
    sound: () => (console.log("woof")),
}

why = [{
    thisIsCrazy: () => {
        return function sayHi() {
            console.log("Say Hi!")
        }
    }

}]

//console.log(helloWorld1("Ansh"))
//console.log(square(4))
//dog.sound()

//why[0].thisIsCrazy()()

const dogs = [
    {
      id: 'dog-1',
      name: 'Poodle',
      temperament: ['Intelligent', 'Active', 'Instinctual', 'Faithful'],
    },
    {
      id: 'dog-2',
      name: 'Bernese Mountain Dog',
      temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    },
    {
      id: 'dog-3',
      name: 'Labrador Retriever',
      temperament: ['Intelligent', 'Even Tempered', 'Kind', 'Gentle'],
    },
  ]

//dogs.forEach(dog => console.log(dog.temperament[0]))

const newDog = dogs.map((dog, index) => [dog.name, index])
console.log(newDog)

const filteredDog = dogs.filter(dog => dog.temperament.includes("Loyal"))
//console.log(filteredDog)

const temperaments = dogs.reduce((allTemperments, dog) => {
    return [...allTemperments, dog.temperament]
}, [])

//console.log(temperaments)

listOfNums = [1,2,43,5,32,5]

const sum = listOfNums.reduce((currentSum, currentNum) => {
    return currentSum + currentNum;
}, 0);
//console.log(sum)

const specificDog = dogs.find(dog => {return dog.name == 'Labrador Retriever'})
//console.log(specificDog)