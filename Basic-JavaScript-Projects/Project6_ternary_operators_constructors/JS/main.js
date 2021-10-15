

function my_function(){
    var can_vote, age;
    age=document.getElementById("age").value;
    can_vote=(age>18)? "You are old enough" : "you are not eligible";
    document.getElementById("voters").innerHTML = can_vote  + "to vote.";
}

//Keywords and Constructor
function vehicle(make, model, color){
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_color=color;
}
    var Bob= new vehicle("Dodge", "viper", "Black");
    var Tom=new vehicle ("Ford", "Pinto", "white");
    var Jack=new vehicle("Jeep","Trail Hawk", "Red");

    function my1_function(){
        document.getElementById("info").innerHTML="Bob drives a" +" "+ Bob.vehicle_color +" "+ "colored" +" "+ Bob.vehicle_make + " "+ Bob.vehicle_model;
    }

//new and this
function customer(name,age){
    this.customer_name=name;
    this.customer_age=age;
}
  var cust1=new customer("Bob",26);
  var cust2=new customer("Shelly", 45);
  function new_function(){
      document.getElementById("new_and_this").innerHTML= cust1.customer_name + " "+ "is"  + " "+ cust1.customer_age + " "+ "years old";
  }

//assigning keyword as variable and Conatructor
function student(name, grade, school){
    this.student_name=name;
    this.student_grade=grade;
    this.student_school=school;
}
var stu1=new student("Jack","2nd", "Vista Elementary");
var stu2=new student("Ian", "3rd","Trueman Elementary");

function my_students(){
    document.getElementById("stu").innerHTML=stu1.student_name+ " "+ "goes to"+ " "+ stu1.student_school;
}

//nested function
function nested_function(){
    document.getElementById("nest").innerHTML= count();
    function count(){
        var starting_point=5;
        function plus_one(){starting_point+=1};
        plus_one();
        return starting_point ;
    }
}