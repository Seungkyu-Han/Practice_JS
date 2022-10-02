const $input = document.querySelector('#input');
const $check = document.querySelector('#check');
const $logs = document.querySelector('#logs');

let numbers = [];

for (let i = 0; i < 4; i++){
    while (numbers.length === i){
        let tmp_new = Math.floor(Math.random() * 9) + 1;
        if (numbers.indexOf(tmp_new) == -1) numbers.push(tmp_new);
    }
}

console.log(numbers);

const check_click_function = (event) => {
    event.preventDefault();
    const answer = $input.value;
    if (answer.length !== 4 || new Set(answer).size != 4){
        alert('잘못된 숫자 입력입니다.');
        return;
    }
    if (numbers.join('') === answer){
        $logs.textContent = "홈런!";
    }
    else{
        let ball = 0;
        let strike = 0;

        for(let i = 0; i < 4; i++){
            let num_index = numbers.indexOf(parseInt(answer[i]));
            console.log(num_index, i);
            if (num_index === -1) continue;
            if (num_index === i) strike++;
            else ball++;
        }
        $logs.append(`strike : ${strike}, ball: ${ball}`, document.createElement('br'));
    }
}


$check.addEventListener("click", check_click_function);
