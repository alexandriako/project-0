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
    description: 'Nick had to wear a leotard not a T-rex costume',
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
    description: 'Ouch',
    correctImage: 'https://media.giphy.com/media/l2SpOCdNB9WRmXc3K/giphy.gif?response_id=5922eda9968a6a568737f775'
  },
  {
    question: 'How many stitches has Clare had in total from freak accidents?',
    answers: ['12', '35', '51'],
    correctAnswer: '51',
    description: 'How are you still alive?!?!?',
    correctImage: 'https://media.giphy.com/media/nSktT8BeXm1Lq/giphy.gif?response_id=5925479ee66d61d0feb70bba'
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
    description: 'There\'s an inappropriate joke in there somewhere...',
    correctImage: 'https://media.giphy.com/media/l1IYeSOfwBYPu8FHO/giphy.gif?response_id=592545f3901041f157b948c4'
  },
  {
    question: 'Which celebrity did Angela spill coffee all over?',
    answers: ['Bob Saget', 'Kevin Spacey', 'Bill Nighy'],
    correctAnswer: 'Kevin Spacey',
    description: 'She accidentally bumped into him at Starbucks',
    correctImage: 'https://media.giphy.com/media/xtc15Nu4ODSQE/giphy.gif?response_id=5924061cd5d303d01515d880'
  },
  {
    question: 'What did Simon sell at a club for £10?',
    answers: ['His socks', 'Himself', 'His t-shirt'],
    correctAnswer: 'His socks',
    description: 'Simon really needed £10 or that guy really needed socks',
    correctImage: 'https://media.giphy.com/media/11nuvoZGgSH3Ne/giphy.gif?response_id=5924063b4ed4eb79b530243a'
  },
  {
    question: 'Where did Lauren used to live?',
    answers: ['Pumpkin farm', 'Christmas tree farm', 'Not on a farm'],
    correctAnswer: 'Christmas tree farm',
    description: 'Following her German roots',
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
    correctImage: 'https://media.giphy.com/media/T1R9jNhpkEfBK/giphy.gif?response_id=59244b2bb351951ae16ea5db'
  },
  {
    question: 'What did Mike fracture when he was 4 years old?',
    answers: ['Skull', 'Shinbone', 'Clavicle'],
    correctAnswer: 'Skull',
    description: 'Mike was competing with his brother to see who could jump off of the highest stair in their house',
    correctImage: 'https://media.giphy.com/media/l0NwuvFERvrjszjd6/giphy.gif?response_id=5925619d9e207a52bade0926'
  },
  {
    question: 'What is the name of Alex C.\'s cat?',
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
    description: 'Damn girl',
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
    question: 'What did Alex O. have to eat in Japan?',
    answers: ['Raw horse', 'Cow tongue', 'All of the above'],
    correctAnswer: 'All of the above',
    description: 'It was weird',
    correctImage: 'https://media.giphy.com/media/3o7TKPmG5ekwskn2Vy/giphy.gif?response_id=592548d125097400ca0d7949'
  },
  {
    question: 'What was Alex O.\'s nickname as a baby?',
    answers: ['The blob', 'Oompa loompa', 'Dumpling'],
    correctAnswer: 'The blob',
    description: 'Because she was so chubby and only slept, her family called her the blob',
    correctImage: 'images/kiddo.JPG'
  },
  {
    question: 'What is Alex O.\'s favorite bird?',
    answers: ['The eagle', 'The pigeon', 'The crane'],
    correctAnswer: 'The pigeon',
    description: 'Even though everyone hates them, they keep on doing their own thing',
    correctImage: 'https://media.giphy.com/media/b4HaKUfzuCjrq/giphy.gif?response_id=592414e4ea0c973d928ab309'
  },
  {
    question: 'What did Ollie hate as a kid, but make himself eat until he liked it?',
    answers: ['Peas', 'Licorice', 'Eggs'],
    correctAnswer: 'Eggs',
    description: 'Eggs for days',
    correctImage: 'https://media.giphy.com/media/DiyOoZkzxawne/giphy.gif?response_id=592415e0d06669786b5aca28'
  }, //change text
  {
    question: 'What equestrian sport did Simon used to play?',
    answers: ['Polocrosse', 'Dressage', 'Vaulting'],
    correctAnswer: 'Polocrosse',
    description: 'Polocrosse is lacrosse played on horseback',
    correctImage: 'images/polocrosse.jpg'
  },
  {
    question: 'What did Jason once do to his cousin?',
    answers: ['Hit him with his car', 'Give him a heart attack', 'Accidentally sleep with his girlfriend'],
    correctAnswer: 'Give him a heart attack',
    description: 'Jason dressed up in a bin bag and scared his cousin with a knife. They had to call an ambulance because he had heart palpitations',
    correctImage: 'https://media.giphy.com/media/2gG2xiMTtFwsg/giphy.gif?response_id=5925482de4ed426239867034'
  },
  {
    question: 'Max has climbed how many of the tallest mountains in the world?',
    answers: ['None, nobody got time for that', '3', '5'],
    correctAnswer: '5',
    description: 'He has climbed the highest mountains on 5 continents: Mount Elbrus, Mount Kilimanjaro, Mount Denali, Mount Aconcagua, & Mount Kosciuszko',
    correctImage: 'https://media.giphy.com/media/fXgKfzV4aaHQI/giphy.gif?response_id=59244c936c60b97f7190b700'
  },
  {
    question: 'Jason builds...?',
    answers: ['Gundam figurines', 'PCs', 'Beautiful friendships'],
    correctAnswer: 'PCs',
    description: 'He started building them at age 18',
    correctImage: 'https://media.giphy.com/media/HteV6g0QTNxp6/giphy.gif?response_id=59244e8de544f70c69e84fd1'
  },
  {
    question: 'Alex O. can say what phrase in 5 languages?',
    answers: ['Kiss my ass', 'Where is the toilet', 'F*** off'],
    correctAnswer: 'Kiss my ass',
    description: 'She can say it in Japanese, Spanish, German, Gaelic, and English',
    correctImage: ' https://media.giphy.com/media/qpbYnCa4375F6/giphy.gif'
  },
  {
    question: 'Angela came 2nd in what type of competition?',
    answers: ['Ethnic cuisine competition', 'Freestyle dance competition', 'Beautiful baby competition'],
    correctAnswer: 'Beautiful baby competition',
    description: 'She was a very adorable baby',
    correctImage: 'images/angelaBaby.jpeg'
  },
  {
    question: 'Jason dressed up as what to sneak into a football match?',
    answers: ['Safety steward', 'Japanese business man', 'Photographer'],
    correctAnswer: 'Safety steward',
    description: 'A master of many disguises',
    correctImage: 'https://media.giphy.com/media/134DVXcD94sOWI/giphy.gif?response_id=59244f08289f3e47dedb8edf'
  },
  {
    question: 'As a major Arnold Schwarzenegger fanatic, what name would have Ollie\'s father given him if he had naming rights?',
    answers: ['T-800', 'Conan', 'Dutch'],
    correctAnswer: 'Conan',
    description: 'Don\'t think his mum was up for it',
    correctImage: 'https://media.giphy.com/media/AmLKFtTudhUKQ/giphy.gif?response_id=59244f6f4f381f3e56198907'
  },
  {
    question: 'Alex C. hates what type of ingredient the most?',
    answers: ['Onions', 'Garlic', 'Chilies'],
    correctAnswer: 'Onions',
    description: 'She hates it with the fiery passion of 1,000 suns',
    correctImage: 'https://media.giphy.com/media/9FlAbDWF95S3C/giphy.gif?response_id=59244fed58a034104798322d'
  },
  {
    question: 'What is Angel\'s cat\'s name?',
    answers: ['Grace Kelly', 'Lara Croft', 'Jackie Stallone'],
    correctAnswer: 'Jackie Stallone',
    description: 'The both have major sass factor',
    correctImage: 'https://media.giphy.com/media/AsZ2RJVN3GEN2/giphy.gif?response_id=592549d473c7cabfcb3c415d'
  },
  {
    question: 'Who used to be an amateur go kart racer?',
    answers: ['Nimesh', 'Simon', 'James C.'],
    correctAnswer: 'Nimesh',
    description: 'Going fast and furious',
    correctImage: 'https://media.giphy.com/media/HYT1M1YCPI9KE/giphy.gif?response_id=592451aa71723dc46994ae43'
  },
  {
    question: 'Nimesh has what type of license?',
    answers: ['License to kill', 'Pilot license', 'Sailing license'],
    correctAnswer: 'Pilot license',
    description: 'He has had his license since 2008',
    correctImage: 'https://media.giphy.com/media/piz2KLnypv8pW/giphy.gif?response_id=59254b51efbb40db0e6151b8'
  },
  {
    question: 'What "nick"name (get it) does Nick have?',
    answers: ['Ham', 'Muffin', 'Pickle'],
    correctAnswer: 'Pickle',
    description: 'His mother’s nickname for him is pickle ("Nickelous Pickelous don\'t be so ridiculous")',
    correctImage: 'https://media.giphy.com/media/5q9uPPzOPsQAE/giphy.gif?response_id=5924527b9d8877c54365076b'
  },
  {
    question: 'What is Lauren\'s favorite number?',
    answers: ['9', '66', '3'],
    correctAnswer: '9',
    description: 'We do not know why',
    correctImage: 'https://media.giphy.com/media/3oKIP7wjzdzjbjLugg/giphy.gif?response_id=59245298b77861487ed64026'
  },
  {
    question: 'What club does Tim belong to in Victoria?',
    answers: ['Swingers club', 'Snookers club', 'Poker club'],
    correctAnswer: 'Snookers club',
    description: 'Requires much flexibility',
    correctImage: 'https://media.giphy.com/media/cSgqRK3mWckPm/giphy.gif?response_id=59245311921db5f0982d75bf'
  },
  {
    question: 'Who ran the Dublin marathon last year?',
    answers: ['James C.', 'Tim', 'Ollie'],
    correctAnswer: 'Tim',
    description: 'The marathon is 42.2 km and held every October',
    correctImage: 'https://media.giphy.com/media/AHe4ZsFUVh26Y/giphy.gif?response_id=5924536b5d6fee9088cc47ad'
  },
  {
    question: 'What instrument did Mike 1.0 play for his Darnkenss Tribute band?',
    answers: ['Bass', 'Tamborine', 'Guitar'],
    correctAnswer: 'Bass',
    description: 'It was wicked',
    correctImage: 'https://media.giphy.com/media/oUHK5Ga9Bqj7y/giphy.gif?response_id=592453e7fcb88fd25741c10f'
  },
  {
    question: 'What hobby does Jakub want to pursue in the future?',
    answers: ['Beat boxing', 'Woodworking', 'Lock picking'],
    correctAnswer: 'Lock picking',
    description: 'For non-criminal purposes hopefully',
    correctImage: 'https://media.giphy.com/media/Njjakmj3DC7pS/giphy.gif?response_id=5924541d70f0aeb477e8fe56'
  }
];
