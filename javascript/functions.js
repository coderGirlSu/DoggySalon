function press() {
    alert("no signal");
}

function quickAdd(x,y){
    var answer=x+y;
    return answer;
}
function test(){
    var result=quickAdd(1,2);
    alert(result);
}

function add(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var answer = parseInt(x)+ parseInt(y);
    alert(answer);
}