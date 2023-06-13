
var camKey =""

var color = "black"

const title = document.querySelector(`h1`);



const buttons = document.querySelectorAll(`.btn`);

buttons.forEach(button =>{
button.addEventListener(`click`,event=>{

     key = event.target.innerHTML




switch (key){

    case `A`:
        camKey=`11B`;
        color=`#56d9f9`;
        break;

        case `Ab`:  
        camKey= `4B`;
        color= `#dfca73`;
        break;

case `Am` :
    camKey= `8A`;
    color= `#f2abe4`;
    break;

case `B`:
    camKey = `1B`;
    color= `#01edca`;
    break;

case `Bb`: 
camKey = `6B`
color= `#ff8894`;
break;

case `Bbm`:
    camKey = `3A`
    color= `#aef589`;
    break;


        case`Bm` :
        camKey= `10A`
        color= `#becdfd`;
        break;

        case `C` :
        camKey= `8B`;
        color= `#ee82d9`;
        break;
        
        case `C#m`:
        camKey=`12A`
        color= `#55f0f0`;
        break;
        
        case `Cm` :
        camKey= `5A`
        color= `#fdbfa7`;
        break;
        
        case`D` :
        camKey= `10B`
        color= `#9fb6ff`;
        break;
        
        case`Db` :
        camKey= `3B`;
        color=`#86f24f`;
        break;
        
        case`Dm` :
        camKey= `7A`;
        color= `#fdaacc`;
        break;
        
        case`E` :
        camKey= `12B`
        color= `#00ebeb`;
        break;
        
        case`Eb` :
        camKey= `5B`
        color= `#ffa07c`;
        break;
        
        case`Ebm` :
        camKey= `2A`
        color= `#7df2aa`;
        break;
        
        case`Em` :
        camKey = `9A`
        color= `#ddb4fd`;
        break;
        
        case`F` :
        camKey= `7B`;
        color= `#ff81b4`;
        break;
        
        case`F#m`:
        camKey = `11A`;
        color= `#ff81b4`;
        break;
        
        case`Fm`:
        camKey = `4A`;
        color=  `#e8daa1`;
        break;
        
        case`G` :
        camKey= `9B`;
        color= `#ce8fff`;
        break;
        
        case`G#m`:
        camKey=`1A`;
        color= `#56f1da`;
        break;
        
        case`Gb`:
        camKey= `2B`;
        color= `#3cee81`;
        break;
        
        case `Gm`:
        camKey = `6A`;
        color= `#fdafb7`;
        break;

}


    title.innerHTML=camKey;
    title.style.color=color;
})


})

