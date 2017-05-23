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
    },
    {
      question: 'How many stitches has Clare had in total from freak accidents?',
      answers: ['12', '35', '51'],
      correctAnswer: '51',
      description: 'How are you still alive?!?!?',
      correctImage: 'https://media.giphy.com/media/LLhEaNmf4hwM8/giphy.gif?response_id=592405093b58b37ed93acb42'
    },
    {
      question: 'Who did a 100km trek through the Sahara 6 weeks ago?',
      answers: ['Clare', 'Max', 'Angela'],
      correctAnswer: 'Clare',
      description: 'Like a boss',
      correctImage: 'https://media.giphy.com/media/qY3ZfwNDNfL9u/giphy.gif?response_id=5924058fcc217fb0b4b02629'
    },
    {
      question: 'Alex C. learnt Hindi for 3 years. What is the one thing she remembers how to say in the language?',
      answers: ['Do you have any toilet paper?', 'Please do not touch my cat.', 'Where is the the hospital?'],
      correctAnswer: 'Do you have any toilet paper?',
      description: 'Pretty important to know',
      correctImage: 'https://media.giphy.com/media/143yVxZmpEPwYM/giphy.gif?response_id=592405d166da5e3936fe3a16'
    },
    {
      question: 'Which celebrity did Angela spill coffee all over?',
      answers: ['Bob Saget', 'Kevin Spacey', 'Bill Nighy'],
      correctAnswer: 'Kevin Spacey',
      description: 'Unbelievable',
      correctImage: 'https://media.giphy.com/media/xtc15Nu4ODSQE/giphy.gif?response_id=5924061cd5d303d01515d880'
    },
    {
      question: 'What did Simon sell at a club for £10?',
      answers: ['His socks', 'Himself', 'His t-shirt'],
      correctAnswer: 'His socks',
      description: 'Simon really needed £10 or that guy really needed socks?',
      correctImage: 'https://media.giphy.com/media/11nuvoZGgSH3Ne/giphy.gif?response_id=5924063b4ed4eb79b530243a'
    },
    {
      question: 'Where did Lauren used to live?',
      answers: ['Pumpkin farm', 'Christmas tree farm', 'Not on a farm'],
      correctAnswer: 'Christmas tree farm',
      description: 'Following her German roots!',
      correctImage: 'https://media.giphy.com/media/9MFnxuCSMORVK/giphy.gif'
    },
    {
      question: 'Tim has 20 of these.',
      answers: ['Teeth fillings', 'Stitches', 'Noninvassive surgeries'],
      correctAnswer: 'Teeth fillings',
      description: 'Tim used to eat icing sugar as a kid and has over 20 fillings',
      correctImage: 'https://media.giphy.com/media/4aXkoYHpZWInu/giphy.gif?response_id=592406c9551a02908919c43a'
    },
    {
      question: 'How many times did Tolani have to take her driving test before passing?',
      answers: ['2', '13', '8'],
      correctAnswer: '8',
      description: 'That is why she drives everywhere now',
      correctImage: 'https://media.giphy.com/media/g0MQ2Pyi5Z3s4/giphy.gif?response_id=5924071fbdf4f9c124fedf62'
    },
    {
      question: 'Who fell into a hole in Japan and had to be rescued?',
      answers: ['Alex O.', 'James H.', 'Nick'],
      correctAnswer: 'Nick',
      description: 'Nick was skiing in Hokkaido and had to be rescued by emergency services',
      correctImage: 'https://media.giphy.com/media/O2zL3TVRhZuGk/giphy.gif?response_id=592407e02c7e04539de19635'
    },
    {
      question: 'What did Mike fracture when he was 4 years old?',
      answers: ['Skull', 'Shinbone', 'Clavicle'],
      correctAnswer: 'Skull',
      description: 'Mike was competing with his brother to see who could jump off of the highest stair in their house and he cracked his skull',
      correctImage: 'https://media.giphy.com/media/3d9tAuFXw9xok/giphy.gif?response_id=5924129d15ce5d885b42b716'
    },
    {
      question: 'What is the name of Alex Cs cat?',
      answers: ['Meatloaf', 'Beans', 'Sausage'],
      correctAnswer: 'Sausage',
      description: 'He is quite sausagey',
      correctImage: 'images/cat.JPG'
    },
    {
      question: 'What did Jakub almost shoot with a bow and arrow?',
      answers: ['His sister', 'An old lady', 'A forest ranger'],
      correctAnswer: 'An old lady',
      description: 'Gotta put grannies in their place',
      correctImage: 'https://media.giphy.com/media/3o7btXe9dz6jxVBbby/giphy.gif'
    },
    {
      question: 'Who was bullied by his own cats?',
      answers: ['James H.', 'Mike 2.0', 'Jakub'],
      correctAnswer: 'Jakub',
      description: 'Like furry ninjas with claws',
      correctImage: 'https://media.giphy.com/media/3o85xq9lCbzK0sFHoc/giphy.gif?response_id=592408b015e701cd46a993d1'
    },
    {
      question: 'Who had pneumonia 3 times?',
      answers: ['Clare', 'Lauren', 'Tolani'],
      correctAnswer: 'Tolani',
      description: 'A little Swanson can make you feel better',
      correctImage: 'https://media.giphy.com/media/LmQzOKKcATm4E/giphy.gif?response_id=5924090201fa18781ff32c51'
    },
    {
      question: 'What is the name of Max\'s daughter?',
      answers: ['Amelia', 'Alicia', 'Banana'],
      correctAnswer: 'Amelia',
      description: 'Daughters are the best',
      correctImage: 'https://media.giphy.com/media/Qc7a6N5aGLyo/giphy.gif?response_id=5924097e2e4f2c7005330cb8'
    },
    {
      question: 'What did Max come in 11th for?',
      answers: ['Triathlon', 'Miss Universe', 'Fantasy Football League'],
      correctAnswer: 'Triathlon',
      description: 'He came in 11th for the UK middle distance triathlon!',
      correctImage: 'https://media.giphy.com/media/6Z3D5t31ZdoNW/giphy.gif?response_id=59240a4ef3d3227ccb5a656d'
    },
    {
      question: 'What did Alex O have to eat in Japan?',
      answers: ['Raw horse', 'Cow tongue', 'All of the above'],
      correctAnswer: 'All of the above',
      description: 'Raw horse is considered a delicacy in Japan and cow tongue is often consumed drinking alcohol',
      correctImage: 'https://media.giphy.com/media/h8MXok4iLRtmM/giphy.gif?response_id=59241323e5b0a08c0deb631f'
    },
    {
      question: 'What was Alex O\'s nickname as a baby?',
      answers: ['The blob', 'Oompa loompa', 'Dumpling'],
      correctAnswer: 'The blob',
      description: 'Because she was so chubby and only slept, her family called her the blob',
      correctImage: 'images/kiddo.JPG'
    },
    {
      question: 'What is Alex O\'s favorite bird?',
      answers: ['The eagle', 'The pigeon', 'The crane'],
      correctAnswer: 'The pigeon',
      description: 'Even though everyone hates them and kicks them, they keep doing their thing',
      correctImage: 'https://media.giphy.com/media/b4HaKUfzuCjrq/giphy.gif?response_id=592414e4ea0c973d928ab309'
    },
    {
      question: 'What did Ollie hate as a kid, but make himself eat untile he liked them?',
      answers: ['Peas', 'Licorice', 'Eggs'],
      correctAnswer: 'Eggs',
      description: 'Chicken embryos, yum',
      correctImage: 'https://media.giphy.com/media/DiyOoZkzxawne/giphy.gif?response_id=592415e0d06669786b5aca28'
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
    $heading.html('Question ' + (currentRound + 1)+ `/` + `5`);
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
    $heading.html('Question ' + (currentRound + 1) + `/` + `5`);

    if (currentRound >= 5) {
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
