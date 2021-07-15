const form = document.getElementById("form");
let score = 0;
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
    for (let i = 0; i < answers.length; i++) {

        let userInput = [...document.querySelectorAll(`div.main-box input`)];
        let [selectedAnswer] = userInput.slice(i*4, i*4+4).filter(e => e.checked)

        if (selectedAnswer && answers[i].correct === selectedAnswer.value) {
            score = score + 1;
        }
    }
    //Cuando el código llegue aqui (Ya se la puntación final) 
    //Mostrar en el div main footer debajpo del botón la puntuación total

    //Marcar en verde las respuestas correctas
    //En rojo las que ha seleccionado
    // En gris las demás
    // element.style.background = 'red'
    console.log(score)
})