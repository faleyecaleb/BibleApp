const quizData = [
  {
    id: 1,
    question: 'When Samuel picked David as king, God reminded us that while people look at the outward appearance, what does God look at?',
    answers: [
      { answer: { letter: 'A', text: 'Our motives' }, correct: false },
      { answer: { letter: 'B', text: 'our attitude' }, correct: false },
      { answer: { letter: 'C', text: 'our work done on earth' }, correct: false },
      { answer: { letter: 'D', text: 'our heart' }, correct: true },
    ]
  },
  {
    id: 2,
    question: 'What is the last book of the Old Testament?',
    answers: [
      { answer: { letter: 'A', text: ' Second Samuel' }, correct: false },
      { answer: { letter: 'B', text: 'Matthew' }, correct: false },
      { answer: { letter: 'C', text: 'Zephaniah' }, correct: false },
      { answer: { letter: 'D', text: ' Malachi' }, correct: true },
    ]
  },
  {
    id: 3,
    question: 'How many times did God call out to young Samuel in the night as he was lying down in the house of the Lord?',
    answers: [
      { answer: { letter: 'A', text: 'four times' }, correct: true },
      { answer: { letter: 'B', text: 'three times' }, correct: false },
      { answer: { letter: 'C', text: 'once' }, correct: false },
      { answer: { letter: 'D', text: '20 times' }, correct: false },
    ]
  },
  {
    id: 4,
    question: 'The Gospel of Mark begins with',
    answers: [
      { answer: { letter: 'A', text: `John the Baptist's birth` }, correct: false },
      { answer: { letter: 'B', text: `Jesus' birth` }, correct: false },
      { answer: { letter: 'C', text: 'The angel Gabriel appearing to Mary' }, correct: false },
      { answer: { letter: 'D', text: `Jesus' baptism by John` }, correct: true },
    ]
  },
  {
    id: 5,
    question: 'After Jesus was baptized, God said, “This is my son, whom I...',
    answers: [
      { answer: { letter: 'A', text: 'whom I love' }, correct: true },
      { answer: { letter: 'B', text: 'whom I will bless' }, correct: false },
      { answer: { letter: 'C', text: 'whom I cherish' }, correct: false },
      { answer: { letter: 'D', text: 'whom I have sent' }, correct: false },
    ]
  },
  {
    id: 6,
    question: 'What instrument did David play',
    answers: [
      { answer: { letter: 'A', text: 'trumpet' }, correct: false },
      { answer: { letter: 'B', text: 'flute' }, correct: false },
      { answer: { letter: 'C', text: 'Harp/lyre ' }, correct: true },
      { answer: { letter: 'D', text: 'cymbals' }, correct: false },
    ]
  },
  {
    id: 7,
    question: 'Finish this verse from 1 Thessalonians: Pray without...',
    answers: [
      { answer: { letter: 'A', text: ' doubting' }, correct: false },
      { answer: { letter: 'B', text: ' season' }, correct: false },
      { answer: { letter: 'C', text: ' complaining' }, correct: false },
      { answer: { letter: 'D', text: 'ceasing' }, correct: true },
    ]
  },
  {
    id: 8,
    question: 'After Noah got off the boat, what sign did God give to showed his promise to never flood the world again',
    answers: [
      { answer: { letter: 'A', text: 'a dove' }, correct: false },
      { answer: { letter: 'B', text: 'an olive branch' }, correct: false },
      { answer: { letter: 'C', text: 'a rainbow' }, correct: true },
      { answer: { letter: 'D', text: 'a fire in a bush' }, correct: false },
    ]
  },
  {
    id: 9,
    question: 'How many days and nights did Jesus fast',
    answers: [
      { answer: { letter: 'A', text: '22' }, correct: false },
      { answer: { letter: 'B', text: '40' }, correct: true },
      { answer: { letter: 'C', text: '365' }, correct: false },
      { answer: { letter: 'D', text: '12' }, correct: false },
    ]
  },
  {
    id: 10,
    question: 'Who was the first person to come upon the injured man in the parable of the Good Samaritan',
    answers: [
      { answer: { letter: 'A', text: 'the tax collector' }, correct: false },
      { answer: { letter: 'B', text: 'the innkeeper' }, correct: false },
      { answer: { letter: 'C', text: 'the priest' }, correct: true },
      { answer: { letter: 'D', text: 'the judge' }, correct: false },
    ]
  },
  {
    id: 11,
    question: 'Finish this verse: “In addition to all this, take up your shield of _____, with which you can extinguish all the flaming arrows of the evil one',
    answers: [
      { answer: { letter: 'A', text: 'Shield of Faith' }, correct: true },
      { answer: { letter: 'B', text: 'Shield of the Spirit' }, correct: false },
      { answer: { letter: 'C', text: 'Shield of Protection' }, correct: false },
      { answer: { letter: 'D', text: 'Shield of Righteousness' }, correct: false },
    ]
  },
  {
    id: 12,
    question: `Which New Testament book has Jesus’ Sermon on the Mount`,
    answers: [
      { answer: { letter: 'A', text: 'Hebrews' }, correct: false },
      { answer: { letter: 'B', text: ' John' }, correct: false },
      { answer: { letter: 'C', text: 'Revelation' }, correct: false },
      { answer: { letter: 'D', text: 'Matthew' }, correct: true },
    ]
  },
  {
    id: 13,
    question: `How many times does the Bible mention the word “snow” `,
    answers: [
      { answer: { letter: 'A', text: ' 24 times' }, correct: true },
      { answer: { letter: 'B', text: '5 times' }, correct: false },
      { answer: { letter: 'C', text: 'never' }, correct: false },
      { answer: { letter: 'D', text: '12 times' }, correct: false },
    ]
  },
  {
    id: 14,
    question: 'What did King Solomon ask God to give him',
    answers: [
      { answer: { letter: 'A', text: 'prosperity' }, correct: false },
      { answer: { letter: 'B', text: 'a new barn for his grain' }, correct: false },
      { answer: { letter: 'C', text: ' fame' }, correct: false },
      { answer: { letter: 'D', text: 'wisdom' }, correct: true },
    ]
  },
  {
    id: 15,
    question: 'What location does Jesus say to light a lamp for all to see',
    answers: [
      { answer: { letter: 'A', text: 'on a hill' }, correct: false },
      { answer: { letter: 'B', text: 'out in the open' }, correct: false },
      { answer: { letter: 'C', text: 'on a stand' }, correct: true },
      { answer: { letter: 'D', text: ' on a roof' }, correct: false },
    ]
  },
  {
    id: 16,
    question: 'What piece of clothing made Joseph’s brothers jealous',
    answers: [
      { answer: { letter: 'A', text: ' a coat' }, correct: true },
      { answer: { letter: 'B', text: 'shoes' }, correct: false },
      { answer: { letter: 'C', text: 'belt' }, correct: false },
      { answer: { letter: 'D', text: 'special headpiece' }, correct: false },
    ]
  },
  {
    id: 17,
    question: 'How many days was Jonah in the belly of the big fish',
    answers: [
      { answer: { letter: 'A', text: 'one' }, correct: false },
      { answer: { letter: 'B', text: 'three' }, correct: true },
      { answer: { letter: 'C', text: 'five' }, correct: false },
      { answer: { letter: 'D', text: 'seven' }, correct: false },
    ]
  },
  {
    id: 18,
    question: 'How was Ruth related to Naomi',
    answers: [
      { answer: { letter: 'A', text: 'Daughter' }, correct: false },
      { answer: { letter: 'B', text: 'sister' }, correct: false },
      { answer: { letter: 'C', text: 'daughter-in-law ' }, correct: true },
      { answer: { letter: 'D', text: 'cousin' }, correct: false },
    ]
  },
  {
    id: 19,
    question: 'Noah sent two birds from the ark — what were they',
    answers: [
      { answer: { letter: 'A', text: 'Dove and a sparrow' }, correct: false },
      { answer: { letter: 'B', text: 'dove and a pelican' }, correct: false },
      { answer: { letter: 'C', text: 'dove and a raven' }, correct: true },
      { answer: { letter: 'D', text: 'sparrow and an eagle' }, correct: false },
    ]
  },
  {
    id: 20,
    question: 'In what languages were most of the Old Testament and New Testament given in',
    answers: [
      { answer: { letter: 'A', text: 'Both in Greek' }, correct: false },
      { answer: { letter: 'B', text: 'Greek and Latin' }, correct: false },
      { answer: { letter: 'C', text: 'Latin and Hebrew' }, correct: false },
      { answer: { letter: 'D', text: 'Hebrew and Greek' }, correct: true },
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      { answer: { letter: 'A', text: '1 John' }, correct: false },
      { answer: { letter: 'B', text: 'Titus' }, correct: false },
      { answer: { letter: 'C', text: 'Habakkuk ' }, correct: false },
      { answer: { letter: 'D', text: 'Obadiah' }, correct: true },
    ]
  },
  {
    id: 22,
    question: 'How much of his wealth did Zacchaeus give to the poor',
    answers: [
      { answer: { letter: 'A', text: '10 percent' }, correct: false },
      { answer: { letter: 'B', text: 'all of it' }, correct: false },
      { answer: { letter: 'C', text: 'half of it' }, correct: true },
      { answer: { letter: 'D', text: 'what he had collected in taxes' }, correct: false },
    ]
  },
  {
    id: 23,
    question: 'What will be the outcome of honoring your father and your mother',
    answers: [
      { answer: { letter: 'A', text: 'you will live long in the land' }, correct: true },
      { answer: { letter: 'B', text: 'you will prosper in all you do' }, correct: false },
      { answer: { letter: 'C', text: ' you will be blessed abundantly' }, correct: false },
      { answer: { letter: 'D', text: 'you will have bountiful crops' }, correct: false },
    ]
  },
  {
    id: 24,
    question: 'Two are better than one because they have a good return for their work: If one falls down, _____ can help him up',
    answers: [
      { answer: { letter: 'A', text: 'Jesus Christ' }, correct: false },
      { answer: { letter: 'B', text: 'God’s spirit' }, correct: false },
      { answer: { letter: 'C', text: 'his friend' }, correct: true },
      { answer: { letter: 'D', text: ' his family' }, correct: false },
    ]
  },
  {
    id: 25,
    question: `To what city was Saul traveling when he saw a great light and Jesus asked, “Why do you persecute me?”`,
    answers: [
      { answer: { letter: 'A', text: 'Jerusalem' }, correct: false },
      { answer: { letter: 'B', text: 'Bethlehem' }, correct: false },
      { answer: { letter: 'C', text: 'Philippi' }, correct: false },
      { answer: { letter: 'D', text: 'Damascus' }, correct: true },
    ]
  },
  {
    id: 26,
    question: 'What animal does Moses compare the people of Israel to when speaking to the Lord',
    answers: [
      { answer: { letter: 'A', text: 'sheep' }, correct: true },
      { answer: { letter: 'B', text: 'goats' }, correct: false },
      { answer: { letter: 'C', text: 'lions' }, correct: false },
      { answer: { letter: 'D', text: 'eagles' }, correct: false },
    ]
  },
  {
    id: 27,
    question: 'In Luke, the woman cleans Jesus feet with what two things',
    answers: [
      { answer: { letter: 'A', text: 'soap and water' }, correct: false },
      { answer: { letter: 'B', text: 'water and a towel' }, correct: false },
      { answer: { letter: 'C', text: 'tears and a towel' }, correct: false },
      { answer: { letter: 'D', text: 'tears and her hair' }, correct: true },
    ]
  },
  {
    id: 28,
    question: 'According to Hebrews, God’s word is _____ and _____',
    answers: [
      { answer: { letter: 'A', text: 'ancient and inspiring' }, correct: false },
      { answer: { letter: 'B', text: 'living and active' }, correct: true },
      { answer: { letter: 'C', text: 'gentle and instructive' }, correct: false },
      { answer: { letter: 'D', text: 'mysterious and wonderful' }, correct: false },
    ]
  },
  {
    id: 29,
    question: 'What were the names of the twins who wrestled in their mother’s womb',
    answers: [
      { answer: { letter: 'A', text: 'Cain and Abel' }, correct: false },
      { answer: { letter: 'B', text: 'Paul and Peter' }, correct: false },
      { answer: { letter: 'C', text: 'Jesus and John' }, correct: false },
      { answer: { letter: 'D', text: 'Jacob and Esau' }, correct: true },
    ]
  },
  {
    id: 30,
    question: 'Which of the following is NOT part of the armor of God',
    answers: [
      { answer: { letter: 'A', text: 'the belt of truth' }, correct: false },
      { answer: { letter: 'B', text: 'shield of knowledge' }, correct: false },
      { answer: { letter: 'C', text: 'sword of the Spirit' }, correct: false },
      { answer: { letter: 'D', text: ' helmet of salvation' }, correct: true },
    ]
  },
  {
    id: 31,
    question: 'What book of the Bible do you find Lydia of Thyatira’s story',
    answers: [
      { answer: { letter: 'A', text: 'Isaiah' }, correct: false },
      { answer: { letter: 'B', text: 'Proverbs' }, correct: false },
      { answer: { letter: 'C', text: 'Acts' }, correct: true },
      { answer: { letter: 'D', text: 'First Colossians' }, correct: false },
    ]
  },
  {
    id: 32,
    question: 'Where did Elijah meet with the prophets of Baal to prove that God is the one true god',
    answers: [
      { answer: { letter: 'A', text: 'Mount Moriah' }, correct: false },
      { answer: { letter: 'B', text: 'Mount of Olives' }, correct: false },
      { answer: { letter: 'C', text: 'Mount Ararat' }, correct: false },
      { answer: { letter: 'D', text: 'Mount Carmel' }, correct: true },
    ]
  },
  {
    id: 33,
    question: 'Where did Jesus grow up after returning from Egypt',
    answers: [
      { answer: { letter: 'A', text: 'Nazareth' }, correct: true },
      { answer: { letter: 'B', text: 'Bethlehem' }, correct: false },
      { answer: { letter: 'C', text: 'Jerusalem' }, correct: false },
      { answer: { letter: 'D', text: 'Lower East Side' }, correct: false },
    ]
  },
  {
    id: 34,
    question: `James 4 asks, “What causes fights and quarrels among you? Don't they come from your _____ that battle within you? You want something but don’t get it.”`,
    answers: [
      { answer: { letter: 'A', text: 'the blank sins' }, correct: false },
      { answer: { letter: 'B', text: 'evil motivations' }, correct: false },
      { answer: { letter: 'C', text: 'desires' }, correct: true },
      { answer: { letter: 'D', text: 'selfish tendencies' }, correct: false },
    ]
  },
  {
    id: 35,
    question: `In which book of the Bible is this verse found: “Train up a child in the way he should go and when he is old he will not turn from it.”`,
    answers: [
      { answer: { letter: 'A', text: 'Leviticus' }, correct: false },
      { answer: { letter: 'B', text: 'Titus' }, correct: false },
      { answer: { letter: 'C', text: 'Proverbs' }, correct: true },
      { answer: { letter: 'D', text: 'Habakkuk' }, correct: false },
    ]
  },
  {
    id: 36,
    question: 'What was Aaron doing while Moses was up getting the 10 Commandments',
    answers: [
      { answer: { letter: 'A', text: 'having a potluck with the Israelites' }, correct: false },
      { answer: { letter: 'B', text: 'praying to God' }, correct: false },
      { answer: { letter: 'C', text: 'making a golden idol' }, correct: true },
      { answer: { letter: 'D', text: 'making offerings to God' }, correct: false },
    ]
  },
  {
    id: 37,
    question: 'What does this name of God mean: Jehovah Rapha',
    answers: [
      { answer: { letter: 'A', text: 'The Lord who leads' }, correct: false },
      { answer: { letter: 'B', text: 'The Lord who sends' }, correct: false },
      { answer: { letter: 'C', text: 'The Lord who provides' }, correct: false },
      { answer: { letter: 'D', text: 'The Lord who heals' }, correct: true },
    ]
  },
  {
    id: 38,
    question: 'What is the name commonly given to the first five books of the Old Testament',
    answers: [
      { answer: { letter: 'A', text: 'the Pentateuch' }, correct: true },
      { answer: { letter: 'B', text: ' the Doxology' }, correct: false },
      { answer: { letter: 'C', text: 'the Apocrypha' }, correct: false },
      { answer: { letter: 'D', text: 'the Septuagint' }, correct: false },
    ]
  },
  {
    id: 39,
    question: 'In Revelation, Jesus says: “Do not be afraid. I am the ____ and the ____',
    answers: [
      { answer: { letter: 'A', text: 'First and the Last' }, correct: true },
      { answer: { letter: 'B', text: 'the Way and the Truth' }, correct: false },
      { answer: { letter: 'C', text: 'the Life and the Truth' }, correct: false },
      { answer: { letter: 'D', text: 'he Lion and the Lamb' }, correct: false },
    ]
  },
  {
    id: 40,
    question: 'Where in the New Testament does it talk about the perseverance of Job',
    answers: [
      { answer: { letter: 'A', text: 'The book of Hebrews' }, correct: false },
      { answer: { letter: 'B', text: 'Revelation' }, correct: false },
      { answer: { letter: 'C', text: '2 Timothy' }, correct: false },
      { answer: { letter: 'D', text: 'James' }, correct: true },
    ]
  },
  {
    id: 41,
    question: 'What does Jesus say about judging others',
    answers: [
      { answer: { letter: 'A', text: 'judge fairly' }, correct: false },
      { answer: { letter: 'B', text: 'judge justly' }, correct: false },
      { answer: { letter: 'C', text: 'judge not' }, correct: true },
      { answer: { letter: 'D', text: 'judge Judy' }, correct: false },
    ]
  },
  {
    id: 42,
    question: `“The _____ _____ of the wise are more to be heeded than the shouts of a ruler of fools.” `,
    answers: [
      { answer: { letter: 'A', text: 'true sayings' }, correct: false },
      { answer: { letter: 'B', text: 'quiet words' }, correct: true },
      { answer: { letter: 'C', text: 'harsh rebukes' }, correct: false },
      { answer: { letter: 'D', text: 'silent prayers' }, correct: false },
    ]
  },
  {
    id: 43,
    question: 'What were the two plagues that afflicted the Egyptians physically',
    answers: [
      { answer: { letter: 'A', text: 'gnats and blisters' }, correct: false },
      { answer: { letter: 'B', text: 'boils and hives' }, correct: false },
      { answer: { letter: 'C', text: 'dandruff and hives ' }, correct: false },
      { answer: { letter: 'D', text: 'gnats and boils' }, correct: true },
    ]
  },
  {
    id: 44,
    question: 'Fill in the blank: “In the same way, ___ are to be worthy of respect, sincere, not indulging in much wine, and not pursuing dishonest gain',
    answers: [
      { answer: { letter: 'A', text: 'husbands' }, correct: false },
      { answer: { letter: 'B', text: 'postal workers' }, correct: false },
      { answer: { letter: 'C', text: 'wives' }, correct: false },
      { answer: { letter: 'D', text: 'deacons' }, correct: true },
    ]
  },
  {
    id: 45,
    question: 'What did the mysterious hand write on the wall at King Belshazzar’s banquet',
    answers: [
      { answer: { letter: 'A', text: 'Eli Eli Lama Sabachthani' }, correct: false },
      { answer: { letter: 'B', text: 'Jehovah-Jireh' }, correct: false },
      { answer: { letter: 'C', text: 'Mene, Mene, Tekel, Parsin' }, correct: true },
      { answer: { letter: 'D', text: 'Shadrach Meshach and Abednego' }, correct: false },
    ]
  },
  {
    id: 46,
    question: 'How many of each animal did Moses bring into the Ark',
    answers: [
      { answer: { letter: 'A', text: 'None' }, correct: true },
      { answer: { letter: 'B', text: 'Three' }, correct: false },
      { answer: { letter: 'C', text: 'Seven' }, correct: false },
      { answer: { letter: 'D', text: 'Fifteen' }, correct: false },
    ]
  },
  {
    id: 47,
    question: 'Which tribe was Paul from',
    answers: [
      { answer: { letter: 'A', text: 'Tribe Of Judah' }, correct: false },
      { answer: { letter: 'B', text: 'Tribe of Moses' }, correct: false },
      { answer: { letter: 'C', text: 'Tribe of Benjamin ' }, correct: true },
      { answer: { letter: 'D', text: 'Tribe of the Jews' }, correct: false },
    ]
  },
  {
    id: 48,
    question: 'Which Babylonian emperor let the Israelites return to their homeland',
    answers: [
      { answer: { letter: 'A', text: 'Emperor Cyrus the Great' }, correct: true },
      { answer: { letter: 'B', text: 'Pilate' }, correct: false },
      { answer: { letter: 'C', text: 'Herod' }, correct: false },
      { answer: { letter: 'D', text: 'Pharoah the mighty' }, correct: false },
    ]
  },
  {
    id: 49,
    question: `What name was given to the Jewish ruling council that plotted Jesus’ death`,
    answers: [
      { answer: { letter: 'A', text: 'The Sadducees' }, correct: false },
      { answer: { letter: 'B', text: 'The Pharisees' }, correct: false },
      { answer: { letter: 'C', text: 'The Sanhedrin ' }, correct: true },
      { answer: { letter: 'D', text: 'The Priests' }, correct: false },
    ]
  },
  {
    id: 50,
    question: 'How many books did Paul write in the Bible',
    answers: [
      { answer: { letter: 'A', text: '12' }, correct: false },
      { answer: { letter: 'B', text: '17' }, correct: false },
      { answer: { letter: 'C', text: '13' }, correct: true },
      { answer: { letter: 'D', text: '21' }, correct: false },
    ]
  },
  {
    id: 51,
    question: 'Who was the father of Jesus',
    answers: [
      { answer: { letter: 'A', text: 'Joseph' }, correct: false },
      { answer: { letter: 'B', text: 'GOD' }, correct: true },
      { answer: { letter: 'C', text: 'Holy Spirit' }, correct: false },
      { answer: { letter: 'D', text: 'Jesus' }, correct: false },
    ]
  },
  {
    id: 52,
    question: 'At what age did Sarah, the wife of Abraham, die',
    answers: [
      { answer: { letter: 'A', text: '121' }, correct: true },
      { answer: { letter: 'B', text: '100' }, correct: false },
      { answer: { letter: 'C', text: '90' }, correct: false },
      { answer: { letter: 'D', text: '97' }, correct: false },
    ]
  },

  {
    id: 53,
    question: `Which Jewish holiday commemorates the Jewish people’s deliverance from Haman as recorded in the Book of Esther.`,
    answers: [
      { answer: { letter: 'A', text: 'Hanukkah' }, correct: false },
      { answer: { letter: 'B', text: 'Purim' }, correct: true },
      { answer: { letter: 'C', text: 'Sabbath' }, correct: false },
      { answer: { letter: 'D', text: 'Pentecost' }, correct: false },
    ]
  },


  {
    id: 54,
    question: `What Is the Bible’s shortest verse`,
    answers: [
      { answer: { letter: 'A', text: '1 John 11:35' }, correct: false },
      { answer: { letter: 'B', text: '2 John 11:35' }, correct: false },
      { answer: { letter: 'C', text: 'John 11:35' }, correct: true },
      { answer: { letter: 'D', text: '3 John 11:35' }, correct: false },
    ]
  },

  {
    id: 54,
    question: `When Jesus was presented to the Temple as a baby, who recognized him as the Messiah?`,
    answers: [
      { answer: { letter: 'A', text: 'The Priest' }, correct: false },
      { answer: { letter: 'B', text: 'Hannah' }, correct: false },
      { answer: { letter: 'C', text: 'The Pharisees' }, correct: false },
      { answer: { letter: 'D', text: 'Simeon' }, correct: true },
    ]
  },

  {
    id: 55,
    question: `How many baskets remained after Jesus fed the 5,000`,
    answers: [
      { answer: { letter: 'A', text: 'None was left' }, correct: false },
      { answer: { letter: 'B', text: '12 Baskets' }, correct: true },
      { answer: { letter: 'C', text: '3 Baskets' }, correct: false },
      { answer: { letter: 'D', text: '5 Basket' }, correct: false },
    ]
  },

  {
    id: 56,
    question: `In a parable found in three of the four Gospels, what did Jesus compare mustard seed to`,
    answers: [
      { answer: { letter: 'A', text: 'Kingdom of God' }, correct: true },
      { answer: { letter: 'B', text: 'Faith' }, correct: false },
      { answer: { letter: 'C', text: 'Hope in God' }, correct: false },
      { answer: { letter: 'D', text: 'Righteousness' }, correct: false },
    ]
  },

  {
    id: 57,
    question: `How old was Moses when he died, according to the book of Deuteronomy`,
    answers: [
      { answer: { letter: 'A', text: '100 years' }, correct: false },
      { answer: { letter: 'B', text: '90 years' }, correct: false },
      { answer: { letter: 'C', text: '120 years' }, correct: true },
      { answer: { letter: 'D', text: '200 years' }, correct: false },
    ]
  },

  {
    id: 58,
    question: `Which village was the location of Jesus’ ascension, according to Luke`,
    answers: [
      { answer: { letter: 'A', text: 'Bethany' }, correct: true },
      { answer: { letter: 'B', text: 'Nazareth' }, correct: false },
      { answer: { letter: 'C', text: 'Jerusalem' }, correct: false },
      { answer: { letter: 'D', text: 'Bethlehem' }, correct: false },
    ]
  },

  {
    id: 59,
    question: `Who interprets Daniel’s vision of the ram and he-goat in the Book of Daniel`,
    answers: [
      { answer: { letter: 'A', text: 'Cherubim' }, correct: false },
      { answer: { letter: 'B', text: 'Holy Spirit' }, correct: false },
      { answer: { letter: 'C', text: 'Angel Michael' }, correct: false },
      { answer: { letter: 'D', text: 'Archangel Gabriel' }, correct: true },
    ]
  },

  {
    id: 60,
    question: `Which of King Ahab’s wife, was been cast from a window and trampled underfoot`,
    answers: [
      { answer: { letter: 'A', text: 'Mary' }, correct: false },
      { answer: { letter: 'B', text: 'Naomi' }, correct: false },
      { answer: { letter: 'C', text: 'Jezebel' }, correct: true },
      { answer: { letter: 'D', text: 'Delilah' }, correct: false },
    ]
  },

  {
    id: 61,
    question: `In his Sermon on the Mount, who did Jesus say “shall be called the Children of God,” according to the book of Matthew`,
    answers: [
      { answer: { letter: 'A', text: 'The Peacemakers' }, correct: true },
      { answer: { letter: 'B', text: 'The Merciful' }, correct: false },
      { answer: { letter: 'C', text: 'The Righteous' }, correct: false },
      { answer: { letter: 'D', text: 'The kind in heart' }, correct: false },
    ]
  },

  {
    id: 62,
    question: `What did Jacob call the location where he fought God`,
    answers: [
      { answer: { letter: 'A', text: 'Island' }, correct: false },
      { answer: { letter: 'B', text: 'Pniel' }, correct: true },
      { answer: { letter: 'C', text: 'Euroklydon' }, correct: false },
      { answer: { letter: 'D', text: 'Arena' }, correct: false },
    ]
  },

  {
    id: 63,
    question: `Lebanon was famous for what kind of tree?`,
    answers: [
      { answer: { letter: 'A', text: 'Cedar' }, correct: true },
      { answer: { letter: 'B', text: 'Fig' }, correct: false },
      { answer: { letter: 'C', text: 'Mustard' }, correct: false },
      { answer: { letter: 'D', text: 'No Tree' }, correct: false },
    ]
  },

  {
    id: 64,
    question: `Where was Jesus imprisoned`,
    answers: [
      { answer: { letter: 'A', text: 'Tomb' }, correct: false },
      { answer: { letter: 'B', text: 'Gethsemane' }, correct: true },
      { answer: { letter: 'C', text: 'Lions Den' }, correct: false },
      { answer: { letter: 'D', text: 'Prison' }, correct: false },
    ]
  },

  {
    id: 65,
    question: `What was the name of Jacob’s eldest son?`,
    answers: [
      { answer: { letter: 'A', text: 'Isaac' }, correct: false },
      { answer: { letter: 'B', text: 'Joseph' }, correct: false },
      { answer: { letter: 'C', text: 'Rueben' }, correct: true },
      { answer: { letter: 'D', text: 'Judah' }, correct: false },
    ]
  },

  {
    id: 66,
    question: `In which book of the Bible do we find the story of Haman`,
    answers: [
      { answer: { letter: 'A', text: '! Chronicles' }, correct: false },
      { answer: { letter: 'B', text: 'Job' }, correct: false },
      { answer: { letter: 'C', text: '1 Samuel' }, correct: false },
      { answer: { letter: 'D', text: 'Esther' }, correct: true },
    ]
  },

  {
    id: 67,
    question: `What was the name of the most revered goddess in Ephesus`,
    answers: [
      { answer: { letter: 'A', text: 'Diana' }, correct: true },
      { answer: { letter: 'B', text: 'Deborah' }, correct: false },
      { answer: { letter: 'C', text: 'Esther' }, correct: false },
      { answer: { letter: 'D', text: 'Lois' }, correct: false },
    ]
  },

  //     {
  //   id: 53,
  //   question: ``,
  //   answers: [
  //     { answer: { letter: 'A', text: '' }, correct: false },
  //     { answer: { letter: 'B', text: '' }, correct: true },
  //     { answer: { letter: 'C', text: '' }, correct: false },
  //     { answer: { letter: 'D', text: '' }, correct: false },
  //   ]
  // },

  {
    id: 68,
    question: `What was the name of Boa’s great-grandson`,
    answers: [
      { answer: { letter: 'A', text: 'Haman' }, correct: false },
      { answer: { letter: 'B', text: 'David' }, correct: true },
      { answer: { letter: 'C', text: 'Solomon' }, correct: false },
      { answer: { letter: 'D', text: 'Hezekiah' }, correct: false },
    ]
  },

  {
    id: 69,
    question: `Who is the Jerusalem high priest who put Jesus on trial`,
    answers: [
      { answer: { letter: 'A', text: 'Nicodemus' }, correct: false },
      { answer: { letter: 'B', text: 'Pilate' }, correct: false },
      { answer: { letter: 'C', text: 'Caiaphas' }, correct: true },
      { answer: { letter: 'D', text: 'Herod' }, correct: false },
    ]
  },

  {
    id: 70,
    question: `What insect did John the Baptist eat in the desert`,
    answers: [
      { answer: { letter: 'A', text: 'Locusts' }, correct: true },
      { answer: { letter: 'B', text: 'Leaves' }, correct: false },
      { answer: { letter: 'C', text: 'Beans' }, correct: false },
      { answer: { letter: 'D', text: 'Garri' }, correct: false },
    ]
  },

]

export default quizData;