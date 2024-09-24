function increaseBalance(e){
    e.preventDefault();
    let id = e.target.parentElement.id;
    let input = document.getElementById(id+"Input").value;
    // validating input 
    if (isNaN(input) || input<1){
        alert('Invaild input!');
        return 0;
    }
    input=parseFloat(input);
    //  finding balance
    let target = document.getElementById(id+"Balance");
    let output = parseFloat(target.innerText)+input;
    if(isNaN(output)){
        alert('Invaild input!');
        return 0;
    }
    target.innerText = output;
    decreaseMainBalance(input);
}
function decreaseMainBalance(decrease){
    let balanceElement = document.getElementById('mainBalance');
    if(isNaN(balanceElement.innerText)){
        alert("Main balance error!");
        return 0;
    }
    balanceElement.innerText= parseFloat(balanceElement.innerText)-decrease;

}
function getInnerText(id){
    document.getElementById(id);

}
function addEventListenerById(event,id,func){
    
    document.getElementById(id).addEventListener(event,func);
}