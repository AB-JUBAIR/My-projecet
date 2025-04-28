
/**
 * 
 */

const maintcotainer = document.getElementById('main-content');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'New sectioin'  ;
section.appendChild(h1);

const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText = 'biriyani';
ul.appendChild(li);
const li1 = document.createElement('li');
li1.innerText = 'juich';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'kacchi';
ul.appendChild(li2);
section.appendChild(ul);
maintcotainer.append(section);
// ---------- style sectijon --------------
console.log('Js is connected');

const sections  = document.querySelectorAll('section');

for (const section of sections) {
    section.style.border = '2px solid blue';
    section.style.borderRadius = '10px';
    section.style.padding = '1.5rem'
} 
