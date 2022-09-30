let numOne = '';
let numTwo = '';
let operator = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
    if (operator){
        if (!numTwo){
            $result.value = '';
        }
        numTwo += event.target.textContent;
    }
    else{
        numOne += event.target.textContent;
    }
    $result.value += event.target.textContent;
    
    console.log(numOne, numTwo, operator);
}

const onClickOperator = (op) => () => {
    if(numOne){
        operator = op;
        $operator.value = op;
    }
    else{
        alert('숫자를 먼저 입력하세요');
    }
}

const printResult = () => {
    switch(operator){
        case '+':
            $result.value = parseInt(numOne) + parseInt(numTwo);
            numOne = parseInt($result.value);
            numTwo = 0;
            operator = '';
            return ;
        case '-':
            $result.value = parseInt(numOne) - parseInt(numTwo);
            numOne = parseInt($result.value);
            numTwo = 0;
            operator = '';
            return ;
        case '/':
            $result.value = parseInt(numOne) / parseInt(numTwo);
            numOne = parseInt($result.value);
            numTwo = 0;
            operator = '';
            return ;
        case '*':
            $result.value = parseInt(numOne) * parseInt(numTwo);
            numOne = parseInt($result.value);
            numTwo = 0;
            operator = '';
            return ;
    }
}

const clearFunction = () => {
    numOne = 0;
    numTwo = 0;
    operator = '';
    $result.value = '';
}

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);
document.querySelector("#plus").addEventListener("click", onClickOperator('+'));
document.querySelector("#minus").addEventListener("click", onClickOperator('-'));
document.querySelector("#divide").addEventListener("click", onClickOperator('/'));
document.querySelector("#multiply").addEventListener("click", onClickOperator('*'));
document.querySelector("#calculate").addEventListener("click", printResult);
document.querySelector("#clear").addEventListener("click", clearFunction);