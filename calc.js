//variable
var screen=document.getElementById('ans')

//btnclick function
function btnClick(value){
    screen.value+=value;
}

//clearscreen function
function clearScreen(){
    screen.value=""
}

//equalButton function
function findResult(){
    var result =eval(screen.value);
    screen.value=result;
}

//backspace function
function backSpace(){

    var val= document.getElementById("ans").value
    document.getElementById("ans").value = val.substr(0, val.length - 1)
}
