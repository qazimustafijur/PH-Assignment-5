//increase the balance of the donation section from where the function called
//and call function to decrease amount from main balance.
function increaseBalance(e){
    e.preventDefault();
    let id = e.target.parentElement.id;
    let inputElement = document.getElementById(id+"Input");
    let input = inputElement.value;
    let modal=document.getElementById('cModal');
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
    addHistory(input,id);
    modal.showModal();
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
    c.classList.add('parrot-bg');
    d.classList.remove('parrot-bg');
}
function addHistory(de,id){
    let title = document.getElementById(id+"Title").innerText;
    let output = document.createElement('div');
    output.className='p-5 border border-gray-300 rounded-xl my-5 gap-5';
    output.innerHTML = "<p class='p-3'> "+de+" Taka is Donated for "+title+"</p>"+"<p class='font-light p-2'>"+new Date()+"</p>";
    document.getElementById('historySec').appendChild(output);
}