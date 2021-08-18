function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 and calling again', pin)
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener
('click', function(event){
    const number = event.target.innerText;
    const pressedNumber = document.getElementById('input-field');
    if(isNaN(number)){
        if(number == 'C'){
            pressedNumber.value = '';
        }
    }
    else{
        const prevNumber = pressedNumber.value;
        const newDisplay = prevNumber + number
        pressedNumber.value = newDisplay;
    }
})

function varifyPin(){
   const pin = document.getElementById('display-pin').value;
   const typedNumber = document.getElementById('input-field').value;
   const successMessage = document.getElementById('notify-success');
   const failError = document.getElementById('notify-fail');
   if(pin == typedNumber){
       
       successMessage.style.display = 'block';
       failError.style.display = 'none';
   }
   else{
    failError.style.display = 'block';
    successMessage.style.display = 'none';
   }
}