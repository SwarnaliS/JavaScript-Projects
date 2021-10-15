
//typeof 
document.write(typeof "word");
document.write("<br>");
document.write(typeof 3);
document.write("<br>");
document.write(typeof "10" + 5);
document.write("<br>");




//NaN
function my_function(){
    document.getElementById("text").innerHTML= 0/0;
    document.getElementById("text1").innerHTML=isNaN ("String");
    document.getElementById("text2").innerHTML=isNaN ("25");
}

//Infinity
document.write(2E310);
document.write("<br>");

document.write(-2E310);
document.write("<br>");

//Boolean
document.write(5>2);
document.write("<br>");

document.write(4<3);
document.write("<br>");

//console
console.log(4*2);

//Console and Boolean logic

console.log(8<5);

//==
document.write(2+4==6);
document.write("<br>");
document.write(2-4==6);
document.write("<br>");

//===
X=5;
Y=5;
document.write(X===Y);
document.write("<br>");

M=9;
T="Nine";
document.write(M===T);
document.write("<br>");

//Logical Operator
document.write(8>5 && 9>7);
document.write("<br>");

document.write(8<5 || 9<7);
document.write("<br>");

//Not operator
function not_function(){
    document.getElementById("not").innerHTML=!(8>10);
    document.getElementById("not1").innerHTML=!(8<10);
}




