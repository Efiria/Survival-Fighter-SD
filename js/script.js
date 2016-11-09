const gameName = "Survival Fighter SD"
const gameVersion = "1.0"

var userHealth = 20
var userDamage = 5

function versionGame(gameName,gameVersion){
	document.write("Bienvenue dans " + gameName + " " + gameVersion)
}

function combat(userDamage, userHealth, iaDamage, iaHealth) {
	
	var iaHealth = Math.floor(Math.random() * 30) + 1

	var iaDamage = userDamage - Math.floor(Math.random() * 2)
	
	while(iaHealth >= 0 || userHealth >= 0) {
		userCombat(userDamage, userHealth)

		iaCombat(iaDamage, iaHealth)
	}
}

function userCombat(userDamage, userHealth){
	
	//luckHit 50%
	var luckHit = Math.floor(Math.random() * 100)

	if (luckHit >= 50) {
		iaHealth = iaHealth - userDamage
		console.log("ia lost " + iaHealth + " hp")
	}
}

function iaCombat(iaDamage, iaHealth){
	var luckHit = Math.floor(Math.random() * 100)
	
	if (luckHit >= 50) {
		userHealth = userHealth - iaDamage
		console.log("user lost " + userHealth + " hp")
	}
}