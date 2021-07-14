const form = document.getElementById("form");
const answers = [
    {
        correct: 'madrid'
    },
    {
        correct: 'rungrado'
    },
    {
        correct: 'sheffield'
    },
    {
        correct: 'ronaldo'
    },
]
form.addEventListener('submit', (e) => {  //call back
    e.preventDefault()
    
    let userInput = [...document.querySelectorAll(`div.main-box:nth-child(${1}) input`)];
    let [selectedAnswer] = userInput.slice(0,4).filter(e => e.checked)
    console.log(selectedAnswer.value)
    if (selectedAnswer && answers[0].correct === selectedAnswer.value) {
        console.log('Pregunta Correcta!')
    }
    let userInput = [...document.querySelectorAll(`div.main-box:nth-child(${2}) input`)];
    let [selectedAnswer] = userInput.slice(5,8).filter(e => e.checked)
    console.log(selectedAnswer.value)
    if (selectedAnswer && answers[1].correct === selectedAnswer.value) {
        console.log('Pregunta Correcta!')
    }
    for (let i = 0; i < answers.length ; i++ ){
        let userInput = [...document.querySelectorAll(`div.main-box:nth-child(${i+1}) input`)];
    let [selectedAnswer] = userInput.slice(0,4).filter(e => e.checked)
    console.log(selectedAnswer.value)
    if (selectedAnswer && answers[i].correct === selectedAnswer.value) {
        console.log('Pregunta Correcta!')
    } 
    }
})