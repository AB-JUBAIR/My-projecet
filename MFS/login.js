// step - 1 set event handeler 

document.getElementById('btn-login').addEventListener('click', function(event){
    // step 2 prevent default behavior 
    event.preventDefault(); // ----- Need more rescearh
console.log('clicked button');
// get the phone number

const PhoneNumber = document.getElementById('phone-number').value;
const PinNumber = document.getElementById('pin-number').value;
console.log(PhoneNumber,PinNumber);

// temporary verify phone number and pin
if (PhoneNumber === '01815' && PinNumber === '1234') {
    console.log('you logged in');
    alert('Successfully Login')
}
else {
    alert ('somethig wrong in your info')
}
})