// Get pin 

function getPin(){
    const randomPin = Math.random()*10000 ; 
    const pin = (randomPin + '').split('.')[0];
    if(pin.length === 4 ) {
      return pin ; 
    }
    else {
       return getPin()
    }
}

// Handle generate pin 

 document.getElementById('generate-pin').addEventListener('click',function(){
      const pinInput = document.getElementById('pin');
      pinInput.value = getPin() ;
})

document.getElementById('digits-container').addEventListener('click',function(event){
        const digit = event.target.innerText ; 
        if(isNaN(digit)){
            if(digit === 'C'){
              const typedPin =  document.getElementById('typed-pin');
              typedPin.value = '' ;
            }
            if(digit === 'B'){
              
            }
        }
        else{
          const typedPin =  document.getElementById('typed-pin');
          typedPin.value = typedPin.value + digit ; 
        }
       
})
//handle submit button 

document.getElementById('submit-button').addEventListener('click',function(){
  const pin = document.getElementById('pin').value;
  const typedPin =  document.getElementById('typed-pin').value;
  if(pin === typedPin){
    displayPin('block','none');
  }
  else{
    displayPin('none','block');
  }
})

function displayPin(correctStatus , inCorrectStatus){
  const correct =   document.getElementById('correct-pin');
  correct.style.display = correctStatus;
  const incorrect =   document.getElementById('incorrect-pin');
  incorrect.style.display = inCorrectStatus;
}