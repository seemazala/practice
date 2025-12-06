//q.1 Write a program to print your name in the console.
   console.log("seema");

//2.Take two numbers and print their sum.
let a = 10;
let b = 10;
let sum = a + b;

console.log("sum is :", + sum);

//3.Take a number and check if it is even or odd.
let number = 8;

if (number % 2 === 0)
{
  console.log("even number"); 
}
else{
    console.log("odd number");
}
//4.Print numbers from 1 to 10 using a loop.
for(let i=1; i<=10; i++)
{
    console.log(i);
}

//5.Take a string and print its length.
let string = "seema" ;
let length = string.length;

console.log("string length :" + length);
//6.Print all elements of an array using a loop.
let array = ["prisha","dwira","krishita"];
for (let i =0; i<= array.length; i++)
{
    console.log(array[i]);
}

//7.Find the largest number in an array.
let n = [50, 60 ,100];
let largest = Math.max(...n);
console.log("largest number", + largest);

//8.Reverse a string (without using built-in reverse).
let s = "seema";
let reversed = s.split("").reverse().join("");

console.log(reversed);

//9.Count vowels in a given string.
let words = "seemavaniya";
let c=0;
for(let i=0; i<= words.length; i++){
    if ("aeiouAEIOU".includes(words[i])){
         c++;
}}
console.log("total vovels ", + c);
//10.Check if a number is positive, negative, or zero.
let num = 5;

if (num>0)
{
    console.log("positive", + num);
}
else if(num<0)
{
    console.log("nagative", + num);
}
else{
    console.log("zero ", + num);
}
//11.Create a function that returns the square of a number.

const num1 = 5;

const sqr = num1 * num1 ;
console.log("square is", + sqr);  

//12.Write a program to find factorial of a number.
const j= 10;
let fact;
for(let i =0 ; i<=10; i++)
{
    fact = i * j;
    console.log("factorial", + fact);   
}


//13.Take age input and check if user is adult (>=18).
let age = 12;
if (age>18)
{
    console.log("adult");
}
else{
    console.log("not adult");   
}


//14.Convert Celsius to Fahrenheit.
c=20;
f= (c * 9/5) +32;
console.log(f);

//function celsiusFah(c)
//{
  //  return f;
//}

//console.log(celsiusFah(f));

//15.Create an array of fruits and print the second fruit.

let fruits = ["kiwi","mango","apple","orange"];
console.log(fruits[2]);

//16.Take two numbers and print the greater one.
let x=100;
let y= 50;
if (x>y)
{
    console.log("x is greater number", + x);
}
else{
    console.log("y is greater number ", + y);
}

//17.Check if a character is a vowel or consonant.
function chechChar(char){
let vowel = "aeiou";
char = char.toLowerCase();
if (vowel.includes(char))
{
    console.log("vowels");
}
else{
    console.log("consonant");
}
}
chechChar("a");
chechChar("s");
//18.Create a simple calculator (add, subtract, multiply, divide)

function calculator(n1, n2, op){
switch(op)
{
    case "+":
        return n1+n2;

    case "-":
        return n1-n2;
    
    case "*":
        return n1*n2;

    case "/":
        return n1/n2;
    
    default :
        return "invalid";

}
}
console.log(calculator(4, 2 , "*"));
console.log(calculator(4, 2 , "+"));
console.log(calculator(4, 2 , "-"));
console.log(calculator(4, 2 , "/"));

//19.Replace all spaces in a string with “-”.
let str1 = "hello seema , what r u doing" ;
let result = str1.replaceAll(" ","-");
console.log(result);

//20.Count how many times a number appears in an array.
let n3 = [ 1,2,2,2,2,2,2,5,2,];
let n4 = 2;
let count = n3.filter(item => item === n4).length;

console.log(count);

//21.Write a program to check if a number is prime.
const number = 8;
let isPrime = true;

if(number < 2 && number !== 2)
{
    isPrime = false;
}
for(let i= 2 ; i < number && isPrime; i++){
    if(number % i === 0)
    {
        isPrime = false;
    }
}
console.log(isPrime ? "prime" : "not prime");      

//22.Find the sum of all numbers in an array.
let sum = 0;
let array = [10,20,30,40,50];

for(let i=0; i< array.length; i++)
{
    sum += array[i];
}
console.log(sum);

//23.Remove duplicates from an array.
let arr = [1,1,2,2,3,3,4,5,6];
let uniquearry = [...new Set(arr)];

console.log(uniquearry);


//24.Write a program to print the first 10 multiples of a number.
let n=5;
for(let i=1; i< 10; i++){
    console.log(n * i);
}


//25.Check if a string is a palindrome.
let str= "dwira";
let reverse ="";

for (let i= str.length -1; i> 0; i--){
    reverse += str[i];
}
if (str === reverse){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}

//26.Write a function to return the smallest number in an array.
function Smallest(array){
    return Math.min(...array);
}
console.log(Smallest([50,3,45,88,2]));


//27.Convert a string to uppercase without using .toUpperCase() directly.
function toUpper(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // a–z → 97–122  
    // A–Z → 65–90  
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32); // convert to uppercase
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(toUpper("hello world"));   // HELLO WORLD
console.log(toUpper("Seema zala"));    // SEEMA ZALA



//28.Create an array of names and sort them alphabetically.
let name =["seema","prisha","dwira","tejal","krishita"];
let alpha = name.sort();
console.log(alpha);

//29.Write a program to print the table of any number.
    
    let n =5;
    for(let i=1; i<=10 ; i++)
    {
    
        console.log(n + "x" + i + "="+ (n * i));
    }
    
//30.Create an object of a student (name, age, grade) and print all values.
let Student = {
    name : "seema",
    age : 32,
    grade : "A"

};
console.log(Student.name);
console.log(Student.age);
console.log(Student.grade);
