if(true){
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x);
console.log(y);
console.log(z);

///////////////////////////////////////
//////////////////////////////////////


const greetPersonOld = function(name){
    return "hello " + name ;
}
const greetPerson = name => 'hello ' + name;
console.log(greetPersonOld('seema'));
console.log(greetPerson('ashish')); 

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function sampleOld(){
    console.log ("building old object");
}
sampleOld.prototype.printHello = function(){
    console.log("hello");
}

const oldObject = new sampleOld();
oldObject.printHello();
class sample{
    constructor(){
        console.log("building object");
    }
    printHello(){
        console.log("hello");
    }
}
const hello = new sample();
hello.printHello(); 
 ////////////////////////////////////
 //////////////////////////////////

 const names = ["seema","ashish","prisha","dwira"];
 const [a, b, c, d] = names;
 console.log(a,b,c, d);

 const obj = {first : "seema", second : "ashish", third : "prisha", forth:"dwira"};
 const {first, second, third, forth} = obj;
 console.log(first, second,third,forth);
