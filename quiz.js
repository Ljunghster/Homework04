var timeRemainingSec = 75;

var score = 0;
document.getElementById('score').innerHTML = score

document.getElementById('start').onclick = function () {

    document.getElementById('timerSec').innerHTML = timeRemainingSec;
    function count() {
        timeRemainingSec = timeRemainingSec-1;
        document.getElementById('timerSec').innerHTML = timeRemainingSec;
    }
    var interval = setInterval(count, 1000);

    document.getElementById('startPage').style.display = 'none'
    document.getElementById('quizQ1').style.display = 'block'
};

document.getElementById('answer1').onclick = function () {
    document.getElementById('quizQ1').style.display = 'none'
    document.getElementById('quizQ2').style.display = 'block'
    updateScore()
};

document.getElementById('answer2').onclick = function () {
    document.getElementById('quizQ2').style.display = 'none'
    document.getElementById('quizQ3').style.display = 'block'
    updateScore()
};

document.getElementById('answer3').onclick = function () {
    document.getElementById('quizQ3').style.display = 'none'
    document.getElementById('quizQ4').style.display = 'block'
    updateScore()
};

document.getElementById('answer4').onclick = function () {
    document.getElementById('quizQ4').style.display = 'none'
    document.getElementById('quizQ5').style.display = 'block'
    updateScore()
};

document.getElementById('answer5').onclick = function () {
    document.getElementById('quizQ5').style.display = 'none'
    document.getElementById('unicornEgg').style.display = 'block'
    updateScore()
};

document.getElementsByClassName('wrong').onclick = function () {
    document.getElementById('quizQ1').style.display = 'none'
    document.getElementById('quizQ2').style.display = 'block'
    updateScore0()
}

document.getElementsByClassName('wrong').onclick = function () {
    document.getElementById('quizQ2').style.display = 'none'
    document.getElementById('quizQ3').style.display = 'block'
    updateScore0()
}

document.getElementsByClassName('wrong').onclick = function () {
    document.getElementById('quizQ3').style.display = 'none'
    document.getElementById('quizQ4').style.display = 'block'
    updateScore0()
}

document.getElementsByClassName('wrong').onclick = function () {
    document.getElementById('quizQ4').style.display = 'none'
    document.getElementById('quizQ5').style.display = 'block'
    updateScore0()
}

document.getElementsByClassName('wrong').onclick = function () {
    document.getElementById('quizQ5').style.display = 'none'
    document.getElementById('startPage').style.display = 'block'
    updateScore0()
}



var wrongAnswers = document.getElementsByClassName('wrong');
var i;
for (i = 0; i < wrongAnswers.length; i++) {
    var answer = wrongAnswers[i]
    answer.onclick = function () {
        timeRemainingSec = timeRemainingSec - 5;
        document.getElementById('timerSec').innerHTML = timeRemainingSec;
    }
}
var updateScore0 = function () {
    score = score + 0;
    document.getElementById('scoreBox').innerHTML = score;
}
var updateScore = function ()    {
    score = score + 76.5;
    document.getElementById('scoreBox').innerHTML = score;
}

// var correctAnswers = document.getElementsByClassName('correct');
// for (i = 0; i < correctAnswers.length; i++) {
//     answer = correctAnswers[i]
//     answer.setAttribute('onclick', answer.getAttribute('onclick') + '; updateScore();')
// }


