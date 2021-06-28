function art_Dictionary()    {                      //Onclick produces object from the Dictionary
    var Art={
        Artist:"Paul Wonner",
        Title:"Imaginary Still Life with Slice of Cheese",
        Year:"1977",
        Medium:"Acrylic on canvas"                  //Variable key-value pairs
    };
    delete Art.Title;                               //Removes a key
    document.getElementById("Dictionary").innerHTML=Art.Title;      //Value will be undefined without a key
}