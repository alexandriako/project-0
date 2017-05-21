$(() => {

  var allQuestions = [
    {
      question: 'What is my favorite movie?',
      answers: ['Star Wars', 'LOTR', 'Alien'],
      correctAnswer: 'Alien'
    },
    {
      question: 'What is my favorite color?',
      answers: ['Blue', 'Pink', 'Black'],
      correctAnswer: 'Black'
    },
    {
      question: 'How old am I?',
      answers: ['10', '53', '22'],
      correctAnswer: '22'
    }
  ];

  const $radiosHere = $('input[type=radio]');
  const $questionHere = $('.questionHere');
  const $labelsHere = $('label');
  const $form = $('form');
  // const $score = $('.score');
  let playerAnswer = null;
  let correctAnswer = null;


  //
  // function currentScores() {
  // currentScore = score;
  // $score.text(currentScore);
  // }
  // startScore();
  // score = 0;
  // $score.text(score);

  // function startGame() {
  //   $instructions.addClass('hidden');
  //   $gameOver.addClass('hidden');
  //   $gameBoard.removeClass('hidden');
  //   $scrambledWord.text(shuffleWord(words[currentRound]));
  //
  //   highScores();
  //   score = 0;
  //   $score.text(score);
  // }

  //function generate questions & answers
  function generateQuestionsAnswers() {
    const questionSelected = allQuestions[Math.floor(Math.random()*allQuestions.length)];
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
    console.log(playerAnswer);
    checkAnswer();
  }

//function check answer

  function checkAnswer() {
    if (playerAnswer === correctAnswer) {
      alert('Correct!');
      // score += 1;
      // $score.html(score);
      generateQuestionsAnswers();
    } else {
      alert('Too bad...');
      location.reload();
    }
  }

  $form.on('submit', submitAnswer);

});
