
var win = 0


function combat(win) {

	while(win == 15) {
		userCombat()

		console.log(" ")

		iaCombat()

		if(iaHealth <= 0){
			console.log("user win")
			return win = 1 
		} else if (userHealth <= 0){
			console.log("ia win")
			return win = 2
		}
	}

}

function userCombat(){
	
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

function iaCombat(){

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