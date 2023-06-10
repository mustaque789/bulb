const button=document.querySelector('#btn');
const bulb= document.querySelector('#bulbId');

button.addEventListener('click', function(){
    if(bulb.src.match('on')){
        bulb.src="bulb-off.gif";
        button.innerHTML="Turn ON";
    }
    else{

        bulb.src="bulb-on.gif";
        button.innerHTML="Turn OFF";
    }
    



})