const name = "Survival Fighter SD"
const version = "1.0"

function versionGame(name,version){
	document.write("Bienvenue dans " + name + " " + version)
}

var sales = "Toyota";

var car = { myCar: "Saturn", getCar: carType("Honda"), special: sales}

function greetMe(yourName){
	console.log("Hello " + yourName);
}

greetMe("Efiria");


function carType(name) {
	if (name === "Honda") {
		return "Here is your " + name
	}else{
		return "Sorry we don't sell " + name
	}
}

console.log("My car is a "+ car.myCar)
console.log(car.getCar)
console.log(car.special)

console.log(car.myCar.length); //saturn
console.log("Oui j'ecri\n\tsur deux lignes avec une tabulation ")