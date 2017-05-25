/* global allQuestions */

$(() => {

  const audio1 = new Audio('sounds/gangstasParadise.m4a');
  const audio2 = new Audio('sounds/europa.m4a');
  const audio3 = new Audio('sounds/feelGood.m4a');
  const audio4 = new Audio('sounds/oneMoreTime.m4a');
  const audio5 = new Audio('sounds/ding.wav');
  const audio6 = new Audio('sounds/nope.mp4');

  const $radiosHere = $('input[type=radio]');

  const $labelsHere = $('label');
  const $questionHere =$('.questionHere');
  const $form = $('form');
  const $heading = $('#heading');
  const $button  = $('.play');
  const $next = $('#next');
  const $instructions = $('#instructions');
  const $gameOver = $('#game-over');
  const $gameBoard = $('#game-board');
  const $win = $('#win');
  const $placeImage = $('#placeImage');
  const $correctImage = $('#correctImage');
  const $timer = $('#timer');
  const $body = $('body');



  let questionSelected = null;
  let playerAnswer = null;
  let correctAnswer = null;
  let currentRound = 0;
  let timerId = null;


  audio1.play();


  //game timer that resets each time questions and aswers are generated

  function timer(minutes) {
    var seconds = 60;
    var mins = minutes;
    clearTimeout(timerId);

    function tick() {
      var currentMinutes = mins-1;
      seconds--;
      $timer.html(currentMinutes.toString() + ':' + (seconds < 10 ? '0' : '') + String(seconds));
      if( seconds > 0 ) {
        timerId = setTimeout(tick, 1000);
      } else {
        storage();
      }
    }
    tick();
  }


//reset game by displaying game-over div*

  function storage() {
    $body.removeClass('start');
    timer().cancel;
    $body.addClass('lose');
    $gameOver.removeClass('hidden');
    audio2.pause();
    audio4.play();
    $gameBoard.addClass('hidden');
    currentRound = 0;
  }

  function startGame() {
    $instructions.addClass('hidden');
    $body.addClass('start');
    $body.removeClass('win');
    $body.removeClass('lose');
    audio1.pause();
    audio4.pause();
    $gameOver.addClass('hidden');
    $win.addClass('hidden');
    audio3.pause();
    $gameBoard.removeClass('hidden');
    $heading.html('Question ' + (currentRound + 1)+ `/` + `10`);
    audio2.play();
    generateQuestionsAnswers();
  }

  //function generate questions & answers

  function generateQuestionsAnswers() {
    timer(1);
    $form.get(0).reset();
    var randomIndex = Math.floor(Math.random()*allQuestions.length);
    questionSelected = allQuestions.splice(randomIndex, 1)[0];
    correctAnswer = questionSelected.correctAnswer;

    $questionHere.html(questionSelected.question);

    $labelsHere.each(() => {
      // const $labelToName = $labelsHere.eq(index);
      questionSelected.answers.forEach((answers, i) => {
        $labelsHere.eq(i).html(answers);
        $radiosHere.eq(i).val(answers);
      });
    });
  }

//function submit answer

  function submitAnswer(e) {
    e.preventDefault();
    playerAnswer = $('input[type=radio]:checked').val();

    checkAnswer(questionSelected);
    console.log(`player answers ${playerAnswer} when the answer should be ${correctAnswer}`);
    if (playerAnswer === correctAnswer) {
      audio5.play();
    } else {
      audio6.play();
    }
  }

//function check answer

  function checkAnswer(questionSelected) {
    if (playerAnswer === correctAnswer) {
      $form.addClass('hidden');
      $placeImage.removeClass('hidden');
      $next.removeClass('hidden');
      $correctImage.append(`<img src=${questionSelected.correctImage}>`);
      $heading.html(questionSelected.description);
      currentRound = currentRound + 1;
    } else {
      storage();
    }
  }

  function nextQuestion() {
    $correctImage.empty();
    $placeImage.addClass('hidden');
    $next.addClass('hidden');
    $form.removeClass('hidden');
    $heading.html('Question ' + (currentRound + 1) + `/` + `10`);

    if (currentRound >= 10) {
      audio2.pause();
      audio3.play();
      timer().cancel;
      $body.removeClass('start');
      $body.addClass('win');
      $gameBoard.addClass('hidden');
      $heading.html('Congrats!');
      $win.removeClass('hidden');
      currentRound = 0;
    } else {
      generateQuestionsAnswers();
    }
  }

  $button.on('click', startGame);
  $form.on('submit', submitAnswer);
  $next.on('click', nextQuestion);

});
