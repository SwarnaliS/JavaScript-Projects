
//typeof
document.getElementById("text5").innerHTML=Jeff;
 Jeff= typeof "word";
document.write(Jeff);

document.write(typeof 3);

document.write("10"+ 5);

//NaN
function my_function(){
    document.getElementById("text").innerHTML= 0/0;
    document.getElementById("text1").innerHTML=isNaN ("String");
    document.getElementById("text2").innerHTML=isNaN ("25");
}

//Infinity
document.write(2E310);

document.write(-2E310);

//Boolean
document.write(5>2);

document.write(4<3);

//console
console.log(4*2);

//Console and Boolean logic

console.log(8<5);

//==
document.write(2+4==6);
document.write(2-4==6);

//===
X=5;
Y=5;
document.write(X===Y);

M=9;
T="Nine";
document.write(M===T);

//Logical Operator
document.write(8>5 && 9>7);

document.write(8<5 || 9<7);

//Not operator
function not_function(){
    document.getElementById("not").innerHTML=!(8>10);
    document.getElementById("not1").innerHTML=!(8<10);
}




