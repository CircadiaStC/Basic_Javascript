function addition_Function()    {
    var addition=2+2;
    document.getElementById('Math').innerHTML="2+2="+addition;  //On click adds 2 numbers
}

function subtraction_Function() {
    var Subtraction=2-2;
    document.getElementById('Math').innerHTML="2-2="+Subtraction    //On click subtracts 2 number
}

function multiplication_Function()   {
    var simple_Math=2*2;
    document.getElementById('Math').innerHTML="2*2="+simple_Math;   //On click multiplies 2 numbers
}

function division_Function()     {
    var simple_Math=2/2;
    document.getElementById('Math').innerHTML="2/2="+simple_Math;   //On click divides 2 numbers
}

function more_Math_Function()    {
    var simple_Math=(1+2)*10/2-5;
    document.getElementById('Math').innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals "+simple_Math;
}                                                                    //On click performs multiple operations

function modulus_Operator() {
    var simple_Math=25%6;
    document.getElementById('Math').innerHTML="When you divide 25 by 6 you have a remainder of: "+simple_Math;
}                                                                   //On click solves the remainder in division

function negation_Operator()    {
    var x=10;
    document.getElementById('Math').innerHTML=-x;                   //On click delivers the negative of the variable
}

function increment()    {                                           //On click will deliver the next higher number to the variable
    var X=5;
        X++;
    document.getElementById('Math').innerHTML=X;
}

function decrement()    {
    var X=5.25;
    X--;
document.getElementById('Math').innerHTML=X;                        //On click delivers the next lower number to the variable
}

window.alert(Math.random());                    //Pop-up windows declare random numbers
window.alert(Math.random()*100);

function math_Object()  {                                           //On click delivers the square root of the variable
    var sqrt_val=Math.sqrt(42);
    document.getElementById('Math').innerHTML="The square root of 42 equals "+sqrt_val;
}

