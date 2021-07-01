function Ride_Function()    {                                   //Using Ternary Operators to get a true/false result
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Vote_Function()    {                       //variable=(condition)?value_1:value_2
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18)?"You are not yet old enough to vote.":"You can vote!";
   document.getElementById("Vote").innerHTML=Can_vote;
}

function Vehicle(Make, Model, Year, Color)  {           //Object Constructor Function
    this.Vehicle_Make=Make;                             //Creating on object class with 4 parameters
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("Dodge","Viper", 2020, "Red");        //New function creates child objects in the parent class
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML=
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Art(Title, Artist, Year, Medium)  {        //Using new, this keywords in constructing an object
    this.Art_Title=Title;
    this.Art_Artist=Artist;
    this.Art_Year=Year;
    this.Art_Medium=Medium;
}
var Whitney= new Art("Four Men","David Park", 1958, "Oil on Canvas");       //new variable inputs
var SFMOMA= new Art("Planetary Face", "Wolfgang Paalen", 1947, "Oil on Canvas");
function newFunction()  {
    document.getElementById("New_and_This").innerHTML= "Featured at the Whitney Museum: "+ Whitney.Art_Title + " by "
    + Whitney.Art_Artist;
}

function count_Function() {                         //nested function exercise; Outer function
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {                              //Inner function       
        var Starting_point=9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;                  //closing loop
    } 
}