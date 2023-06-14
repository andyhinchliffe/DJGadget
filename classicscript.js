

var color = "black"

var flip = "classic"

const title = document.querySelector(`h1`);



const buttons = document.querySelectorAll(`.btn`);

buttons.forEach(button =>{
button.addEventListener(`click`,event=>{

     key = event.target.innerHTML




switch (key){

    case `1A`:
        classicKey=`Abm`;
        color=`#56d9f9`;
        break;

        case `2A`:  
        classicKey= `Ebm`;
        color= `#dfca73`;
        break;

case `3A` :
    classicKey= `Bbm`;
    color= `#f2abe4`;
    break;

case `4A`:
    classicKey = `Fm`;
    color= `#01edca`;
    break;

case `5A`: 
classicKey = `Cm`
color= `#ff8894`;
break;

case `6A`:
    classicKey = `Gm`
    color= `#aef589`;
    break;


        case`7A` :
        classicKey= `Dm`
        color= `#becdfd`;
        break;

        case `7A` :
            classicKey= `Am`;
        color= `#ee82d9`;
        break;
        
        case `8A`:
            classicKey=`12A`
        color= `#55f0f0`;
        break;
        
        case `9A` :
            classicKey= `Em`
        color= `#fdbfa7`;
        break;
        
        case`10A` :
        classicKey= `Bm`
        color= `#9fb6ff`;
        break;
        
        case`11A` :
        classicKey= `F#m`;
        color=`#86f24f`;
        break;
        
        case`12A` :
        classicKey= `C#m`;
        color= `#fdaacc`;
        break;
        
        case`1B` :
        classicKey= `B`
        color= `#00ebeb`;
        break;
        
        case`2B` :
        classicKey= `F#`
        color= `#ffa07c`;
        break;
        
        case`3B` :
        classicKey= `Db`
        color= `#7df2aa`;
        break;
        
        case`4B` :
        classicKey = `Ab`
        color= `#ddb4fd`;
        break;
        
        case`5B` :
        classicKey= `Eb`;
        color= `#ff81b4`;
        break;
        
        case`6B`:
        classicKey = `Bb`;
        color= `#ff81b4`;
        break;
        
        case`7B`:
        classicKey = `F`;
        color=  `#e8daa1`;
        break;
        
        case`8B` :
        classicKey= `C`;
        color= `#ce8fff`;
        break;
        
        case`9B`:
        classicKey=`G`;
        color= `#56f1da`;
        break;
        
        case`10B`:
        classicKey= `D`;
        color= `#3cee81`;
        break;
        
        case `11B`:
            classicKey = `A`;
        color= `#fdafb7`;
        break;

        case `12B`:
            classicKey = `E`;
        color= `#fdafb7`;
        break;

        
        }


    title.innerHTML=classicKey;
    title.style.color=color;

      
})


})

