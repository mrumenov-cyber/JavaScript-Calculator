//save a reference to our display dom element
let display = document.getElementById('display');

//To gather the buttons we can select them by document.getElementsByClassName('button'), 
//but this function gives back a NodeCollection instead of an array so we have to convert it to an array using Array.from().
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
    //we'll use e.target.innerText, which will simply give back the label of the button that was clicked.
        switch(e.target.innerText){
    //In the first case, when the user hits the "C" button we'd like to clear the display. 
    //To do that we can access our display reference and set the innerText to an empty string.
            case 'C':
                display.innerText = '';
                break;
    //For the equal button we'll use javascript built in eval function.
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
    //If the user hits the back arrow we need to remove the last character from the display's innerText. To do that we'll use the String.slice() method
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
        default:
            display.innerText += e.target.innerText;
        }
    });
});