document.write("12"+4);                 //Type coercion
document.write(typeof "Word");          //Gives the data type of the variable
document.write(typeof 3);

function my_Function()  {                   //Checks whether or not something is a number
    document.getElementById("Test").innerHTML=isNaN('007');
}

document.write(2E310);              //Displays infinity
document.write(-3E310);             //Displays -infinity
document.write(10>2);
document.write(10<2);               //Displays true/false conditions

console.log(2+2);                   //Console.log method
console.log(24<12);                //Displays the result in the console

document.write(10==10);             //Compares equality in value
document.write(3==11);

X=82;                               //Compares equality in both value and data type
Y="82";
document.write(X===Y);
A="Magnus";
B="Magnus";
document.write(A===B);
C="Pacific";
D=12;
document.write(C===D);
E=64;
F=32;
document.write(E===F);

document.write(5>10&&10>4);         //Verifies both statements are true
document.write(5>10||10>4);         //Verifies at least on statement is true
document.write(5>10||10>20);

function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);      //Verifies a statement is false
}

function not_Function() {
    document.getElementById("Not").innerHTML=!(5>10);
}