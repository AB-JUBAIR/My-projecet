// option 3
const makepurple = document.getElementById('purple');
makepurple.onclick = function makepurpleit()
{
    document.body.style.backgroundColor= 'purple';
}
// option 2
function makeYellow()
{
    document.body.style.backgroundColor = 'yellow';
}
// option 4
const Pink = document.getElementById('Pink');
Pink.addEventListener('click', makepink); 

function makepink() {
    document.body.style.backgroundColor = 'pink';
}
//option 4 final it is the best and cleanest way i will use most of the time
 document.getElementById('green').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green'}); 