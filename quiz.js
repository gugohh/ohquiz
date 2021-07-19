const answersList = { one: 'madrid',two: 'rungrado',three: 'sheffield',four: 'ronaldo'}
let form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let nameUser = event.target.elements.name.value;
    let oldUser = event.target.elements.olduser.value;
    let responseOne = event.target.elements['first-quiz'].value;
    let responseTwo = event.target.elements['second-quiz'].value;
    let responseThree = event.target.elements['third-quiz'].value;
    let responseFour = event.target.elements['fourth-quiz'].value;
    //******
    let labelsFirstQuest = document.querySelectorAll('section:nth-child(2) > div > div > label');
    let labelsSecondQuest = document.querySelectorAll('section:nth-child(3) > div > div > label');
    let labelsThreeQuest = document.querySelectorAll('section:nth-child(4) > div > div > label');
    let labelsFourQuest = document.querySelectorAll('section:nth-child(5) > div > div > label');
    //*******
    let counter = 0;
    //***first
    if (responseOne == answersList.one) {
        labelsFirstQuest[3].style.border = 'green 3px solid';
        counter++;
    } else if (responseOne == 'milan') {
        labelsFirstQuest[1].style.border = 'blue 2px solid inset';
    } else if (responseOne == 'juventus') {
        labelsFirstQuest[2].style.border = 'blue 2px solid inset';
    } else if (responseOne == 'barca') {
        labelsFirstQuest[0].style.border = 'blue 2px solid inset';
    }
    //*****Second
    if (responseTwo == answersList.two) {
        labelsSecondQuest[1].style.border = 'green 3px solid';
        counter++;
    } else if (responseTwo == 'maracana') {
        labelsSecondQuest[0].style.border = 'blue 2px solid inset';
    } else if (responseTwo == 'mestalla') {
        labelsSecondQuest[2].style.border = 'blue 2px solid inset';
    } else if (responseTwo == 'anfild') {
        labelsSecondQuest[3].style.border = 'blue 2px solidinset';
    }
    //*****Third 
    if (responseThree == answersList.three) {
        labelsThreeQuest[2].style.border = 'green 3px solid ';
        counter++;
    } else if (responseThree == 'roma') {
        labelsThreeQuest[0].style.border = 'blue 2px solid inset';
    } else if (responseThree == 'porto') {
        labelsThreeQuest[1].style.border = 'blue 2px solid inset';
    } else if (responseThree == 'arsenal') {
        labelsThreeQuest[3].style.border = 'blue 2px solid inset';
    }
    //*****Fourth
    if (responseFour == answersList.four) {
        labelsFourQuest[3].style.border = 'green 3px solid ';
        counter++;
    } else if (responseFour == 'messi') {
        labelsFourQuest[1].style.border = 'blue 2px solid inset';
    } else if (responseFour == 'maldini') {
        labelsFourQuest[2].style.border = 'blue 2px solid inset';
    } else if (responseFour == 'zidane') {
        labelsFourQuest[0].style.border = 'blue 2px solid inset';
    }
    let fullList = document.querySelector('#form > div > section:nth-child(6) > div')
    if (responseOne == '' || responseTwo == '' || responseThree == '' || responseFour == '' || nameUser == '' || oldUser == '') {
        alert('upssss');
    } else if (responseOne != answersList.one || responseTwo != answersList.two || responseThree != answersList.three || responseFour != answersList.four) {
        fullList.innerHTML += `<p class="counter">${nameUser}, ${oldUser}</p><p class="counter"> Aciertos: ${counter}/4</p>`
        alert('ERRRRR')
    } else {
        fullList.innerHTML += `<p class="counter">${nameUser}, ${oldUser}</p><p class="counter"> Aciertos: ${counter}/4</p>`
        alert('okkkk')
    };
});



















