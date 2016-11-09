const gameName = "Survival Fighter SD"
const gameVersion = "1.0"

var userHealth = 20
var userDamage = 5

function versionGame(gameName,gameVersion){
	document.write("Bienvenue dans " + gameName + " " + gameVersion)
}

//create ia
function createIa() {
	var iaHealth = Math.floor(Math.random() * 30) + 1
	var iaDamage = userDamage + 1
}

function combat(userDamage, iaHealth, iaDamage, userHealth) {
	//call ia
	createIa()

	while(true) {

		userCombat(userDamage, iaHealth)

		iaCombat(iaDamage, userHealth)

		if(iaHealth <= 0){
			console.log("user win")
			break
		} else if (userHealth <= 0){
			console.log("ia win")
			break
		}
	}
}

function userCombat(userDamage, iaHealth){
	
	//luckHit 50%
	var luckHit = Math.floor(Math.random() * 100)

	if (luckHit >= 50) {
		iaHealth = iaHealth - userDamage
		console.log("ia lost " + iaHealth + " hp")
	}
}

function iaCombat(iaDamage, userHealth){
	var luckHit = Math.floor(Math.random() * 100)
	
	if (luckHit >= 50) {
		userHealth = userHealth - iaDamage
		console.log("user lost " + userHealth + " hp")
	}
}