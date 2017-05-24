$(() => {

  const audio1 = new Audio('sounds/gangstasParadise.m4a');
  const audio2 = new Audio('sounds/europa.m4a');
  const audio3 = new Audio('sounds/feelGood.m4a');
  const audio4 = new Audio('sounds/oneMoreTime.m4a');
  const audio5 = new Audio('sounds/ding.wav');
  const audio6 = new Audio('sounds/nope.mp3');
  const $submit = $('#submit');
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

  // const $timer = $('#timer');
  // const countdownTimer = setInterval('secondsPassed()', 1000);
  // let seconds = 60;
  // const $imageChange = $('#imageChange');
  // const $body = $('body');


  let questionSelected = null;
  let playerAnswer = null;
  let correctAnswer = null;
  let currentRound = 0;


  audio1.play();
  // $imageChange.on('click', () => {
  //   $body.css('background-image', 'url(https://media.giphy.com/media/xUPGcfzaX9hFFQJYre/giphy.gif?response_id=592435a54e8f2028f1b2e976)');
  // });

  // function secondsPassed() {
  //   var minutes = Math.round((seconds - 30)/60);
  //   var remainingSeconds = seconds % 60;
  //   if (remainingSeconds < 10) {
  //     remainingSeconds = '0' + remainingSeconds;
  //   }
  //   $timer.html(minutes + ':' + remainingSeconds);
  //   if (seconds === 0) {
  //     clearInterval(countdownTimer);
  //     $timer.html('Out of time!');
  //   } else {
  //     seconds--;
  //   }
  // }


//reset game by displaying game-over div*
  function storage() {
    $gameOver.removeClass('hidden');
    audio2.pause();
    audio4.play();
    $gameBoard.addClass('hidden');
    currentRound = 0;
  }

  function startGame() {
    $instructions.addClass('hidden');
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
    $form.get(0).reset();
    var randomIndex = Math.floor(Math.random()*allQuestions.length);
    questionSelected = allQuestions.splice(randomIndex, 1)[0];
    correctAnswer = questionSelected.correctAnswer;
    console.log('question selected', questionSelected);

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

  $button.on('click', startGame);
  $form.on('submit', submitAnswer);
  $submit.on('click', ()=> {
    if (correctAnswer) {
      audio5.play();
    } else {
      audio6.play();
    }
  });

  $next.on('click', ()=> {
    $correctImage.empty();
    $placeImage.addClass('hidden');
    $next.addClass('hidden');
    $form.removeClass('hidden');
    $heading.html('Question ' + (currentRound + 1) + `/` + `10`);

    if (currentRound >= 10) {
      audio2.pause();
      audio3.play();
      $gameBoard.addClass('hidden');
      $heading.html('Congrats!');
      $win.removeClass('hidden');
      currentRound = 0;
    } else {
      generateQuestionsAnswers();
    }
  });

});
