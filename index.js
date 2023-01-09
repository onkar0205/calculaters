// for Normal calculater
// Display function
function Display(val) {
    document.getElementById("result").value += val
}
//backspace
function back(){
    if(document.getElementById("result").value=="Invalid")
        document.getElementById("result").value=""
    else
        document.getElementById("result").value=document.getElementById("result").value.slice(0,-1)
}
//add elements
function AddElements(press) {
        document.getElementById("result").value += press.key
}
//solve expression 
function solve() {
    try {
        output=math.evaluate(document.getElementById("result").value)
    } catch (error) {
        output="Invalid";
    } 
    document.getElementById("result").value = output
}
// clear display
function clr() {
    document.getElementById("result").value = ""
}


// for scientific calculater
// Display function
function SciDisplay(val) {
    document.getElementById("Sciresult").value += val
}
//backspace
function SciBack(){
    if(document.getElementById("Sciresult").value=="Invalid")
        document.getElementById("Sciresult").value=""
    else
        document.getElementById("Sciresult").value=document.getElementById("Sciresult").value.slice(0,-1)
}
//add elements
function SciAddElement(press) {
   document.getElementById("Sciresult").value += press.key
}
//solve expression 
function Sci_solve() {
    try {
        output=math.evaluate(document.getElementById("Sciresult").value)
    } catch (error) {
        output="Invalid";
    } 
    document.getElementById("Sciresult").value = output
}
// clear display
function Sci_clr() {
    document.getElementById("Sciresult").value = ""
}