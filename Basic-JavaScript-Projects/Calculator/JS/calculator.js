//create an object to keep tracks of values. Initializing with 0.
const Calculator={
    Display_Value:"0",
    First_Operand:null,
    Wait_Second_Operand:false,
    operator:null,
};
//creating a function that will modifies value each time any button is clicked.
function Input_digit(digit){
    const{Display_Value,Wait_Second_Operand}=Calculator;
    if(Wait_Second_Operand===true){
        Calculator.Display_Value=digit;
        Calculator.Wait_Second_Operand=false;
    }
    else{
        Calculator.Display_Value=Display_Value === "0"? digit : Display_Value + digit;
    }
}
//This function is to handle decimal points.
function Input_Decimal(dot){
    if(Calculator.Wait_Second_Operand===true) return;
    if(!Calculator.Display_Value.includes(dot)){
        Calculator.Display_Value += dot;
    }
}
//This section handles operator
function Handle_Operator(Next_Operator){
    const {First_Operand,Display_Value,operator}=Calculator;
    const Value_of_Input=parseFloat(Display_Value);
    if(operator && Calculator.Wait_Second_Operand){
        Calculator.operator=Next_Operator;
        return;
    }
    if(First_Operand==null){
        Calculator.First_Operand=Value_of_Input;
    } else if(operator){
        const Value_Now= First_Operand || 0;
        let result= Perform_Calculation[operator](Value_Now,Value_of_Input);
        result= Number(result).toFixed(9)
        result=(result*1).toString()
        Calculator.Display_Value=parseFloat(result);
        Calculator.First_Operand=parseFloat(result);
    }
    Calculator.Wait_Second_Operand=true;
    Calculator.operator=Next_Operator;
}

// performing calcualtions
const Perform_Calculation={
    '/': (First_Operand, Second_Operand)=> First_Operand/Second_Operand,
    '*': (First_Operand, Second_Operand)=> First_Operand*Second_Operand,
    '+': (First_Operand, Second_Operand)=> First_Operand+Second_Operand,
    '-': (First_Operand, Second_Operand)=> First_Operand-Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
//reset Calculator
function Calculator_Reset(){
    Calculator.Display_Value="0";
    Calculator.First_Operand=null;
    Calculator.Wait_Second_Operand=false;
    Calculator.operator=null;
}
//setting reset value as DisplayValue
function Update_Display(){
    const display=document.querySelector(".calculator_screen");
    display.value=Calculator.Display_Value;
    
}

Update_Display();
//This sectio monitors button clicked
const Keys=document.querySelector(".calculator_keys");
Keys.addEventListener("click", (event) => {
    const {target}= event;
    if(!target.matches ("button")){
        return;
    }
    if(target.classList.contains("operator")){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains("decimal")){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all_clear")){
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_digit(target.value);
    Update_Display();
})


