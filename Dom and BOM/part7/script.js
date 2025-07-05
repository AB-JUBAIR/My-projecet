document.getElementById("btn2").addEventListener('click', function()  {
    console.log('this');
    let hold = document.getElementById("btn");
    console.log(hold);
    hold.textContent = 'jubair'
})
// add to shoping list 
document.getElementById("addNewItem").addEventListener('click', function() {
    let newItem = document.createElement('li')
    newItem.textContent = "egg"

    document.getElementById("shopingList").appendChild(newItem);
})
