main.js
function My_First_Function()    {
    var str="This text is magenta!";        //names the string
    var result=str.fontcolor("magenta");    //colors the string
    document.getElementById("Magenta_Text").innerHTML=result; //Recalls the string
}
function myFunction()  {
    var sentence="I am learning";
    sentence += " so much from this book!";   //concatenates the sentence
    document.getElementById("Concatenate").innerHTML=sentence;
}