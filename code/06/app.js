// Massiiv mingi objekti kirjeldamiseks
/*const tvs = [
    [86, `Android`, 100, 40],
    [52, `Apple`, 89, 30],
    [62, `Samsung`, 120, 35]
];

for(let i = 0; i < tvs.length; i++) {
    console.log(tvs[i]); //[86, `Android`, 100, 40]
} 

//console.log(tvs[0][3]);*/

/*const tv = {
    diagonal: 86,
    opSystem: `Android`,
    powerConsumption: 100,
    weight: 40,
};

const user = {
    email: `kerstijoarand@gmail.com`,
    firstName: `Kersti`,
    lastName: `Joarand`,
    yearOfBirth: 1984,
};

console.log(tv.diagonal);*/
  

/*for(let i = 0; i < tvs.length; i++) {
    console.log(tvs[i]); //[86, `Android`, 100, 40]
} */

/*const tvs = [
     {
        id: 1,
        diagonal: 86,
        opSystem: `Android`,
        powerConsumption:100,
        weight: 40,
    },
    {
        id: 2,
        diagonal: 52,
        opSystem: `Apple`,
        powerConsumption:89,
        weight: 30,
    },
    {
        id: 3,
        diagonal: 62,
        opSystem: `Samsung`,
        powerConsumption:120,
        weight: 35,
    }
    {
        id: 4,
        diagonal: 86,
        opSystem: `Android`,
        powerConsumption:100,
        weight: 40,
    }
];
/*
for(let i = 0; i < tvs.length; i++) {
    console.log(tvs[i].weight); 
} */

//console.log(tvs[0].weight);

/*for(let i = 0; i < tvs.length; i++) {
    if (tvs[i].opSystem === `Android`) {
        console.log(tvs[i]);

    }
}*/

/*const tvs = [
  { id: 1, diagonal: 86, opSystem: 'Android', powerConsumption: 100, weight: 40 },
  { id: 2, diagonal: 55, opSystem: 'Tizen', powerConsumption: 75, weight: 18 },
  { id: 3, diagonal: 65, opSystem: 'WebOS', powerConsumption: 90, weight: 22 },
  { id: 4, diagonal: 75, opSystem: 'Android', powerConsumption: 120, weight: 32 },
  { id: 5, diagonal: 43, opSystem: 'Roku', powerConsumption: 60, weight: 12 },
  { id: 6, diagonal: 50, opSystem: 'FireOS', powerConsumption: 70, weight: 14 },
  { id: 7, diagonal: 98, opSystem: 'Android', powerConsumption: 150, weight: 50 },
  { id: 8, diagonal: 32, opSystem: 'Tizen', powerConsumption: 45, weight: 7 },
  { id: 9, diagonal: 85, opSystem: 'WebOS', powerConsumption: 130, weight: 38 },
  { id: 10, diagonal: 40, opSystem: 'Roku', powerConsumption: 55, weight: 10 },
  { id: 11, diagonal: 70, opSystem: 'Tizen', powerConsumption: 110, weight: 30 },
  { id: 12, diagonal: 58, opSystem: 'Android', powerConsumption: 80, weight: 20 },
  { id: 13, diagonal: 65, opSystem: 'Roku', powerConsumption: 95, weight: 23 },
  { id: 14, diagonal: 77, opSystem: 'WebOS', powerConsumption: 125, weight: 35 },
  { id: 15, diagonal: 42, opSystem: 'FireOS', powerConsumption: 50, weight: 11 },
  { id: 16, diagonal: 60, opSystem: 'Android', powerConsumption: 85, weight: 19 },
  { id: 17, diagonal: 48, opSystem: 'Tizen', powerConsumption: 65, weight: 13 },
  { id: 18, diagonal: 55, opSystem: 'WebOS', powerConsumption: 78, weight: 17 },
  { id: 19, diagonal: 90, opSystem: 'Android', powerConsumption: 140, weight: 45 },
  { id: 20, diagonal: 39, opSystem: 'Roku', powerConsumption: 48, weight: 9 },
  { id: 21, diagonal: 50, opSystem: 'Tizen', powerConsumption: 69, weight: 16 },
  { id: 22, diagonal: 65, opSystem: 'FireOS', powerConsumption: 92, weight: 21 },
  { id: 23, diagonal: 75, opSystem: 'WebOS', powerConsumption: 118, weight: 33 },
  { id: 24, diagonal: 82, opSystem: 'Android', powerConsumption: 135, weight: 41 },
  { id: 25, diagonal: 55, opSystem: 'Roku', powerConsumption: 72, weight: 15 },
  { id: 26, diagonal: 43, opSystem: 'WebOS', powerConsumption: 58, weight: 11 },
  { id: 27, diagonal: 70, opSystem: 'FireOS', powerConsumption: 105, weight: 28 },
  { id: 28, diagonal: 78, opSystem: 'Tizen', powerConsumption: 128, weight: 36 },
  { id: 29, diagonal: 85, opSystem: 'Android', powerConsumption: 145, weight: 48 },
  { id: 30, diagonal: 32, opSystem: 'WebOS', powerConsumption: 42, weight: 6 }
];

const opSystem = prompt `Millise operatsioonisüsteemiga telekaid soovid näha`;
for(let i = 0; i < tvs.length; i++) {
    if (tvs[i].opSystem.toLowerCase() === opSystem.toLowerCase()) {
        console.log(tvs[i]);
    }
}*/

//Loo raamatu objekt omadustega: pealkiri(string), autor(string), lehekülgede arv-number, loetud-tõeväärtus(true/false)

/*const book ={
    id: 1,
    title: `JS Learning`,
    author: `Kersti Joarand`,
    pages: 45,
    isRead: true
};*/

const books = [
    {id: 1, title: `Learning 1`, author: `Kersti Joarand`, pages: 45,isRead: true,},
    {id: 2, title: `Learning 2`, author: `Kersti Joarand`, pages: 1,isRead: false,},
    {id: 3, title: `Learning 3`, author: `Kersti Joarand`, pages: 22,isRead: true,},
    {id: 4, title: `Learning 4`, author: `Kersti Joarand`, pages: 6,isRead: false,},
    {id: 5, title: `Learning 5`, author: `Kersti Joarand`, pages: 10,isRead: false,}
];

//Raamatute arv

/*console.log(books.length);

for(let i = 0; i < books.length; i++); {
console.log(books[i].title); // Pealkirjade kuvamine
}

let sum = 0; 
for (let i = 0; i < books.length; i++) {
    sum = sum + books[i].pages;
}

console.log(`Keskmine lehekülgede arv:`, sum / books.length);


// Kuva kõik loetud raamatute pealkirjad

for (let i = 0; i < books.length; i++) {
    if (books[i].isRead) 
        console.log(books[i].title);
    //books[i].isRead ? console.log(books[i].title):``;
}*/


// Kuva loetud raamatute lehekülgede arv kokku

let sumRead = 0;

for (let i = 0; i < books.length; i++){
    if (books[i].isRead) {
    sumRead = sumRead + books[i].pages;
}
}

console.log(`Loetud raamatute lehekülgede arv:`, sumRead)






