function displayvalue(val){
    document.getElementById('display').value = document.getElementById('display').value + val;
}

function clearvalue(){
    document.getElementById('display').value = "";
}

function calculation(){
    var user_input = document.getElementById('display').value;
    var result = eval(user_input);

    document.getElementById('display').value = result;
}

function clearone(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
}