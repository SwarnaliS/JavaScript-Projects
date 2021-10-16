//concat
function my_conc(){
    P1="this is the first line" + " ";
    P2="this is the second line" + " ";
    P3="this is the third line";
    whole_sentence=P1.concat (P2, P3);
document.getElementById("conc").innerHTML= whole_sentence;
}

//Slice 
function slice_function(){
    Sentence="Tintin doesn't want to go to school today.";
    Section=Sentence.slice(0,6);
    document.getElementById("slice").innerHTML=Section;
}

//Uppercase
function u_function(){
    Word="tintin";
    Word_U=Word.toUpperCase();
    document.getElementById("uc").innerHTML=Word_U;

}

//Search
function s_function(){
    text="Tintin is a good boy!";
    text1=text.search("Tintin");
    document.getElementById("search").innerHTML=text1; 
}

//number
function my_number(){
    X=145;
    document.getElementById("num-string").innerHTML=X.toString();
}

//Precision
function my_pre(){
    X=120.36987461158796348;
    Y=X.toPrecision(5);
    document.getElementById("pre").innerHTML=Y;
}

//tofixed
function fix_function(){
    S=12.32265965897815156;
    document.getElementById("fix").innerHTML=S.toFixed(2);
}

//Valueof
function val_func(){
    let T="Tintin";
    S=T.valueOf();
    document.getElementById("val").innerHTML=S;
}