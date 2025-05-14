//  addMoney and cashout but working 
document.getElementById('addMoney-btn').addEventListener('click', function(){
    document.getElementById('add-section').classList.remove('hidden')
    document.getElementById('out-section').classList.add('hidden')
    document.getElementById('TH').classList.add('hidden')
});
document.getElementById('outMoney').addEventListener('click', function(){
    document.getElementById('add-section').classList.add('hidden')
    document.getElementById('TH').classList.add('hidden')
    document.getElementById('out-section').classList.remove('hidden')
});
document.getElementById('TH-BTN').addEventListener('click', function(){
    document.getElementById('add-section').classList.add('hidden')
    document.getElementById('out-section').classList.add('hidden')
    document.getElementById('TH').classList.remove('hidden')
});




// stpe 1 select add Money btn

document.getElementById('btn-addmoney').addEventListener('click', function(event){
    event.preventDefault(); /// dont go another page
    // select input pin 
    const PinNumber = document.getElementById('pin-number').value;
    if (PinNumber === '1234') {
        const AddAmmount = document.getElementById('Amount').value;
            if (isNaN(AddAmmount)) {
            alert('is not number');
            return;
        }
        const balance = document.getElementById('balance').innerText;
        // conver to string to Float type
        const balanceNumber = parseFloat (balance);
        const addmoneyNumber = parseFloat(AddAmmount);
        const total = balanceNumber + addmoneyNumber;
       document.getElementById('balance').innerText= total;
    // tansection history function
       const p = document.createElement('p');
          p.style.textAlign = 'center'
       p.style.color = 'green'
       p.innerText = ` add amount: ${addmoneyNumber} Tk. New Balance: ${total}`;
        document.getElementById('TH').appendChild(p);
    }
    else {
        alert ('somethi wrong')
    } 
})

// cash out section 

document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault(); /// dont go another page
    // select input pin 
    const PinNumber = document.getElementById('PinNumber').value;
    if (PinNumber === '1234') {
        const AddAmmount = document.getElementById('cashout-ammount').value;
        if (isNaN(AddAmmount)) {
            alert('your ammount is not number');
            return;
        }
        
        const balance = document.getElementById('balance').innerText;
        // conver to string to Float type
        const balanceNumber = parseFloat (balance);
        const addmoneyNumber = parseFloat(AddAmmount);
        if (addmoneyNumber > balanceNumber) {
            alert ('incuficent balance');
            return;
        }
        const total = balanceNumber - addmoneyNumber;
       document.getElementById('balance').innerText= total;

          // tansection history function
       const p = document.createElement('p');
       p.style.textAlign = 'center'
       p.style.color = 'red'
       p.innerText = ` Cash out amount: ${addmoneyNumber} Tk. New Balance: ${total}`;
        document.getElementById('TH').appendChild(p);     
    }
    else {
        alert ('somethig wrong')
    }
   
})