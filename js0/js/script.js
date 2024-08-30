"use strict";

// let number = 5.6; // Data Type = Number

// console.log(-8 / 0); //Infinity
// console.log("Samar"*8);//NaN

// //String
// const clientName = "Samar";
// //Boolean
// constisMarried = true;

// //true = xa | to`gri 
// //false = yo`q | noto`g`ri

// const isMerried = false;
// const isCircleEarth = true;

// //null
// console.log(clientAge);

// //undefined
// let und;

// console.log(und)

// //Object

// const thief = {
//   //key value
//   age: 30, //number
//   jacket:"black", //string
//   isLong: false, //boolean
// };

// console.log(thief.jacket);

// //Array
// //                 0      1       2      3    4   5  
// const colors = ["red", "black", "green", 10, [], {}];
// console.log(colors[1]);

// alert("Hello JavaScript");

// const place = confirm(" Are you here?");
// console.log(place);

// const currentPLace = prompt("Where are you?", "Samara")
// console.log(typeof currentPLace);

// const age = prompt("How old are you?", "18");
// console.log(age + 10); //"18" + 10 =1810

// const age = +prompt("How old are you?", "18");
// console.log(age + 10); //"18" + 10 =

// const age = +prompt("How old are you?", "18");
// console.log(typeof age); 

// const favouriteColor = [];

// favouriteColor[0] = "Samar"
// console.log(favouriteColor);

//-----
// const favouriteColor = [];

// favouriteColor[0] = prompt("What`s your favourite color #1", "")
// favouriteColor[1] = prompt("What`s your favourite color #2", "")
// favouriteColor[2] = prompt("What`s your favourite color #3", "")

// console.log(favouriteColor);

//-----
// const favouriteColor = [];

// favouriteColor[0] = prompt("What`s your favourite color #1", "")
// favouriteColor[1] = prompt("What`s your favourite color #2", "")
// favouriteColor[2] = prompt("What`s your favourite color #3", "")

// console.log(typeof favouriteColor);

//------
// const channel = prompt("What`s your favourite youtuber");
// console.log(`https://youtube.com/${channel}`);

//------
// const user = "Samar";
// const job = "JavaScript developer";
// console.log(`User name is ${user}, he is ${job}`);

//----
// const client = prompt("Hello");
// console.log(client);

// console.log("Samar" + "Badriddinov");

// console.log(8 + +"12"); //=20
//---
//incr ++,  decr --

// let incr = 10;
// let decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

//----
// let incr = 10;
// let decr = 10;

// console.log(incr);
// console.log(decr);

//----
// let incr = 10;
// let decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

//------
// let incr = 10;
// let decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

//---------
// let incr = 10;
// let decr = 10;

// console.log(++incr);
// console.log(--decr);

//------
// console.log(10 % 3);

//-----true , false =qiymat bilan solishtiradi
// console.log(5 * 5 == 25);

//------string ,true , false =qiymat va malumot turi bilan solishtiradi
// console.log(5 * 5 === 25)

// && = va || = yoki
//----- true
// const isAge = true;
// const isClose = true;

// console.log(isAge && isClose);

//---- false
// const isAge = true;
// const isClose = false;

// console.log(isAge && isClose);

//----- 
// const isAge = true;
// const isClose = true;

// console.log(isAge || isClose);

//------ false 
// const isAge = false;
// const isClose = true;
// const isChecked = false;

// console.log(isAge && isClose && isChecked);


//------ true
// const isAge = false;
// const isClose = true;
// const isChecked = false;

// console.log(isAge && isClose && !isChecked

// console.log(2 + 2 * 2 ===8)

// console.log(2 + 2 * 2 !=8)

// console.log(2 + 2 * 2 !== "6") 

//--------const numberOfServer = +prompt("Nechta kitob o`qidingiz?", "");

// const  seriesDB = {
//   count: numberOfServer,
//   series: {},
//   actors: {},
//   gender: [],
//   private: false,
// };

// const a = prompt("Oxirgi o`qigan kitobingiz?"),
// b = prompt("Necha baxo berasiz?"),
// c = prompt("Oxirgi o`qigan kitobingiz?"),
// d = prompt("Necha baxo berasiz?");

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);

//--------

// const numberOfServer = +prompt("Nechta kitob o`qidingiz?", "");

// const  seriesDB = {
//   count: numberOfServer,
//   series: {},
//   actors: {},
//   gender: [],
//   private: false,
// };

// const a = prompt("Oxirgi o`qigan kitobingiz?"),
// b = prompt("Necha baxo berasiz?"),
// c = prompt("Oxirgi o`qigan kitobingiz?"),
// d = prompt("Necha baxo berasiz?");

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// const theif = {
//   jacket:"Black",
// };

// const property = "age",

//  value = 30;

// theif[property] = value;
// console.log(theif);

// console.log(seriesDB);

//-------------Shartli operatorlar

// const age =  +prompt("how old are you?")

// if (age > 18) {
//   console.log("Welcome");
// }else {
//   console.log("No entry");
// }

//----if - agarda, else - yokida
// const age =  +prompt("how old are you?")

// if (age > 25) {
//   console.log("Horror films");
// }else if(age >18 && age < 25) {
//   console.log("Boyevik films");
// }else {
//   console.log("Carton");
// }

//--------
// const age =  +prompt("how old are you?")

// // if (age > 25) {
// //   console.log("Horror films");
// // }else {
// //   console.log("Carton");
// // }

// age > 25 ? console.log("Horror films") : console.log("Carton");

//--------switch-=== shu rejimda ishlaydi
// const color = "red";

// switch(color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "green":
//     console.log("Goo");
//     break;
//   case "yellow":
//     console.log("Slowly");
//     break;
//   default:
//     console.log("Traffic jam");
//     break;
// }

// tsikl-------
//let startNum = 1;

//First
// while (startNum <= 20) {
//   console.log(startNum);
//   startNum++;
// }

//Second
// do {
//   console.log(startNum);
//   startNum++;
// }while(startNum <=10);

//Third
// for(let i=0; i <= 8; i++) {
//   console.log(num);
//   num++;
// }

//-------

// let num = 10;
// for(let i=0; i <= 8; i++) {
//   if(i ===8) {
//     //1break;
//     //2continue;
//   }
//   console.log(i);
// }

//--------
// const numberOfServer = +prompt("Nechta kitob o`qidingiz?", "");

// const  seriesDB = {
//   count: numberOfServer,
//   series: {},
//   actors: {},
//   gender: [],
//   private: false,
// };

// for(let i=0; i<2; i++){
//   const a = prompt("Oxirgi o`qigan kitobingiz?"),
// b = prompt("Necha baxo berasiz?");

// if(a != null && b  != null && a != "" && b != ""){
//  seriesDB.series[a] = b; 
//  console.log("done");
// } else {
//   console.log("error");
//   i--;
// }
// }
// if(seriesDB.count < 5) {
//   console.log("Kam kitob o`qibsiz");
// }else if(seriesDB.count >= 5 && seriesDB.count < 10) {
//   console.log("Sizga kitob o`qish yoqar ekan");
// }else if(seriesDB.count >= 10){
//   console.log("Siz kitob sevar ekansiz");
// }else{
//   console.log("Error")
// }

// console.log(seriesDB);

//-------Funksiya, ES6  , ()-funksiyani chaqiradi

// console.log("Open modal")

// function sayHelloWorld(text) {
//  console.log("Helo world");
// }

// sayHelloWorld("Helo world");
// sayHelloWorld("Helo JavaScript");

//------

// console.log("Open modal")

// function calc(a, b) {
//  console.log("a + b");
// }

// calc(10, 5);
// calc(9, 10);

// -------
// console.log("Open modal")

// let age = 27;

// function sayMyName(name, surname) {
//   let age = 20;
//  console.log(`My name is ${name} ${surname}`);
//  console.log(age);
// }

// sayMyName("Nizomiddin", "Zaripov");
// console.log(age);

//-------return- qaytarish berish. , return dan keyin shartlar , o`zgaruvchilar berib bo`lmaydi.
// console.log("Open modal")

// function calc(a, b){
//   return a + b;
// }

// const sumOfAandB = calc(10,  5);

// console.log(sumOfAandB);

//---------console.log("Open modal")

// const sumOfAandB = calc(10,  5);

// console.log(sumOfAandB);

// function calc(a, b){
//   return a + b;
// }

// const logger = function() {
//   console.log("Hello world");
// }

// logger();

//-------
// const calc = (a, b) => a + b;
// console.log(calc(10, 5))

//--------Function daclaration

// function calc(a, b){
//   return a + b;
// }

// const sumOfAandB = calc(10,  5);

// console.log(sumOfAandB);

//function expression
// const logger = function() {
//   console.log("Hello world");
// }

// logger();

//Array function
// const calc = (a) => {
//   console.log("!");
//   return a;
// };

// //-------
// const user = "Ali"
// console.log(user.length);
// const arr = [1, 2, 3, 4];
// console.log(arr.length)

//--------

// const user = "Ali"

// const arr = [1, 2, 3, 4];

// console.log((user[2] = "r"));
// console.log(user)

//--------

// const user = "Ali"

// const arr = [1, 2, 3, 4];

// console.log(user.toUpperCase());

// console.log(user)

//--------

// const user = "Ali"

// const arr = [1, 2, 3, 4];

// //console.log(user.toUpperCase());
// console.log(user.toLowerCase());


// console.log(user) 

// const greating = "Hello world";

// //console.log(greating.indexOf("w"));

// //console.log(greating.slice(1, 5));

// //console.log(greating.slice(5));

// //console.log(greating.slice(-6, -1));

// //console.log(greating.substring(6, 11));

// // console.log(greating.substr(6, 3));

//------Number

// const num = 8.8;

// console.log(Math.round(num));

// const borderWidth = "13.8px";
// //console.log(parseInt(borderWidth));
// // console.log(parseFloat(borderWidth));


//Praktika

// let numberOfSeries;

// function startApp() {
//   numberOfSeries = +prompt("Nechta kitob o`qidingiz?", "");
//  while(numberOfSeries == "" || numberOfSeries == null ||nisNaN(numberOfSeries)){
//   numberOfSeries = +prompt("Nechta kitob o`qidingiz?", "");
//  }
// } 

// startApp();

// const  seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   gender: [],
//   private: false,
// };

// function rememberMyseries() {
//   for(let i=0; i<2; i++){
//       const a = prompt("Oxirgi o`qigan kitobingiz?"),
//       b = prompt("Necha baxo berasiz?");

//     if(a != null && b  != null && a != "" && b != ""){
//       seriesDB.series[a] = b; 
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }

// // rememberMySeries();

// function deteectLevelSeries {
//   if(seriesDB.count < 5) {
//     console.log("Kam kitob o`qibsiz");
//   }else if(seriesDB.count >= 5 && bookDB.count < 10) {
//     console.log("Sizga kitob o`qish yoqar ekan");
//   }else if(seriesDB.count >= 10){
//     console.log("Siz kitob sevar ekansiz");
//   }else{
//     console.log("Error")
//   } 
// }

// deteectLevelSeries();

// function showDB() {
//   if (!seriesDB.private) {
//     console.log(seriesDB);
//   }
// }

// showDB()

// function writeGenres() {
//   for (let i=0; i<=2; i++){
//     const genre = prompt(`Yaxshi ko'rgan ganiringiz ${i+1}`);
//     seriesDB.genres[i-1] = genre;
//   }
// }

// writeGenres()

//----------Callback

// function first() {
//   //code
//   setTimeout(() => {
//    console.log(1);
//   }, 1000);
// }

// function second() {
//   //code
//   console.log(2);
// }

// first();
// second();

//---------
// function edu(subject, callback) {
//   console.log(`I wanna teach ${subject}`);
//   callback();
// }

// edu("JavaScript", function () {
//   console.log("That's great");
// });

//----------Callback

// function first(cb) {
//   //code
//   setTimeout(() => {
//    console.log(1);
//    cd();
//   }, 1000);
// }

// function second() {
//   //code
//   console.log(2);
// }

// first(second);

// //-------
// function edu(subject, callback) {
//   console.log(`I wanna teach ${subject}`);
//   callback();
// }

// function done() {
//   console.log("That's great");
// }

// edu("JavaScript", done);

//Object. Destruptizatsiya

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair:"gray",
//     style: "curley",
//   },
// };

// console.log(theif.height);

// delete theif.jacket;

// console.log(theif);

// //----------

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair:"gray",
//     style: "curley",
//   },
// };

// console.log(Object.keys(theif).length);

// for (let key in theif) {
//   console.log(`Property ${key} has value ${theif[key]}`)
// }

//---------

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair:"gray",
//     style: "curley",
//   },
// };

// console.log(Object.keys(theif).length);

// for (let key in theif) {
//   if(typeof theif[key] === "object"){
//     for(let i in theif[key]){
//       console.log(`Property ${key} has value ${typeof theif[key] [i]}`)
//     }
//   } else {
//   console.log(`Property ${key} has value ${typeof theif[key]}`)
//   } 
// }

//---------for of siklar bilan ishlaydi

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair:"gray",
//     style: "curley",
//   },
// };

// let count = 0;

// for (let key in theif) {
//   // if(typeof theif[key] === "object"){
//   //   for(let i in theif[key]){
//   //     console.log(`Property ${key} has value ${typeof theif[key] [i]}`)
//   //   }
//   // } else {
//   // console.log(`Property ${key} has value ${typeof theif[key]}`)
//   // } 
// }

// console.log(count);

//---------mening birinchi metodim

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair:"gray",
//     style: "curley",
//   },
//   howOut: function () {
//     console.log("Fast with help doors");
//   },
// };

// theif.howOut();

// const { hair, style } = theif.colors; //distrubtithatsiya

// console.log(hair);
// console.log(style);

//----------Massivlar
// const arr = [2, 3, 4, 5, 6];
// arr.sort(compareFn);
// console.log(arr);

// function compareFn(a, b) {
//   return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);

// arr.forEach(function(item, index, arr){
//   console.log(`${index}; 4{item} into arr ${arr}`);
// });

//arr.pop();
//arrpush(7);

//arr.shift();
// arr.unshift(0);

// console.log(arr.length);

// for(let i = 0; i < arr.length){
//   console.log(arr[i]);
// }

// for(let value of arr) {
//   console.log(value);
// }

//------
// const movies = prompt("What`s your favourite movies", "");
// const userMovies = movies.split(", ")
// userMovies.sort();//sort()-alfavit bo`yicha sarirovka kilib beradi
// console.log(userMovies.join('- '));

//-------Clonlash,ES6

// let x = 5
// let y = x

// y = y + 5
 
// console.log(x)
// console.log(y)

// let isMerried = false
// let isArray = isMerried
// isArray =true

// console.log(isMerried);
// console.log(isArray);

// const number = {
//   x: 10,
//   y: 5,
// }

// const newNumber = number // havola  

// newNumber.x = 15;
// // console.log(number)
// // console.log(newNumber)

//-----------

// function nusxaObj(obj) {
//   let objNusxa = {}
//   for(let key in obj){
//     objNusxa[key] = obj[key]
//   }
//   return objNusxa
// }

// const number = {
//   x: 10,
//   y: 5,
//   z:{
//     a: 1,
//     b: 2,
//   },
// }

// const newNambers = nusxaObj(numbers)  

// newNumbers.x = 15
// newNumbers.z.a = 10


// console.log(newNambers)
// console.log(numbers)

//--------

// const number = {
//   x: 10,
//   y: 5,
// }

// const addNamber = {
//   z: 15,
// }

// const newNambers = Object.assign(numbers, addNumber)

// console.log(newNambers)
// console.log(numbers)

//------

// const number = {
//   x: 10,
//   y: 5,
// }

// const addNamber = {
//   z: 15,
// }

// const allNambers = Object.assign(numbers, addNumber)

// console.log(allNambers)

//-------

// const arr = [1, 2, 3]
// const numbers = arr.slice()

// numbers[1] = 'samar'

// console.log(arr)
// console.log(numbers)

// // SPREAD

// const leverpool = ['Salah', 'Mane']
// const manCity =['Mahrez']

// const mixPlayer = [... liverpool, ...manCity]

// console.log(mixPlayer)

//-------

// const calc = [1, 2, 3]

// function logger(x, y, z){
//    console.log(x + y + z)
// }

// logger(...calc)

// const arr = ['x', 'y']
// const newArr =[ ...arr]

//-------

// const numbers = {
//   x: 10,
//   y: 5,
// }

// const newNambers = { ...numbers }

// console.log(numbers)
// console.log(newNambers)

// OOP asoslari

// const firstName = "Bobur"
// const str = new String(firstName)

// console.log(typeof firstName);
// console.log(typeof str);


//-----
// const car = {
//   motor: 'X',
//   color: 'red',
//   isAirbag: true,
//   isSpead: function() {
//     console.log(320)
//   }
// }

// const gm = {
//   isAirbag: false,
// }
// //1
// // Object.setPrototypeOf(gm, car)
// //2
// // const bmw = Object.create(car)

// console.log(bmw);


//Praktika

// let numberOfSeries;



// startApp();

// const  seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   gender: [],
//   private: false,
//   // start:function() {//1.

//   // }
//   start: () => { //2
//     function startApp() {
//       seriesDB.count = +prompt("Nechta kitob o`qidingiz?", "");

//       while(seriesDB.count == ''
//         || seriesDB.count == null 
//         ||nisNaN(seriesDB.count)){
//           seriesDB.count = +prompt("Nechta kitob o`qidingiz?", "");
//       }
//     } 
//   }
// };

// function rememberMyseries() {
//   for(let i=0; i<2; i++){
//       const a = prompt("Oxirgi o`qigan kitobingiz?"),
//       b = prompt("Necha baxo berasiz?");

//     if(a != null && b  != null && a != "" && b != ""){
//       seriesDB.series[a] = b; 
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
//  detectLevelSeries: function() {
//   if(seriesDB.count < 5) {
//     console.log("Kam kitob o`qibsiz");
//   }else if(seriesDB.count >= 5 && bookDB.count < 10) {
//     console.log("Sizga kitob o`qish yoqar ekan");
//   }else if(seriesDB.count >= 10){
//     console.log("Siz kitob sevar ekansiz");
//   }else{
//     console.log("Error")
//   } 
// }

// }


// deteectLevelSeries();

// function showDB(hidden) {
//   if (!hidden) {
//     console.log(seriesDB);
//   }
// }

// showDB()

// function writeGenres() {
//   for (let i=0; i<=2; i++){
//     const genre = prompt(`Yaxshi ko'rgan ganiringiz ${i+1}`);
//     seriesDB.genres[i-1] = genre;
//   }
// }

// writeGenres()//// tugallanmagan



//Dynamic typing;

//to string

// //1-)
// console.log(typeof String(4))

// //2-)
// console.log(typeof ('Lola' +21))
// const youtubeChannel = 10 
// console.log('youtube.com/channel/'+ youtubeChannel)

// // to number
// //1-)
// console.log(typeof Namber('4'))

// //2-)
// console.log(typeof +'5');

// //3-)
// console.log(typeof parseInt('15'))

// const name = parseInt(prompt('age'))


//---boolean

// 0, "", null, undefined, NaN = xar doim false 
// let age = 0 

// if (age) {
//   console.log('g')
// }

// age = 18 

// if (age) {
//   console.log('g')
// }

// console.log(typeof Boolean('4'))

// console.log(typeof !!'4')

//-----DOM blan ishlash 

// const box = document.getElementById('box')
// // console.log(box)

// const button = document.getElementsByTagName('buttton')
// // console.log(buttton)

// const circles = document.getElementsByClassName('circle')
// // console.log(circles)

// //New way
// const heart = document.querySelector('.heart')
// // console.log(hearts)

// const hearts = document.querySelectorAll('.heart')
// // console.log(heart)

// const wrapper = document.querySelector('.heart')
// // console.log(wrapper)

// hearts.forEach((item) =>{
//   console.log(item)
// })

//--------
const box = document.querySelector('#box')
const buttons = document.querySelectorAll('button')
const circles = document.querySelectorAll('.circle')
const circle = document.querySelector('.circle')
const hearts = document.querySelectorAll('.heart')
const circleWrapper = document.querySelector('.circle__wrapper')

// box.style.bagkrountColor = 'red'//1
// box.style.height = '100px'
// box.style.width = '100px'
box.style.cssText = 'backrount-color: red; width: 100px; height: 100px'//2

buttons[0].style.width = '100px'
circles[1].style.backgroundColor = 'yellow'
circle.style.backgroundColor = 'yellow'

// for(let i=0; i<hearts.length; i++){    //1
//   hearts[i].style.backgroundColor = "green"
// }

// hearts.forEach((item) => {   //2
//   item.style.backgroundColor = 'gray'
// })

///---
const btn = document.createElement('button')
// const text = document.createTextNode("I am text")

document.body.append(btn)  //= appendChild

const myCircle = document.createElement('div')

myCircle.classList.add('circle')
// circleWrapper.append(myCircle) // oxirida

// circleWrapper.before(myCircle) //boshidan tepaga//= insertBeform

// circleWrapper.after(myCircle) // boshidan pastga 

// circles[0].after(myCircle) // boshidan ikkimchi

// circles[1].remove()//o`chirish// = cercle.removeChaild 
// circles[1].replaceWith(myCircle)//almashtirib qo`yish //= circleWrapper.replaceChaild(circles[1].hearts[1])

// circleWrapper.append(myCircle)
// myCircle.innerHTML = 'E'
// myCircle.innerHTML = '<b>E</b>'
// myCircle.innerHTML = '<pro>E</pro>'
// myCircle.textContent = 'E'

// circleWrapper.insertAdjacentHTML("afterbegin", "<pro>E</pro>")
// circleWrapper.insertAdjacentHTML("beforebegin", "<pro>E</pro>")
// circleWrapper.insertAdjacentHTML("afterend", "<pro>E</pro>")
// circleWrapper.insertAdjacentHTML("beforeend", "<pro>E</pro>")

// Praktika


