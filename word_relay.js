const number = parseInt(prompt("몇 명이 참가하나요?"));
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let word;
let newWord;

const onClickButton = () => {
    if (newWord.length == 3 && (!word || word[2] == newWord[0])){
        word = newWord;
        $word.textContent = word;
        $input.value = "";
        $input.focus();
        const order = Number($order.textContent);
        $order.textContent = (order % 3) + 1;
    }
    else{
        alert('땡');
    }
}

const onInput = (event) => {
    newWord = event.target.value;
}

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);

