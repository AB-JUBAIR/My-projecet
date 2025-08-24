const { createElement } = require("react");

console.log('connected to html');
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      function loadData(){
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(response => response.json())
        .then (data => displayData(data));
      }

      function displayData(data){  
    const ul = document.getElementById('user-list')
        for (const user of data) {
            console.log(user);
            const li = document.createElement( 'li');
            li.innerText= `Name Of User : ${user.name}`;
            ul.appendChild(li);
        }
        
      }