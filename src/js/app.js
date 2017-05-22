$(() => {

  var allQuestions = [
    {
      question: 'Who did Olly see naked at Wimbledon?',
      answers: ['Andy Murray', 'Roger Federer', 'Maria Sharapova'],
      correctAnswer: 'Roger Federer',
      description: 'The perks of working at Wimbledon',
      correctImage: 'https://media.giphy.com/media/3o7bubGBOB852Gc2nC/giphy.gif'
    },
    {
      question: 'Who used to be a male gymnast?',
      answers: ['Nick', 'Simon', 'Tim'],
      correctAnswer: 'Nick',
      description: 'Nick had to wear a leotard (one would assume)',
      correctImage: 'https://media.giphy.com/media/NSodIu91KDWCs/giphy.gif?response_id=5922e7e112639c3d0cba1ce9'
    },
    {
      question: 'What candy advert did Mike audition for as a child?',
      answers: ['Cadbury', 'Milkybar', 'Yorkie'],
      correctAnswer: 'Milkybar',
      description: 'Delicious',
      correctImage: 'https://media.giphy.com/media/yA7jgYKYkTIIw/giphy.gif?response_id=5922e8dff51c8c2acc0a5dbc'
    },
    {
      question: 'Lauren\'s last name has what meaning in German?',
      answers: ['sword-bearer', 'shoehorn', 'crossbow'],
      correctAnswer: 'crossbow',
      description: 'Armbrüst means crossbow',
      correctImage: 'https://media.giphy.com/media/zzapImrO1YH2E/giphy.gif'
    },
    {
      question: 'Who got stuck in a lift and had to be rescued by the fire brigade?',
      answers: ['Mark', 'Nimesh', 'Jack'],
      correctAnswer: 'Nimesh',
      description: 'Nimesh was stuck for 4 hours',
      correctImage: 'https://media.giphy.com/media/eTcr7n3vNO9Jm/giphy.gif?response_id=5922eb3ee8f72065c6a55307'
    },
    {
      question: 'How did Clare get 2nd degree burns over both of her hands?',
      answers: ['Making a cup of tea', 'Trying new leg wax', 'Grabbing Chris Hemsworth'],
      correctAnswer: 'Trying new leg wax',
      description: 'Beauty is pain?',
      correctImage: 'https://media.giphy.com/media/l2SpOCdNB9WRmXc3K/giphy.gif?response_id=5922eda9968a6a568737f775'
    }
  ];

  const audio1 = new Audio('sounds/gangstasParadise.m4a');
  const audio2 = new Audio('sounds/europa.m4a');
  const audio3 = new Audio('sounds/feelGood.m4a');
  const audio4 = new Audio('sounds/oneMoreTime.m4a');
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

  let questionSelected = null;
  let playerAnswer = null;
  let correctAnswer = null;
  let currentRound = 0;

  audio1.play();

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
    $heading.html('Question ' + currentRound + `/` + `5`);
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
    console.log(playerAnswer);
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

  $next.on('click', ()=> {
    $correctImage.empty();
    $placeImage.addClass('hidden');
    $next.addClass('hidden');
    $form.removeClass('hidden');
    $heading.html('Question ' + currentRound + `/` + `5`);

    if (currentRound >= 5) {
      audio2.pause();
      audio3.play();
      $gameBoard.addClass('hidden');
      $win.removeClass('hidden');
      currentRound = 0;
    } else {
      generateQuestionsAnswers();
    }
  });

});
