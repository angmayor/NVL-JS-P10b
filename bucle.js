var numAle = [];
var impar = [];
var par = [];
var numeros = [];

for (var i = 0; i<50; i++){
	var numeros = Math.floor((Math.random() * 100) + 1);
	numAle.push(numeros)
	
	 if (numAle[i] % 2 == 0){
		
		par.push(numAle[i]);
	

	} else{

		impar.push(numAle[i]);
	}		
}

console.log(par);
console.log(impar);







































