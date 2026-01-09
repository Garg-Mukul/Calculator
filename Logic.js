const inputArea = document.getElementById('textArea');
const buttons = document.querySelectorAll('.clickButton');

let currentInput = "";
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText;
        if(buttonText === '='){
            try{
                currentInput = eval(currentInput);
            }
            catch{
                currentInput = 'error';
            }
        }
        else if(buttonText === 'AC'){
            currentInput = '';
        }
        else if(buttonText === 'BackSpace'){
            currentInput = currentInput.slice(0,-1);
        }
        else{
            currentInput = currentInput+buttonText;
        }
        inputArea.value = currentInput;
    });
})