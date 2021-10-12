
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
