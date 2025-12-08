//Basics (Variables, Conditions)

//1.Do numbers ka sum print karo.
const a=12;
const b=12;
const sum= a+b;
console.log("2 number sum is :" ,sum);

//2.Do numbers ka subtraction print karo.
const a1 = 10;
const b1 =5;
const sub = a1 -b1 ;
console.log("subtraction is :",sub);

//3.Temprature check karo — number > 30 ho to "Hot", warna "Cold".
const tem = 40;
if (tem > 30)
{
    console.log(tem,"temrature is hot");
}
else 
{
    console.log(tem,"temrature is cold");
}

//4.Number even hai ya odd check karo.
num = 5;
if(num % 2 == 0)
{
    console.log("even number");
}
else{
    console.log("odd number");
}

//5.Number positive, negative, ya zero hai — check karo.
const num1 = -10;
if ( num1 < 0 )
{
    console.log("nagative");
}
else if (num1 > 0 )
    {
    console.log("positive");
    }
else {
    console.log("zero");
}
    

//6.Teen numbers me se largest kaun hai — find karo.
const arry = [10, 60 ,100];

console.log( Math.max(...arry));


//7.Age >= 18 ho to "Adult" print karo.
let age = 30 ;
if(age>=18){
    console.log("adult");
}
else{
    console.log("not adult");
}

//8.Marks se grade print karo (A, B, C).
marks = 81;
if (marks <= 100 && marks >= 90){
    console.log("grade A");
}
else if(marks <= 90 && marks >= 81)
{
    console.log("grade B");
}
else {
    console.log("grade C");
}

//9.Ek number divisible by 5 and 10 check karo.
function Divisible(number){
    if (number % 5 === 0 && number % 10 === 0)
    {
        return `${number} is divisible by both 5 and 10`;
    }
    else{
        return `${number} is not divisible by both 5 and 10`;
    }
}
console.log(Divisible(100));

//10.Leap year check karo.
let number = 2000;
if (number % 2 === 0 && number % 100 !== 0 || number % 400 === 0 )
{
    console.log("leap year");
}
else{
    console.log("not leap year");
}
//Loops (Very Easy)

//11. 1 se 10 tak numbers print karo using loop.
for(let i = 1; i<=10; i++)
{
    console.log(i);
}

//12. 1 se n tak numbers ka sum.
let sum1 =0;
let n= 10;
for(let i=1 ; i<=n; i++)
{
    sum1 += i;   
}
console.log("sum is :",sum1)

//13. 10 se 1 reverse print karo.
for(let i = 10 ; i>=1 ; i--)
{
    console.log(i);
}

//14.First 10 even numbers print karo.
count = 0;
let c=1;
while(count<10){
    if(c % 2 === 0)
    {
        console.log(c);
        count++;
    }
    c++;
}

//15. First 10 odd numbers print karo.
count =0;
let d=1;
while(count<10){
    if(d % 2 !== 0)
    {
        console.log(d);
        count++;
    }
    d++;
}


//16. 1 se 10 tak table print karo (like 5 × 1, 5 × 2).
let n1= 5;
for(let i=1; i<=10; i++)
    {
        result = n1 * i;
        console.log(`${n1} x  ${i}  =  ${result}`);
    } 

//17. 1 se 50 tak only multiples of 3 print karo.
let n2=3;
for(let j=1; j<=50; j++)
{
    if(j % 3 ===0)
    {
        console.log(j);
    }
}

//18. 1 se 100 tak numbers me se total even count.
total = 0;
for(let i = 1 ; i<= 100; i++){
    if(i % 2 === 0)
    {
        total ++;
       
    }
} console.log("total even number",total);
        
//19. Factorial of a number (easy).
let fact = 1;
let num5 =5;
for(let i =1 ; i<= num5; i++)
{
    fact *= i;
}
console.log("factorial number is", fact);

//20. 1 se 100 tak numbers me se only divisible by 7 print karo.

for (let i = 1; i<= 100; i++)
{
    if(i % 7 === 0)
    {
        console.log(i);
    }
}

//Strings (Very Easy)

//21. String length print karo.
let str = "seema";
let output =str.length;
console.log(output);

//22. Ek string ko uppercase me convert karo.
let str1 = "dwira";
console.log(str1.toUpperCase());

//23.Ek string ko lowercase me convert karo.
let str2 = "PRISHA";
console.log(str2.toLowerCase());

//24.Ek string ka first character print karo.
let str5 = "seema";
let fc = str5[0];
console.log(fc[0]);

//25.Ek string ka last character print karo.
let str6 = "hello";
console.log(str6.charAt(4))

//26.Ek string reverse karo (easy method).
let str4 = "prisha";
let reverse = str4.split('').reverse().join('');
console.log(reverse);

//27.String me vowels count karo (easy).
let str7 = "dwira";
const matches = str7.match(/[aeiou]/gi);
console.log(matches);

//28.String me spaces count karo.
let str8 = "seema dwira prisha krishita tejal";
let spc = str8.match(/ /g);
console.log(spc); 

//29.Ek string me "a" kitni baar aaya — count karo.
let string = "aaanaajaakka";
let count = string.match(/a/g);
console.log(count);

//30.  2 strings ko join/mix karo.*/
let string1 = "prisha";
let string2 ="zala";

console.log(string1 + string2);