function Call_Loop()    {           //"while loop" loops through a block of code for as long as a specified condition is true
    var Digit="";
    var X=1;
    while (X<11)    {
        Digit += "<br>"+X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

function stringLength() {
    var X = "Garden of Earthly Delights";           //counts number of characters in a string
    document.getElementById("string").innerHTML=X.length;
}

var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;                                      //"for loop" repeatedly executes instructions when the number of iterations is known
function for_Loop() {
    for (Y=0; Y<Instruments.length; Y++)    {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function()   {       //Objects with indexes and properties
    var Tarot=[];
    Tarot[0]="the Seven of Crystals";
    Tarot[1]=" the Woman of Wands";
    Tarot[2]="The Tower";
    Tarot[3]=" the Child of Crystals";
    document.getElementById("Array").innerHTML= "Your card of the day is "  +Tarot[2]+".";
}

function constant_function()    {                   //"Constant" keyword makes identifiers immutable; values remain variable
    const Musical_Instrument={type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML="The cost of the "+ Musical_Instrument.type+ " was "+ Musical_Instrument.price;
}

function let_function() {           //"Let" declares variable with block scope
    var X=46;
    document.getElementById("Let").innerHTML=X;
    {
        let X=95;
        document.getElementById("Let").innerHTML="<br>" + X;
    }
    document.getElementById("Let").innerHTML="<br>" + X;
}

function return_statement() {           //stops the execution of a function and returns a value from that function
    let num=42;
    if (num<1)  {
        return;
    }
    else {
        document.getElementById("Return").innerHTML="The number is " + num;
    }
}

function object_structure() {           //creates an object and properties
    let art = {
    title: "Celebes ",
    artist: "Max Ernst ",
    year: "1921 ",
    medium: "Oil on Canvas ",
    description : function()    {
        return "The painting is " + this.title + "by " + this.artist + "painted in " + this.year + "using " + this.medium;
        }
    };
document.getElementById("Art_Object").innerHTML= art.description();
}

function break_statement()    {             //"break" stops count at 5
    var X=1;
    while (X<20)    {
        if (X==5)   {
           break;
    }   
    X=X+1;                                  //+= documents the count
    document.getElementById("Break").innerHTML+=X+"<br>";
    }
}

function continue_statement()   {               //"Continue" stops at 3, then continues
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text = "The number is " + i + "<br>";
        document.getElementById("Continue").innerHTML+= text;
      }

}