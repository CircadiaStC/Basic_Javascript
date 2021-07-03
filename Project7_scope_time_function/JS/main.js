var X=10;                           //global variable
function Add_numbers_1()    {
    document.write(20+X+"<br>");
}
function Add_numbers_2()    {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1()    {
    var X=10;                       //local variable
    document.write(20+X+"<br>");
}
function Add_numbers_2()    {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3()    {       //using console.log method to debug code
    var X=10;
    console.log(15+X);
}
function Add_numbers_4()    {       //X is defined by the global variable above
    console.log(X+100);
}
Add_numbers_3();                    //Changed 1 and 2 to 3 and 4 to avoid confusion, remedied an error
Add_numbers_4();

if (1<2)    {
    document.write("The left number is smaller than the number on the right.")      //if statement
}

function get_Date() {
    if (new Date().getHours()<18) {                                                 //GetDate method using getHours + if statement
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

function get_FullYear()    {
    if (new Date().getFullYear()>2020)  {                                           //GetDate method using getFullYear + if statement
        document.getElementById("Babies").innerHTML="Welcome to the World";
    }
}

function Age_Function() {
    Age=document.getElementById("Age").value;
    if (Age>=18)    {
        Vote="You may register to vote!";                                               // else statement
    }
    else    {
        Vote="You are not yet old enough to vote! Come back when you are 18.";
    }
    document.getElementById("What_is_your_age?").innerHTML=Vote;
}

function Time_function()    {
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0)    {
        Reply="It is morning.";                         //else if conditions
    }
    else if (Time>=12==Time<18) {
        Reply="It is afternoon.";
    }
    else{
        Reply="It is evening.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}
