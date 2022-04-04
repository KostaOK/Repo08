var myGlobalVariable = "10";
function function1() {
    myLocalVariable = "5";

}
function function2(){
    var result = "";
    if (typeof myGlobalVariable != "undefined") {
        result += "myGlobalVariable: " + myGlobalVariable;
    }
    if (typeof myLocalVariable != "undefined") {
        result += " myLocalVariable: " + myLocalVariable;
    }
    console.log(result);
}

function1();
function2();

module.exports = {
    function1,
    function2
};