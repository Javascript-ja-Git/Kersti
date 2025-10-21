//Tervituse programm

/*const name = prompt("Mis su nimi on?");
alert("Tere " + name);
*/

//Vanuse arvutamine

//alert("Sinu vanus on:" + (2025 -prompt("Sisesta oma vanus")))
/*const year = prompt("Sisesta oma sünniaasta");
const currentYear = 2025;
const age = currentYear - year;

alert("Sinu vanus on:" + age);
*/

//Ristküliku pindala arvutamine

/*const heigth = prompt("Sisesta ristküliku kõrgus");
const width = prompt("Sisesta ristküliku laius");
const area = width * heigth;
alert("Ristküliku pindala on " + area);
*/

//Temperatuuride teisendamine

//Esimene versioon
/*const temperatureCelsius = prompt("Sisesta temperatuur Celsiuse kraadides");
const temperatureFahrenheit = temperatureCelsius *9 / 5 + 32;
alert("Temperatuur Fahrenheiti skaalal:" + temperatureFahrenheit);
*/

//Teine versioon
/*const C = prompt("Sisesta temperatuur Celsiuse kraadides");
const F = C * 9 / 5 + 32;
alert("Temperatuur Fahrenheiti skaalal:" + F);
*/

//Tingimuslaused

const color = prompt("Mis värvi on foori tuli?");
if(color === "roheline"){
    alert("Võid üle tee minna");
}

else{
    alert("Pead ootama");
}