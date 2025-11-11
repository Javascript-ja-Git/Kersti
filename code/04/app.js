//const weekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", " reede", "laupäev", "pühapäev","puhkepäev","pesupäev"];

/*console.log(weekdays[0]);
console.log(weekdays[1]);
console.log(weekdays[2]);
console.log(weekdays[3]);
console.log(weekdays[4]);
console.log(weekdays[5]);
console.log(weekdays[6]);*/

/*for (let i = 0; i < weekdays.length; i++) {
    console.log(weekdays[i]);
}*/

//console.log(weekdays.length);


/*const temperatures = [];

for (let i = 1; i <= 5; i++) {

    const temp = Number(prompt(`Mitu kraadi on hetkel temperatuur`));
    temperatures.push(temp);
}

console.log(temperatures);*/

//const temperatures = [10, 12, 14, 10, 16, 10, 12, 14, 13];

/*for (let i = 1; i <= 5; i++) {

    const temp = Number(prompt(`Mitu kraadi on hetkel temperatuur`));
    temperatures.push(temp);
}*/

/*let sum = 0;

for (let i = 0; i < temperatures.length; i++) {
    sum = sum + temperatures[i];
    console.log(sum);
}

const average = sum/ temperatures.length;

console.log(average); //Keskmine näit
console.log(temperatures[temperatures.length -1]);*/  //Viimane element


// Kirjuta JavaScripti kood, mis loob massiivi, mis sisaldab 10 arvu
// kuva konsoolmassiivi iga element, üksteise järel.

//const numbers = [3, 2, 8, 4, 6, 9, 5, 1, 7, 10];

/*for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}*/

/*for (let i = numbers.length -1; i >= 0; i--) {
    console.log(i +1, numbers[i]);
}*/


//Väljasta kõik hinnad koos käibemaksuga

/*const prices = [3, 2, 8, 4, 6, 9, 5, 1, 7, 10];

/*for (let i = 0; i < prices.length; i++) {
    console.log(prices[i] * 1.24);
}*/

/*for (let i = 0; i < prices.length; i = i + 2) {
    console.log(prices[i] * 1.24);
}*/


/*let k = `kolmapaev`;

k = `kolmapäev`;

console.log(k);*/

/*const k = `kolmapäev`;
k = `neljapäev`;*/


/*const weekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", " reede", "laupäev", "pühapäev"];

weekdays[2] = `kolmapäev`;

console.log(weekdays);*/

/*const weekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", " reede", "laupäev", "pühapäev"];

weekdays =[] ; */

// -----
// --Math objekt--

//console.log(Math.PI);

/*const sales = [10, 5, 15, 20];

const randomNumber = Math.floor(Math.random()*4);*/

//console.log(sales[randomNumber]);


/*const sales = [10, 5, 15, 20];

const randomNumber = Math.ceil(Math.random() * 4)- 1;

console.log(sales[randomNumber]);*/



// Täring | Funktsioon, mis tagastab arvud vahemikus 1-6

/*function dice() {
    const randomNumber = Math.ceil(Math.random() * 6);
    return randomNumber
}*/

/*function dice(number) {
    const randomNumber = Math.ceil(Math.random() * number);
    return randomNumber
}


/*const maxNumber = Number(prompt(`Palun sisesta maksimaalne juhuarv`));

alert(dice(maxNumber));*/

/*const names = [`Jaan`, `Juta`, `Kalle`, `Malle`, `Juhan`, `Tiina`];

const randomNumber = dice(names.length);

console.log(names[randomNumber - 1]);*/


/*const names = [`Kati`, `Mati`, `Mari`, `Jüri`];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}*/


function logElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return array.length; 
}

const names = [`Kati`, `Mati`, `Mari`, `Jüri`];
const numbers = [1, 2, 6, 7, 5, 0];

logElements(names);
const result = logElements(numbers);
console.log(result);