
//create ia
function createIa(iaHealth, iaDamage) {
	var iaHealth = Math.floor(Math.random() * 30) + 1
	var iaDamage = userDamage

	return iaHealth, iaDamage
}

function combat(win) {

	var userHealth = 20
	var userDamage = 5

	var iaHealth = Math.floor(Math.random() * 30) + 1
	var iaDamage = userDamage

	while(iaHealth >= 0 || userHealth >= 0) {
		userCombat(userDamage, iaHealth)

		console.log(" ")

		iaCombat(iaDamage, userHealth)

	}
	if(iaHealth <= 0){
		console.log("user win")
		return win = 1 
	} else if (userHealth <= 0){
		console.log("ia win")
		return win = 0
	}

}

function userCombat(userDamage, iaHealth){
	
	var luckHit = Math.floor(Math.random() * 100)

	//luckHit 50%
	if (luckHit >= 50) {
		iaHealth = iaHealth - userDamage
		console.log("ia lost " + userDamage + " hp")
		console.log("ia hp : " + iaHealth)
	}
	else{
		console.log("user missed")
	}
}

function iaCombat(iaDamage, userHealth){

	var luckHit = Math.floor(Math.random() * 100)
	
	//luckHit 50%
	if (luckHit >= 50) {
		userHealth = userHealth - iaDamage
		console.log("user lost " + iaDamage + " hp")
		console.log("user hp : " + userHealth)
	}
	else{
		console.log("ia missed")
	}
}