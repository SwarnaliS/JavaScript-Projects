//global variable
var X=28;
function my_math(){
    document.write(100+X +"<br>");
}
function my_math1(){
    document.write(100-X + "<br>");
}
my_math();
my_math1();

//local variable
function my_math2(){
    var Y=12;
    document.write(50+Y +"<br>");
}
my_math2();

//using console
function my_math3(){
    var Z=10;
    document.write(50+Z +"<br>");
}
function my_math4(){
    console.log(10+Z +"<br>");
}
my_math3();
my_math4();

//method
function get_function(){
    if (new Date().getHours() <18);
    document.getElementById("test").innerHTML= "how are you?";
}

//If statement
function my_function(){
    var G=10;
    var H=15;
    if (G<H);
    document.getElementById("test1").innerHTML="Hello";
}

//else
function age_function(){
    age=document.getElementById("age").value;
    if (age>=18){
        Vote="You are eligible to vote";
    }
    
    else{
        Vote="You are not eligible to vote";
    }
    document.getElementById("test2").innerHTML= Vote;
}

//else if
function time_function(){
    Time=new Date().getHours();
    if (Time<12==Time>0){
        Reply="It is Morning";
    }
    else if 
        (Time>=12==Time<18){
            Reply="This is Afternoon";
        }
    else {
        Reply="It is Evening Now";
    }
    document.getElementById("time_of_the_day").innerHTML=Reply;
}