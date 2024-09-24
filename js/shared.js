//increase the balance of the donation section from where the function called
//and call function to decrease amount from main balance.
function increaseBalance(e){
    e.preventDefault();
    let id = e.target.parentElement.id;
    let inputElement = document.getElementById(id+"Input");
    let input = inputElement.value;
    inputElement.value = "";
    // validating input 
    if (isNaN(input) || input<1){
        alert('Invalid input!');
        return 0;
    }
    input=parseFloat(input);
    //  finding balance
    let target = document.getElementById(id+"Balance");
    let output = parseFloat(target.innerText)+input;
    if(isNaN(output)){
        alert('Invalid input!');
        return 0;
    }
    target.innerText = output;
    decreaseMainBalance(input);
}

//decreases the main balance. this function is called from inside the increaseBalance function
function decreaseMainBalance(decrease){
    let balanceElement = document.getElementById('mainBalance');
    if(isNaN(balanceElement.innerText)){
        alert("Main balance error!");
        return 0;
    }
    balanceElement.innerText= parseFloat(balanceElement.innerText)-decrease;

}
// eventlistener adding by id and function
function addEventListenerById(event,id,func){
    
    document.getElementById(id).addEventListener(event,func);
}
function donationButtonColor(e){
    e.preventDefault();
    let a = document.getElementById('donationSec');
    let b = document.getElementById('historySec');
    let c = document.getElementById('donationBtn') 
    let d = document.getElementById('historyBtn');
    e.target.id=="donationBtn"?[a,b]=[b,a]:[c,d]=[d,c];
    a.classList.add('hidden');
    b.classList.remove('hidden');
    c.classList.add('bg-[#B4F461]');
    d.classList.remove('bg-[#B4F461]');
}