"use strict";

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// }

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Oxirgi ko'rgan serialingiz?"),
//     b = prompt('Nechi baxo berasiz?')

//   if (a != null && b != null && a != '' && b != '') {
//     seriesDB.series[a] = b
//     console.log('done')
//   } else {
//     console.log('error')
//     i--
//   }
// }

// if (seriesDB.count < 5) {
//   console.log('Kam serial ko’ripsiz')
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//   console.log('Siz classik tamoshabin ekansiz')
// } else if (seriesDB.count >= 10) {
//   console.log('Siz serialchi zvezda ekansiz')
// } else {
//   console.log('Error')
// }

// console.log(seriesDB)

// let a = 10
// let i = 1
// let sum = 0
// while (i<=a){
//   if(i%2==0){
//     sum += i
//   }
//   i += 1

// }
// console.log(sum);

// let a = 10
// let i = 1
// let sum = 0
// do {
//     if(i%2==0){
//     sum += i
//   }
//   i += 1

// } while (i<=a);
// console.log(sum);

// const a = prompt('1dan 7gacha son kiriting: ')
// switch(a){
//   case '1':
//     alert("dushanba");
//     break;
//   case '2':
//     alert("seshanba");
//     break;
//   case '3':
//     alert("chorshba");
//     break;
//   case '4':
//     alert("payshanba");
//     break;
//   case '5':
//     alert("juma");
//     break;
//   case '6':
//     alert("shanba");
//     break;
//   case '7':
//     alert("yakshanba");
//     break;
//     default:
//       alert('hato')
// }

// let a = +prompt("")
// let c = prompt("amal kiriting")
// let b = +prompt("")

// function func(num ,num1 ,c){
//   switch (c){
//     case "+":
//       alert(num+num1)
//       break;
//       case "-":
//       alert(num-num1)
//       break;
//       case "*":
//       alert(num*num1)
//       break;
//       case "/":
//       alert(num/num1)
//       break;
//   }
// }
// func(a ,b ,c )

// let c = eval(prompt("amal kiriting"))
// alert(c)

// function yigindi(num ,num1){
//   let sum = 0

//   for (num;num<=num1;num++){
//     sum += num
//   }

//   return sum;
// }
// yigindi(1,10)

// const plase = confirm("gkjnfkjnbfkjg6")
// console.log(plase )

// let obj = {
//     name : "Nurbek",
//     lastname : "Abduaxatov",
//     age : 17,
//     gmail : "abduaxatov007@gmail.com",
//     adress : {
//         city : "andijan",
//         street : "home streat" ,
//         nomer : "1"
//     },
//     hobby : ["reading","geming","sport"],
//     func : function(){},
// }
// for (let key in obj.adress){
//     console.log(obj.adress[key]);
// }

// let obj ={
//     func : function(){
//         console.log("hello");
//     },
// }
// obj.func()

// const user = {
//         name : 'nurbek',
//         age : 17,
//         loatsion : "Andijon" ,
//         school : "Najot talim" ,
// }
// for(let keys in user){
//         console.log(user[keys])
// }

// let arr = ["Nurbek","Davron","Rustam","Laziz","Bobur",]
// for(let keys of arr){
//         console.log(keys)
// }

// array for sikl
// function toqSonlar(arr) {
//     return arr.filter(num => num % 2 == 0);
// }

// // Test qilish
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(toqSonlar(array));

// function son(a) {
//   const ab = [];
//   for (let i = 1; i <= a; i++) {
//     if (i % 2 == 0) {
//       ab.push(i);
//     }
//   }
//   return ab;
// }

// // 1-misol
// let arr = 4;
// const result = son(arr);
// console.log(result);

// function son(a,b){
//     return a + b;
// }
// console.log(son(5 ,6))

////2-misol
// let a = 1700
// function solution(year) {
//     let asr = year / 100;
//     return asr;
// }
// console.log(solution(a)+'-asr');

////3-misol
// const inputArray = [3, 6, -2, -5, 7, 3];
// function findMaxProduct(arr) {
//   let maxProduct = arr[0] * arr[1]; /

//   for (let i = 1; i < arr.length - 1; i++) {
//     const product = arr[i] * arr[i + 1];
//     if (product > maxProduct) {
//       maxProduct = product;
//     }
//   }

//   return maxProduct;
// }
// console.log(findMaxProduct(inputArray));

////5-misol
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
////6-masala
// for (let i=1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// //7-masala
// const arr = [1, 7, 4, 2, 8]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
//   console.log(sum);

// //8-masala
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.reverse());

////9-misol
// const arr = [2, 1, 4, 3]
// console.log(arr.sort())

////10-misol
// const arr = [1, -1, -2, -3, 4];
// console.log(arr.filter(num => num > 0));
////11-misol

// let a = "hello world";
// console.log(a.split(" ").join(""));

////12-misol

// let a = 20
// if (a > 10) {
//     console.log(true)
// }
// else {
//   console.log(false);
// }

////13-misol

// let unlixarflar = "aeiou"
// function unliSoniniQaytar(text) {
//   let count = 0;
//   for(let i = 0; i < text.length; i++){
//     if(unlixarflar.includes(text[i])){
//       count++;
//     }
//   }
//   return count;
// }

// let text = "hello";
// console.log(unliSoniniQaytar(text));

// text = "assalomu alaykum";
// console.log(unliSoniniQaytar(text));

////14-misol
// const arr = ['a', 1, 3, 4, true]
// console.log(arr[0])

////15-misol
// function func(a) {
//     return a.like - a.dislike;
// }
// console.log(func({ like: 13, dislike: 0 }));

////16-misol
// function incrementArray(arr) {
//   return arr.map((element) => element + 1);
// }

// console.log(incrementArray([0, 1, 2, 3]));

// const movies = [
//   { name: "Avatar 3D", year: 2008,  rating: 9 },
//   { name: "Titanik 4D", year: 1997,  rating: 7 },
//   { name: "Forsaj 9 3D", year: 2020, rating: 4 },
//   { name: "Avengers", year: 2012,    rating: 6 },
// ];
// const mapnumber = movies.map((movies) => {
//   return { name: movies.name, year: movies.year, rating: movies.rating + 1 };
// });
// console.log(mapnumber);



