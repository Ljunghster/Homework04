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
    updateScore()
    if (score = 382.5) {
        document.getElementById('unicornEgg').style.display = 'block' 
    } else {
        document.getElementById('startPage').style.display = 'block'
    }
};

handleWrongAnswer('wrong1', 'quizQ1', 'quizQ2');
handleWrongAnswer('wrong2', 'quizQ2', 'quizQ3');
handleWrongAnswer('wrong3', 'quizQ3', 'quizQ4');
handleWrongAnswer('wrong4', 'quizQ4', 'quizQ5');
handleWrongAnswer('wrong5', 'quizQ5', 'startPage');

var handleWrongAnswer = function (className, hideElementID, revealElementID) {


    var wrongAnswers = document.getElementsByClassName(className);
    var i;
    for (i = 0; i < wrongAnswers.length; i++) {
        var answer = wrongAnswers[i]
        answer.onclick = function () {
            timeRemainingSec = timeRemainingSec - 5;
            document.getElementById('timerSec').innerHTML = timeRemainingSec;
            
            document.getElementById(hideElementID).style.display = 'none'
            document.getElementById(revealElementID).style.display = 'block'
        }
    }
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


