var timeRemainingSec = 75;

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
};

document.getElementById('answer2').onclick = function () {
    document.getElementById('quizQ2').style.display = 'none'
    document.getElementById('quizQ3').style.display = 'block'
};

document.getElementById('answer3').onclick = function () {
    document.getElementById('quizQ3').style.display = 'none'
    document.getElementById('quizQ4').style.display = 'block'
};

document.getElementById('answer4').onclick = function () {
    document.getElementById('quizQ4').style.display = 'none'
    document.getElementById('quizQ5').style.display = 'block'
};

document.getElementById('answer5').onclick = function () {
    document.getElementById('quizQ5').style.display = 'none'
    document.getElementById('unicornEgg').style.display = 'block'
};

var wrongAnswers = document.getElementsByClassName('wrong');
var i;

for (i = 0; i < wrongAnswers.length; i++) {
    answer = wrongAnswers[i]
    answer.onclick = function () {
        timeRemainingSec = timeRemainingSec - 5;
        document.getElementById('timerSec').innerHTML = timeRemainingSec;
    }
}
