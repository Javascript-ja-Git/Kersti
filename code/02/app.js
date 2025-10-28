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

/*const color = prompt("Mis värvi on foori tuli?");
if(color === "roheline"){
    alert("Võid üle tee minna");
}

else{
    alert("Pead ootama");
}

   if(color === "roheline"){
    alert("Võid edasi sõita");
   } else if(color==="kollane"){
    alert("Pead veel tükk aega ootama");
   }else if(color==="punane"){
    alert("Oota veel pisut");
   }else {
    alert("Sellist värvi ei tohiks fooris olla");
   }
*/

//Parooli kontrollimine

/*const password = prompt("Palun sisesta kasutaja parool");

const existingPassword = "admin123";
if(password === "existingPassword"){
    alert("Tere tulemast!");
}
else{
    alert("Vale parool");
}

if(password !== "existingPassword"){
    alert("Vale parool");
}
else{
    alert("Tere tulemast!");
}
*/

//Vanuse kontroll

/*const age = prompt("Palun sisesta enda vanus");

if(age ==="18"){
    alert("Oled täisealine!");
}

else{
    alert("Oled alaealine!");
}

if(age <18){
    alert("Oled alaealine!");
}

else{
    alert("Oled täisealine!");
}


if (age< ageLimit) {
    alert("oled alaealine");
} else{
    alert("Oled täisealine");
}
    */

/*const age = Number(prompt("Sisesta oma vanus"));

alert(typeof age);
*/

//Lihtne kalkulaator
/*
const number1 = Number(prompt("Sisesta esimene arv"));
const number2 = Number(prompt("Sisesta teine arv"));

const operator = prompt("Millist tehet soovid teha? (+, -, *, /");
if (operator=== "+"){
    alert(number1 + number2);
}

else if(operator === "-" ){
    alert(number1 - number2);
}

else if(operator === "*"){
    alert(number1 * number2);
}

else if(operator ==="/"){
    alert(number1 / number2);
}

else {
    alert("Seda funktsiooni kalkulaator veel ei toeta");
}
    */

//Tsüklid"

//const count = Number(prompt("Sisesta korduste arv"));

/*const count = 11;

for (let index = 1; index < count; index = index + 1) {
    console.log("1 *", index, "=", 1 * index);   
}
*/

/*Korrutustabel

const count = 11;

for (let i = 1; i < count; i = i + 1){
    for (let j = 1; j < count; j = j + 1){
        console.log(i + "*" + j +"=" + i * j);
    }
}

/*const password = `1234`;

const password = prompt(`Palun sisesta parool`);

if(password === `1234`) {
    alert (`Parool on õige, tere tulemast!`);   
} else {
    alert (`Vale parool`);
} */


const password = `1234`;
//if (something)
if (password = `1234`) {
    alert (`Something`);
} else {
    alert (`Not Something`);
}

for (let i = 1; i < 6; i ++) {
    console.log (i);
}
