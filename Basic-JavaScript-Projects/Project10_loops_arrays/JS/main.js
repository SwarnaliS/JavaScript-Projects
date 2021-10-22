//while loop
function my_loop(){
    var count="";
    var X=0;
    while(X<11){
        count+= X + "<br>", X++;
        
    }
    document.getElementById("loop").innerHTML=count;
}

//for loop
var instruments=["drums", "guiter", "piano", "flute", "harmonica"];
var content="";
var Y;
function for_loop(){
    for(Y=0;Y<instruments.length; Y++)
    {
        content+=instruments[Y] + "<br>";
    }
    document.getElementById("inst").innerHTML=content;
}

//Array
function array_func(){
    var Img=[];
    Img[0]="happy pose";
    Img[1]="funny pose";
    Img[2]="random pose";
    document.getElementById("array").innerHTML="This is my" + " " +Img[0];
}

//Constant
function const_func(){
    const musical_instrument= {type:"guiter", brand:"Fender", color:"Black" };
    musical_instrument.color="Blue";
    musical_instrument.price="$900";
    document.getElementById("constant").innerHTML="This guiter costs" + " "+ musical_instrument.price+" "+ "and it's"+" "+musical_instrument.color+" "+"colored";
}

//Let
    var X=15;
    document.write(X + "<br>");
    {
        let X=21;
        document.write(X +"<br>");
    }
    document.write(X + "<br>");

//Return
//I wrote the exact code here as I wrote in HTMl under <script>. It did not work. But when I put the code in HTML it worked.
//The same thing happen with the srting.length.
//Please let me know why.



//Object
//Same problem happened. Had to write code under HTML <script>.
//Double checked script src.

let car={
    make:"Dodge",
    model:"Viper",
    year:"2021",
    color:"Black",
    description: function(){
        return "This car is a"+ " "+this.make+ " "+ this.model+ " "+ "and" + " "+this.color+ " "+"colored";
    } 

};
document.getElementById("obj").innerHTML=car.description();


//Break and continue
//Same thing happed here.

let text1="";
for(x=0;x<11;x++){
    if(x===3){continue;}
    text1+="The number is"+ x+ "<br>";
}
document.getElementById("continue").innerHTML=text1;