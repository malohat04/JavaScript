//const n = +prompt("n sonini kiriting");  //3
//const k = +prompt("k sonini kiriting"); //4
// DOM =

// if (n > 9 && n < 99) {
//   const secondNumber = n % 10; //9

//   const firstNumber = (n - secondNumber) / 10; //91 - 1 = 90 / 10 =  9

//   console.log(firstNumber + secondNumber);
// } else  {
//   alert("Kiritilgan som 2 xonali emas!")
// }

// Shart operatori
// if ( n - 100 > 10 ) {
//   const lastNumber = n % 10; //9
//   const middleNumber = ((n - lastNumber) / 10) % 10 //999 - 9 = 99
//   //  round , ceil , floor
//   const firstNumber = Math.floor( n / 100)

//   console.log(firstNumber + lastNumber + middleNumber);
// }

//for (let index = 0; index > n; index++) {
// console.log(k)
//}

//----------------------------------------------------------

//1.-----
//let k = +prompt ('k sonini kirting=');
//let n = +prompt ('n sonini kirting=');

//for (let i=0; i<n; i++) {
//  console.log(k)
//}

//2.-----
//let a = +prompt('a sonini kiriting=');
//let b = +prompt('b sonini kiriting=');
//let c = 0;

//for(let i = a; i<=b; i++){
//  console.log(i);
//}

//console.log("sonlar:" , c, " ta ");

//3.-----
//let a = +prompt('a sonini kiriting=');
//let b = +prompt('b sonini kiriting=');
//let c = 0;

//for(let i = a; i<=b; i++){
//  console.log(i);
//  c++;
//}

//console.log("sonlar:" , c-2, " ta ");

// 4.-----
// let candyPrice = +prompt("konfet narxi=");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}kg konfet = ${i * candyPrice}UZS`);
// }

//5.------
//let candyPrice= +prompt('konfet narxi=');
//for(let i=1; i<=10; i++){
//  console.log('${i/10}kg konfet = ${i/10*candyPrice}soms')
//}
//???????

//6.------
//let candyPrice= +prompt('konfet narxi=');
//for(let i=12; i<=20; i++){
//  console.log('${i/10}kg konfet = ${i/10*candyPrice}soms')
//}
//???????

//7.------
//let a = +prompt('a sonini kiriting=');
//let b = +prompt('b sonini kiriting=');
//let sum = 0;
//for(let i=a; i<=b; i++){
//  sum += i;
//}
//console.log('a va b b gacha bo`lganbutun sonlar yig`indisi: ', sum);

//8.------
//let a = +prompt('a sonini kiriting=');
//let b = +prompt('b sonini kiriting=');
//let k = 1;
//for(let i=a; i<=b; i++){
//  k *= i;
//}
//console.log('a va b b gacha bo`lgan butun sonlar ko`paytmasi: ', k);

//9.------
//let a = +prompt('a sonini kiriting=');
//let b = +prompt('b sonini kiriting=');
//let k = 0;
//for(let i=a; i<=b; i++){
//  k += i*i;
//}
//console.log('a va b b gacha bo`lgan butun sonlar kvadratining yig`indisi: ', k);

//10.------
//S=1+1/2+1/3+ . . . + 1/NaN.toExponential
//let n= +prompt('n sonini kiriting=');
//let s = 0;
//for(let i=1; i<=n; i++){
//  s +=1/i;
//}
//console.log('yig`indi: ', s);

//11.------
//let n= +prompt('n sonini kiriting=');
//let s = 0;
//for(let i=n; i<=n * 2; i++){
//  s += i * i;
//}
//console.log('a va b b gacha bo`lgan butun sonlar kvadratining yig`indisi: ', s);

//12.------
//let n= +prompt('n sonini kiriting=');
//let s = 1;
//for(let i=1.1; i<=n; i+=0.1){
//  s *= i;
//}
//console.log('ko`paytma: ', s);

//13.------
//let n = +prompt('n sonini kiriting=');
//let s = 0;
//for (let i=1; i<=n; i++) {
//  let cnt = 1 + + (i/10). toFixed(1)
//  s += + (Math.pow(-1, i+1)*cnt).toFixed(1)
//}

//console.log(+s.toFixed(1));

//14.------
//let n = +prompt('n sonini kiriting=')
//let s = 0;
//for (let i=1; i<=n; i++) {
//  let cnt = 2*i
//  s += cnt - 1
//}
//console.log('n bo`lgan butun son kvadrati : ', s );

//15.------
//let n = parseInt(+prompt('n sonini kiriting='));
//let a = parseFloat(+prompt("a sonini kiriting"))
//let s=1;
//for (let i=1; i<=n; i++) {
// s*=a
//}
//console.log(`${a} ning ${n} chi darajasi = `, s );

//17.------
//let n = parseInt(+prompt('n sonini kiriting='));
//let a = parseFloat(+prompt("a sonini kiriting"))
//let s=0;
//for (let i=0; i<=n; i++) {
//  s += + Math.pow(a, i)
//}
//console.log('a sonining n ta darajalar yig`indisi', s);

//18.------
//let n = parseInt(+prompt('n sonini kiriting='));
//let a = parseFloat(+prompt("a sonini kiriting"))
//let s=0;
//for (let i=0; i<=n; i++) {
//  let cnt = Math.pow(-1, i). toFixed(1)
//  s += +(Math.pow(a, i)*cnt). toFixed(1)
//}
//console.log('a sonining n ta darajalar yig`indisi', +s.toFixed(1));

//19.------
//let n = parseInt(+prompt('n sonini kiriting='));
//let s = 1;
//for (let i=1; i<=n; i++) {
//  s *= i;
//}
//console.log('n gacha bo`lgan sonlar ko`paytmasi', s);
//???????????????

//20.------
//let n = parseInt(+prompt('n sonini kiriting=')); //3
//let s = 1;
//let calculatedFacs = 0;
//for (let i=1; i<=n; i++) {
//  s *=i; // 6
//  calculatedFacs += s // 1 + 2 + 6
//}
//console.log('n gacha bo`lgan sonlar ko`paytmasi', calculatedFacs);

//21.------
//let n = parseInt(+prompt('n sonini kiriting='));
//let s = 0;
//let calculatedFacs = 0;
//for (let i=0; i<=n; i++) {
//  s *=i;
//  calculatedFacs +=(1/s )
//}
//console.log('n', calculatedFacs);

//22.------
//let n = parseInt(+prompt('n sonini kiriting='));
//let x = parseFloat(+prompt('x sonini kiriting='));
//let s = 1;
//let calculatedFacs = 0;
//for (let i=0; i<=n; i++) {
//  if(i != 0) {
//    s *= i;
//  }
//  console.log(s);
//  let cnt = Math.pow(x, i)/s
//  calculatedFacs += cnt
//}
//console.log('n va x', calculatedFacs);

//23.------
//let n = parseInt(+prompt('n sonini kiriting='));
//let x = parseFloat(+prompt('x sonini kiriting='));
//let s = 1;
//let calculatedFacs = 0;
//for (let i=0; i<=n; i++) {
//  if(i != 0) {
//    s *= 2*i+1;
//  }
//  console.log(s);
//  let cnt = Math.pow(x, 2*i+1)/s
//  calculatedFacs += cnt
//}
//console.log('n va x', calculatedFacs);

//24.------
//let n = parseInt(+prompt('n sonini kiriting='));
//let x = parseFloat(+prompt('x sonini kiriting='));
//let s = 1;
//let calculatedFacs = 0;
//for (let i=0; i<=n; i++) {
//  if(i != 0) {
//    s *= 2*i;
//  }
//  console.log(s);
//  let cnt = Math.pow(x, 2*i)/s
//  calculatedFacs += +(Math.pow(-1, i) *cnt)
//}
//console.log('n va x', calculatedFacs);

//Array

//let arr = [];
//const n = prompt("n = ");

//for (let index = 0; index < n; index++) {
//  arr.push(Math.pow(2, index));
//}

//console.log(arr)

//1.-----
//let arr = [];
//const n = prompt("n = ");

// Massivni kiritish
//for (let i = 0; i < n; i++) {
//  arr[i] = +prompt(`massivning ${i}-elementi=`)
//}
//console.log("array = ",arr)

// console.log(arr[arr.length-1]) // Masivni ohirgi elementi

//let num = 0

//for (let j = 0; j < arr.length-1; j++) {
//  if (arr[arr.length - 1] < arr[j]) {
//    num = arr[j]
//    break;
//  }
//}

//console.log(num);

//2.-----
//let arr = [];
//const n = prompt("n = "); //3

// Massivni kiritish
//for (let i = 0; i < n; i++) { //0
//  arr[i] = +prompt(`massivning ${i}-elementi=`) // aa[0]=12; arr[1]=10 arr[2]=20 ; [12, 10, 20]
//}
//console.log("array = ",arr)

// console.log(arr[arr.length-1]) // Masivni ohirgi elementi

//let s = 0
//const k = +prompt("k = "); //3
//const l = +prompt("l = "); //3

//for (let j = k; j <= l; j++) {
//  s += +j
//}/

//console.log(s);

//3.-----
// let arr = [];
// const n = prompt("n = ");

// for (let i = 0; i < n; i++) {
//   arr[i] = +prompt(`massivning ${i}-elementi=`)
// }

// console.log("array = ",arr)

// for (let j=x; j<=x, j++){
//   s += +k
// }

// console.log(s);

// for (let k=y; k>=y, k++){
//   l += +y
// }

// console.log(l);

//

// let n = +prompt("n = "); //2
// let massiv = [];

// for (let i = 0; i < n; i++) {
//   massiv[i] = +prompt(`massiv[${i}] = `);
// }

// // [0, 1, 2, 3, 4, 5, 6]

// let l = 2
// let k = 4

// let s1 = 0

// for (let i = 0; i <= l; i++) {
//   s1 += massiv[i]
// }

// console.log('s1=', s1);

// let s2 = 0

// for (let i = k; i < massiv.length; i++) {
//   s2 += massiv[i]
// }

// console.log('s2=', s2);

// console.log('s=', s1 + s2)

// FUNCTIONS

// 1
//function firstMethod() {
//}

//2
//const secondMethod = function (){

//}

// 3
//const callMe = () => {
//  console.log('Malohot');
//}

//const calculate = (a, b) => {
//  return a+b
//}

//const summ = calculate(2,5)

//console.log(summ);

//const string = "dash123"

//const number = 13141

//const bolean = true | false

//const undefined = undefined

//const Null = null

//const object = {
//  name: "Malohat",
//  age: 19
//}

// NaN = Not a Number

//4.-----
// let n = +prompt("n = "); //2
// let massiv = [];

// for (let i = 0; i < n; i++) {
//   massiv[i] = +prompt(`massiv[${i}] = `);
// }

// [0, 1, 2, 3, 4, 5, 6]

// let l = 2
// let k = 4

// let s1 = 0

// for (let i = 0; i <= l; i++) {
//   s1 += massiv[i]
// }

// console.log('s1=', s1);

// let s2 = 0

// for (let i = k; i < massiv.length; i++) {
//     s2 += massiv[i]
// }

// console.log('s2=', s2);

// console.log('s=', (s1 + s2)/(n-k+l+1))

//5.------
//let n = +prompt("n = ");
//let massiv = [];

//for(let i = 0; i < n; i++){
//  massiv[i] = +prompt(`massiv[${i}] = `);
//}

//let a = 0;
//for(let i = a; i <= n; i++){
//  d = (a-n)/n ;
//}

//console.log('ayirmasi', d)

//6.------
//let n = prompt("n = ");
//let massiv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//let s1 = 0;

//for (let i = 0; i <= n; i++) {
//  console.log(massiv[2 * i + 1]);
//}

//console.log("s1=", s1);

//let s2 = 0;

//for (let i = 0; i <= n; i++) {
//  console.log(massiv[2 * i]);
//}

//console.log("s2=", s2);

//7.------

//let n = prompt("n = ");
//let massiv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//let s = 0;

//for(let i = 0; i <= n; i++){
//  console.log(massiv[2 * i])
//}

//console.log("s=", s);

//for(let i = 0; i <= n; i++){
//  console.log(min[2 * i])
//}

//console.log('min[2 * i]=', min[2 * i])
//8.-----
//let n =prompt("n=")
//let massiv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//let s=0;
//for(let i = 0; i <= n; i++){
// console.log(massiv[i])
//}
//console.log("s=", s);

//let a = 0;
//let b = 0;

//for(let i=a; i<b; i++){
//  console.log(min(a))
//}
//console.log('a<b', min(a<b))

//9.------

// let a= prompt("a=");
// let b= prompt("b=");
// let cTemp = a;
// a=b;
// b=cTemp;
//console.log(a);
//console.log(b);

//10.-----
//let n = +prompt("n = ");
//let massiv = [];

//for (let i = 0; i < n; i++) {
//massiv[i] = +prompt(`massiv[${i}] = `);
//}

//let a = 0

//for (let i = 0; i <= a; i++) {
//  console.log(massiv[i]=a)
//}
//console.log('a=', a);

//let b = 0

//for (let i = b; i < massiv.length; i++) {
// console.log(massiv[i]=b)
//}

//console.log('b=', b);

//let c = 0;
//for (let i = 0; i < n; i++){
//  c += console.log(max(a+b))
//}

//console.log('c=', c);

//11.-----
// let n = +prompt("1<=n<=100");
// let massiv = [];

// for (let i = 0; i < n; i++) {
//   massiv[i] = +prompt(`massiv[${i}] = `);
// }
// let s = 1;
// for(let i = 0; i < n; i++){
//   s += massiv[i]
// }

// let s2 = s/n
// let cnt = 0

// let s4 =0
// for(let i = 0; i < n; i++){
//   if (massiv[i] < s2) {
//     s4 += massiv[i];
//     cnt++;
//   }
// }  

// console.log(s4/cnt);


//12.-----
// let n = +prompt("1<=n<=100");
// let massiv = [];

// for (let i = 0; i < n; i++) {
//   massiv[i] = +prompt(`massiv[${i}] = `);
// }

// let a = +prompt("1 <= a");
// let b = +prompt("b <= n");

// let min = Math.min(...massiv);

// for (let i = a; i <= b; i++) {
//   massiv[i] = Number(massiv[i] / min).toFixed(1);
// }

// console.log("a=", a);

// for (let i = 0; i < massiv.length; i++) {
//   console.log(massiv[i]);
// }

//13.-------
// let n = +prompt("1<=n<=100");
// let massiv = [];

// for(let i = 0; i < n; i++){
//   massiv[i]= +prompt('massiv[${i}] =')
// }

// let k = 2;
// let l = 7;


// let s1 = 0

// for (let i = 0; i <= k; i++) {
//  s1 += massiv[i]
// }

// let s2 = 0;
// let cnt =0;
// for (let i = k; i < massiv.length; i++) {
//   if (massiv[i] < s2) {
//     s4 += massiv[i];
//     cnt++;
//   }
// }

// console.log((s1+s2)/cnt)

//14.-------
// let n = +prompt("1<=n<=100");
// let massiv = [];

// for(let i = 0; i < n; i++){
//   massiv[i]= +prompt('massiv[${i}] =')
// }

// let M = 0; 
// let s = 0;
// for(let i = 0; i <= M; i++){
//   s += +Math.pow(i, 2)
// }
// console.log('s=', s)

//15.-------
// let n = +prompt("1<=n<=100");
// let massiv = [];

// for(let i = 0; i < n; i++){
//   massiv[i]= +prompt(`massiv${i}=`)
// }


// let max = Math.max(...massiv);
// for(let i = 0; i < n; i++){
//   massiv[i] = Number(massiv[i] / max).toFixed(2);
// }


// console.log(massiv)


