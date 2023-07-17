var string = "";
var result = document.querySelector('.txt')
let allButtons = document.querySelectorAll('.num')

Array.from(allButtons).forEach((button) => {
    button.addEventListener('click', function (e) {
        if (e.target.innerHTML == 'AC') {
            string = '';
        }
        else if (e.target.innerHTML == '=') {
            string = eval(string);
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
        }
        else if ((e.target.innerHTML == '/' || e.target.innerHTML == '*' || e.target.innerHTML == '+') && string === '') {
            string = '';
        }
        else {
            string += e.target.innerHTML;
        }
        console.log(string);
        result.value = string;
    })
})