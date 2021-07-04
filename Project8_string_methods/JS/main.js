function full_Sentence()    {
    var part_1="I have ";                           //concat()method connecting 4 strings
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function slice_Method() {
    var Sentence="All work and no play makes Jackie a dull boy.";
    var Section=Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;             //returns a section: Jackie
}

function uppercase_Function()   {               //converts entire string to Upper case
    var str="What's it all mean?";
    var string=str.toUpperCase();
    document.getElementById("Upper").innerHTML=string
}

function search_Method()    {               //Used to search for a match between expressions and a string object, returns the place number of the match
var string="Bird in Flight";
var re1=/B/;
document.getElementById("Search").innerHTML=string.search(re1)+"<br>";
}

function string_Method()    {               //returns a number as a string
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

function precision_Method() {               //formats a number to a specified length
    var X=2648742.64737834;
    document.getElementById("Precision").innerHTML=X.toPrecision(8);
}

function fixed_Method() {               //formats a number using fixed-point notation
    var X=365.7456;
    document.getElementById("Fixed").innerHTML=X.toFixed(1);
}

function valueOf_Method()   {           //returns the primitive value of a number
    var num=42;
    document.getElementById("valueOf").innerHTML= num.valueOf();
}



