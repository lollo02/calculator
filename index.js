const display= document.getElementById('display');

function AppendToDisplay(input) {
    display.value += input;
}

function ClearDisplay() {
    display.value = '';
}

function Calculate() {
    try{  
              display.value = eval(display.value);
    }
    catch(err){
        display.value = 'Error';
        setTimeout(function() {
            display.value = '';
        }, 1000);
    }
}