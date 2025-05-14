// stpe 1 select add Money btn

document.getElementById('btn-addmoney').addEventListener('click', function(event){
    event.preventDefault(); /// dont go another page
    // select input pin 
    const PinNumber = document.getElementById('pin-number').value;
    if (PinNumber === '1234') {
        const AddAmmount = document.getElementById('Amount').value;
        const balance = document.getElementById('balance').innerText;
        // conver to string to Float type
        const balanceNumber = parseFloat (balance);
        const addmoneyNumber = parseFloat(AddAmmount);
        const total = balanceNumber + addmoneyNumber;

       document.getElementById('balance').innerText= total;
        
    }
    else {
        alert ('somethi wrong')
    }
   
})