// Function that display value
function Display(val) {
    document.getElementById("result").value += val
}
function back(){
    document.getElementById("result").value=document.getElementById("result").value.slice(0,-1)
}
function AddElements(press) {
   document.getElementById("result").value += press.key
}
// Function that evaluates the digit and return result
function solve() {
    try {
        output=evaluate(document.getElementById("result").value)
    } catch (error) {
        output="Invalid";
    } 
    document.getElementById("result").value = output
}
// Function that clear the display
function clr() {
    document.getElementById("result").value = ""
}