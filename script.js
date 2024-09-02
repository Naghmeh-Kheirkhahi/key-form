const keyCode1 = document.getElementById('keyCode1');
const keyName1 = document.getElementById('keyName1');
const keyCode2 = document.getElementById('keyCode2');
const keyName2 = document.getElementById('keyName2');


document.addEventListener('keydown', ev => {
    keyCode1.innerText = ev.keyCode;
    keyName1.innerText = ev.key;
    
    keyCode2.innerText = ev.keyCode;
    keyName2.innerText = ev.key;
})