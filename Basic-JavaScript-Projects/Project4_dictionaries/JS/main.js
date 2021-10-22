
//Creating Dictionary
function my_Dictionary(){
    var car={
        make:"Toyota",
        Model:"Corola",
        color:"White",
    };
    //using delete operator
    delete car.color;
    document.getElementById("dictionary").innerHTML= car.color;
}

//arrow function
var car;
car =(val)=> "These are my favourite cars:"+ val;
document.getElementById("display-car").innerHTML= car("toyota, hoonda, jeep");