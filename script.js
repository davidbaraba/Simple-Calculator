function createCalculator(){
    let cancel = document.getElementById('cancel');
    let equal = document.getElementById('equal');
    let board = document.getElementById('board');

    let newOperation = false;

    let numbers = document.querySelectorAll('.numbers');
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function(){
            if(newOperation){
                board.innerHTML = '';
                newOperation = false;
            }
            board.innerText += this.innerHTML;
        })
    }

    let operators = document.querySelectorAll('.operators');
    let operatorValues = ['+', '-', '*', '/'];

    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function(){
            if(newOperation){
                board.innerHTML = '0';
                newOperation = false;
            }
            let lastSymbol = board.innerText.substr(-1);
            if(operatorValues.indexOf(lastSymbol) > -1) {
                board.innerText = board.innerText.substr(0, board.innerText.length -1);
            };
            if(board.innerText === ""){
                board.innerText += (0);
            }
            board.innerText += this.innerHTML;
        })
    }

    equal.addEventListener('click', function(){   
        if(board.innerText === ""){
            board.innerText = '';
        }else{
            let boardText = board.innerText;
            let show = eval(boardText);
            board.innerText = show;
            newOperation = true;
        }
    })

    cancel.addEventListener('click', function(){
        board.innerText = board.innerText.slice(0,-1);
    })
    cancel.addEventListener('dblclick', function(){
        board.innerText = '';
    })
}
createCalculator();