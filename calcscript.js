var halfTemp = 0;

var doubleTemp = 0;

var tempo = 174;



const tempoDisp = document.querySelector(`h1`);
const halfDisp = document.querySelector(`.half`);
const doubleDisp = document.querySelector(`.double`);



document.getElementById("btnPlus").addEventListener("click", event=>{
    
    
    tempo = tempo+0.5;
    halfTemp = tempo/2;
    doubleTemp = tempo*2;


tempoDisp.innerHTML = tempo;
halfDisp.innerHTML = halfTemp;
doubleDisp.innerHTML = doubleTemp;


});

document.getElementById("btnMinus").addEventListener("click", event=>{
    
    
    tempo = tempo-0.5;
    halfTemp = tempo/2;
    doubleTemp = tempo*2;


tempoDisp.innerHTML = tempo;
halfDisp.innerHTML = halfTemp;
doubleDisp.innerHTML = doubleTemp;


});
