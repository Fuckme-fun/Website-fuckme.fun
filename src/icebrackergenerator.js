import * as icebracker from './icebreakers2.json';
const name = icebracker.icebreakers;

var quotefield = document.getElementById('quotefield');
var typefield = document.getElementById('quotetype');


var button = document.getElementById('newquotebutton');

button.addEventListener('click', (e) => {
    newquoteonpage();
    console.log(e);
})

newquoteonpage();

function newquoteonpage(){
    var newquote = getrandomobjectfromarray(name);
    quotefield.innerHTML = newquote.spruch;
    typefield.innerHTML = newquote.Kategorie;
}

function getrandomobjectfromarray(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex];
}