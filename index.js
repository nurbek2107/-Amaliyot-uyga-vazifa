'use strict'

const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
}

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = prompt('Nechi baxo berasiz?')

  if (a != null && b != null && a != '' && b != '') {
    seriesDB.series[a] = b
    console.log('done')
  } else {
    console.log('error')
    i--
  }
}

if (seriesDB.count < 5) {
  console.log('Kam serial ko’ripsiz')
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log('Siz classik tamoshabin ekansiz')
} else if (seriesDB.count >= 10) {
  console.log('Siz serialchi zvezda ekansiz')
} else {
  console.log('Error')
}

console.log(seriesDB)

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
