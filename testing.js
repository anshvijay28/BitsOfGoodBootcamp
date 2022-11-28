const person = {
	name: "ansh",
	age: 17,
	sport: "tennis",
	height: 63,
};

person.greatFlaw = "Afraid of heights";

l1 = [1, 2, 3, 4, 5, 6];
l2 = [7, 8, 9, 10, 11, 12, 13];

l3 = [...l1, ...l2];
l3.pop();

const person1 = {
	name: "brian",
	age: 17,
	sport: "basketball",
	height: 53,
};

const person2 = {
	name: "anish",
	age: 17,
	sport: "tennis",
	height: 59,
};

people = [person, person1, person2];

//console.table(people);

const meats = {
	steak: "1lbs",
	chicken: "1lbs",
};

const veggies = {
	choppedOnion: "1/2 cup",
	bellPepper: "1/2 sliced",
};

const spices = {
	chiliPowder: "1/2 teaspoon",
	garlicPowder: "1/2 teaspoon",
	driedOregano: "1 teaspoon",
};

const fajitas = {
	...meats,
	...veggies,
    ...spices,
    person,
    person1,
    person2,
};

console.table(fajitas);
