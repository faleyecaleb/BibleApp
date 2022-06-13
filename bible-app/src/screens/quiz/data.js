const quizData = [
  {
    id: 1,
    question: 'When Samuel picked David as king, God reminded us that while people look at the outward appearance, what does God look at?',
    answers: [
      {answer: {letter: 'A', text: 'Our motives'}, correct: false},
      {answer: {letter: 'B', text: 'our attitude'}, correct: false},
      {answer: {letter: 'C', text: 'our work done on earth'}, correct: false},
      {answer: {letter: 'D', text: 'our heart'}, correct: true},
    ]
  },
  {
    id: 2,
    question: 'What is the last book of the Old Testament?',
    answers: [
      {answer: {letter: 'A', text: ' Second Samuel'}, correct: false},
      {answer: {letter: 'B', text: 'Matthew'}, correct: false},
      {answer: {letter: 'C', text: 'Zephaniah'}, correct: false},
      {answer: {letter: 'D', text: ' Malachi'}, correct: true},
    ]
  },
  {
    id: 3,
    question: 'How many times did God call out to young Samuel in the night as he was lying down in the house of the Lord?',
    answers: [
      {answer: {letter: 'A', text: 'four times'}, correct: true},
      {answer: {letter: 'B', text: 'three times'}, correct: false},
      {answer: {letter: 'C', text: 'once'}, correct: false},
      {answer: {letter: 'D', text: '20 times'}, correct: false},
    ]
  },
  {
    id: 4,
    question: 'The Gospel of Mark begins with',
    answers: [
      {answer: {letter: 'A', text: `John the Baptist's birth`}, correct: false},
      {answer: {letter: 'B', text: `Jesus' birth`}, correct: false},
      {answer: {letter: 'C', text: 'The angel Gabriel appearing to Mary'}, correct: false},
      {answer: {letter: 'D', text: `Jesus' baptism by John`}, correct: true},
    ]
  },
  {
    id: 5,
    question: 'After Jesus was baptized, God said, “This is my son, whom I...',
    answers: [
      {answer: {letter: 'A', text: 'whom I love'}, correct: true},
      {answer: {letter: 'B', text: 'whom I will bless'}, correct: false},
      {answer: {letter: 'C', text: 'whom I cherish'}, correct: false},
      {answer: {letter: 'D', text: 'whom I have sent'}, correct: false},
    ]
  },
  {
    id: 6,
    question: 'What instrument did David play',
    answers: [
      {answer: {letter: 'A', text: 'trumpet'}, correct: false},
      {answer: {letter: 'B', text: 'flute'}, correct: false},
      {answer: {letter: 'C', text: 'Harp/lyre '}, correct: true},
      {answer: {letter: 'D', text: 'cymbals'}, correct: false},
    ]
  },
  {
    id: 7,
    question: 'Finish this verse from 1 Thessalonians: Pray without...',
    answers: [
      {answer: {letter: 'A', text: ' doubting'}, correct: false},
      {answer: {letter: 'B', text: ' season'}, correct: false},
      {answer: {letter: 'C', text: ' complaining'}, correct: false},
      {answer: {letter: 'D', text: 'ceasing'}, correct: true},
    ]
  },
  {
    id: 8,
    question: 'After Noah got off the boat, what sign did God give to showed his promise to never flood the world again',
    answers: [
      {answer: {letter: 'A', text: 'a dove'}, correct: false},
      {answer: {letter: 'B', text: 'an olive branch'}, correct: false},
      {answer: {letter: 'C', text: 'a rainbow'}, correct: true},
      {answer: {letter: 'D', text: 'a fire in a bush'}, correct: false},
    ]
  },
  {
    id: 9,
    question: 'How many days and nights did Jesus fast',
    answers: [
      {answer: {letter: 'A', text: '22'}, correct: false},
      {answer: {letter: 'B', text: '40'}, correct: true},
      {answer: {letter: 'C', text: '365'}, correct: false},
      {answer: {letter: 'D', text: '12'}, correct: false},
    ]
  },
  {
    id: 10,
    question: 'Who was the first person to come upon the injured man in the parable of the Good Samaritan',
    answers: [
      {answer: {letter: 'A', text: 'the tax collector'}, correct: false},
      {answer: {letter: 'B', text: 'the innkeeper'}, correct: false},
      {answer: {letter: 'C', text: 'the priest'}, correct: true},
      {answer: {letter: 'D', text: 'the judge'}, correct: false},
    ]
  },
  {
    id: 11,
    question: 'Finish this verse: “In addition to all this, take up your shield of _____, with which you can extinguish all the flaming arrows of the evil one',
    answers: [
      {answer: {letter: 'A', text: 'Shield of Faith'}, correct: true},
      {answer: {letter: 'B', text: 'Shield of the Spirit'}, correct: false},
      {answer: {letter: 'C', text: 'Shield of Protection'}, correct: false},
      {answer: {letter: 'D', text: 'Shield of Righteousness'}, correct: false},
    ]
  },
  {
    id: 12,
    question: `Which New Testament book has Jesus’ Sermon on the Mount`,
    answers: [
      {answer: {letter: 'A', text: 'Hebrews'}, correct: false},
      {answer: {letter: 'B', text: ' John'}, correct: false},
      {answer: {letter: 'C', text: 'Revelation'}, correct: false},
      {answer: {letter: 'D', text: 'Matthew'}, correct: true},
    ]
  },
  {
    id: 13,
    question: `How many times does the Bible mention the word “snow” `,
    answers: [
      {answer: {letter: 'A', text: ' 24 times'}, correct: true},
      {answer: {letter: 'B', text: '5 times'}, correct: false},
      {answer: {letter: 'C', text: 'never'}, correct: false},
      {answer: {letter: 'D', text: '12 times'}, correct: false},
    ]
  },
  {
    id: 14,
    question: 'What did King Solomon ask God to give him',
    answers: [
      {answer: {letter: 'A', text: 'prosperity'}, correct: false},
      {answer: {letter: 'B', text: 'a new barn for his grain'}, correct: false},
      {answer: {letter: 'C', text: ' fame'}, correct: false},
      {answer: {letter: 'D', text: 'wisdom'}, correct: true},
    ]
  },
  {
    id: 15,
    question: 'What location does Jesus say to light a lamp for all to see',
    answers: [
      {answer: {letter: 'A', text: 'on a hill'}, correct: false},
      {answer: {letter: 'B', text: 'out in the open'}, correct: false},
      {answer: {letter: 'C', text: 'on a stand'}, correct: true},
      {answer: {letter: 'D', text: ' on a roof'}, correct: false},
    ]
  },
  {
    id: 16,
    question: 'What piece of clothing made Joseph’s brothers jealous',
    answers: [
      {answer: {letter: 'A', text: ' a coat'}, correct: true},
      {answer: {letter: 'B', text: 'shoes'}, correct: false},
      {answer: {letter: 'C', text: 'belt'}, correct: false},
      {answer: {letter: 'D', text: 'special headpiece'}, correct: false},
    ]
  },
  {
    id: 17,
    question: 'How many days was Jonah in the belly of the big fish',
    answers: [
      {answer: {letter: 'A', text: 'one'}, correct: false},
      {answer: {letter: 'B', text: 'three'}, correct: true},
      {answer: {letter: 'C', text: 'five'}, correct: false},
      {answer: {letter: 'D', text: 'seven'}, correct: false},
    ]
  },
  {
    id: 18,
    question: 'How was Ruth related to Naomi',
    answers: [
      {answer: {letter: 'A', text: 'Daughter'}, correct: false},
      {answer: {letter: 'B', text: 'sister'}, correct: false},
      {answer: {letter: 'C', text: 'daughter-in-law '}, correct: true},
      {answer: {letter: 'D', text: 'cousin'}, correct: false},
    ]
  },
  {
    id: 19,
    question: 'Noah sent two birds from the ark — what were they',
    answers: [
      {answer: {letter: 'A', text: 'Dove and a sparrow'}, correct: false},
      {answer: {letter: 'B', text: 'dove and a pelican'}, correct: false},
      {answer: {letter: 'C', text: 'dove and a raven'}, correct: true},
      {answer: {letter: 'D', text: 'sparrow and an eagle'}, correct: false},
    ]
  },
  {
    id: 20,
    question: 'In what languages were most of the Old Testament and New Testament given in',
    answers: [
      {answer: {letter: 'A', text: 'Both in Greek'}, correct: false},
      {answer: {letter: 'B', text: 'Greek and Latin'}, correct: false},
      {answer: {letter: 'C', text: 'Latin and Hebrew'}, correct: false},
      {answer: {letter: 'D', text: 'Hebrew and Greek'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: '1 John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 22,
    question: 'How much of his wealth did Zacchaeus give to the poor',
    answers: [
      {answer: {letter: 'A', text: '10 percent'}, correct: false},
      {answer: {letter: 'B', text: 'all of it'}, correct: false},
      {answer: {letter: 'C', text: 'half of it'}, correct: true},
      {answer: {letter: 'D', text: 'what he had collected in taxes'}, correct: false},
    ]
  },
  {
    id: 23,
    question: 'What will be the outcome of honoring your father and your mother',
    answers: [
      {answer: {letter: 'A', text: 'you will live long in the land'}, correct: true},
      {answer: {letter: 'B', text: 'you will prosper in all you do'}, correct: false},
      {answer: {letter: 'C', text: ' you will be blessed abundantly'}, correct: false},
      {answer: {letter: 'D', text: 'you will have bountiful crops'}, correct: false},
    ]
  },
  {
    id: 24,
    question: 'Two are better than one because they have a good return for their work: If one falls down, _____ can help him up',
    answers: [
      {answer: {letter: 'A', text: 'Jesus Christ'}, correct: false},
      {answer: {letter: 'B', text: 'God’s spirit'}, correct: false},
      {answer: {letter: 'C', text: 'his friend'}, correct: true},
      {answer: {letter: 'D', text: ' his family'}, correct: false},
    ]
  },
  {
    id: 25,
    question: `To what city was Saul traveling when he saw a great light and Jesus asked, “Why do you persecute me?”`,
    answers: [
      {answer: {letter: 'A', text: 'Jerusalem'}, correct: false},
      {answer: {letter: 'B', text: 'Bethlehem'}, correct: false},
      {answer: {letter: 'C', text: 'Philippi'}, correct: false},
      {answer: {letter: 'D', text: 'Damascus'}, correct: true},
    ]
  },
  {
    id: 26,
    question: 'What animal does Moses compare the people of Israel to when speaking to the Lord',
    answers: [
      {answer: {letter: 'A', text: 'sheep'}, correct: true},
      {answer: {letter: 'B', text: 'goats'}, correct: false},
      {answer: {letter: 'C', text: 'lions'}, correct: false},
      {answer: {letter: 'D', text: 'eagles'}, correct: false},
    ]
  },
  {
    id: 27,
    question: 'In Luke, the woman cleans Jesus feet with what two things',
    answers: [
      {answer: {letter: 'A', text: 'soap and water'}, correct: false},
      {answer: {letter: 'B', text: 'water and a towel'}, correct: false},
      {answer: {letter: 'C', text: 'tears and a towel'}, correct: false},
      {answer: {letter: 'D', text: 'tears and her hair'}, correct: true},
    ]
  },
  {
    id: 28,
    question: 'According to Hebrews, God’s word is _____ and _____',
    answers: [
      {answer: {letter: 'A', text: 'ancient and inspiring'}, correct: false},
      {answer: {letter: 'B', text: 'living and active'}, correct: true},
      {answer: {letter: 'C', text: 'gentle and instructive'}, correct: false},
      {answer: {letter: 'D', text: 'mysterious and wonderful'}, correct: false},
    ]
  },
  {
    id: 29,
    question: 'What were the names of the twins who wrestled in their mother’s womb',
    answers: [
      {answer: {letter: 'A', text: 'Cain and Abel'}, correct: false},
      {answer: {letter: 'B', text: 'Paul and Peter'}, correct: false},
      {answer: {letter: 'C', text: 'Jesus and John'}, correct: false},
      {answer: {letter: 'D', text: 'Jacob and Esau'}, correct: true},
    ]
  },
  {
    id: 30,
    question: 'Which of the following is NOT part of the armor of God',
    answers: [
      {answer: {letter: 'A', text: 'the belt of truth'}, correct: false},
      {answer: {letter: 'B', text: 'shield of knowledge'}, correct: false},
      {answer: {letter: 'C', text: 'sword of the Spirit'}, correct: false},
      {answer: {letter: 'D', text: ' helmet of salvation'}, correct: true},
    ]
  },
  {
    id: 31,
    question: 'What book of the Bible do you find Lydia of Thyatira’s story',
    answers: [
      {answer: {letter: 'A', text: 'Isaiah'}, correct: false},
      {answer: {letter: 'B', text: 'Proverbs'}, correct: false},
      {answer: {letter: 'C', text: 'Acts'}, correct: true},
      {answer: {letter: 'D', text: 'First Colossians'}, correct: false},
    ]
  },
  {
    id: 32,
    question: 'Where did Elijah meet with the prophets of Baal to prove that God is the one true god',
    answers: [
      {answer: {letter: 'A', text: 'Mount Moriah'}, correct: false},
      {answer: {letter: 'B', text: 'Mount of Olives'}, correct: false},
      {answer: {letter: 'C', text: 'Mount Ararat'}, correct: false},
      {answer: {letter: 'D', text: 'Mount Carmel'}, correct: true},
    ]
  },
  {
    id: 33,
    question: 'Where did Jesus grow up after returning from Egypt',
    answers: [
      {answer: {letter: 'A', text: 'Nazareth'}, correct: true},
      {answer: {letter: 'B', text: 'Bethlehem'}, correct: false},
      {answer: {letter: 'C', text: 'Jerusalem'}, correct: false},
      {answer: {letter: 'D', text: 'Lower East Side'}, correct: false},
    ]
  },
  {
    id: 34,
    question: `James 4 asks, “What causes fights and quarrels among you? Don't they come from your _____ that battle within you? You want something but don’t get it.”`,
    answers: [
      {answer: {letter: 'A', text: 'the blank sins'}, correct: false},
      {answer: {letter: 'B', text: 'evil motivations'}, correct: false},
      {answer: {letter: 'C', text: 'desires'}, correct: true},
      {answer: {letter: 'D', text: 'selfish tendencies'}, correct: false},
    ]
  },
  {
    id: 35,
    question: `In which book of the Bible is this verse found: “Train up a child in the way he should go and when he is old he will not turn from it.”`,
    answers: [
      {answer: {letter: 'A', text: 'Leviticus'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Proverbs'}, correct: true},
      {answer: {letter: 'D', text: 'Habakkuk'}, correct: false},
    ]
  },
  {
    id: 36,
    question: 'What was Aaron doing while Moses was up getting the 10 Commandments',
    answers: [
      {answer: {letter: 'A', text: 'having a potluck with the Israelites'}, correct: false},
      {answer: {letter: 'B', text: 'praying to God'}, correct: false},
      {answer: {letter: 'C', text: 'making a golden idol'}, correct: true},
      {answer: {letter: 'D', text: 'making offerings to God'}, correct: false},
    ]
  },
  {
    id: 37,
    question: 'What does this name of God mean: Jehovah Rapha',
    answers: [
      {answer: {letter: 'A', text: 'The Lord who leads'}, correct: false},
      {answer: {letter: 'B', text: 'The Lord who sends'}, correct: false},
      {answer: {letter: 'C', text: 'The Lord who provides'}, correct: false},
      {answer: {letter: 'D', text: 'The Lord who heals'}, correct: true},
    ]
  },
  {
    id: 38,
    question: 'What is the name commonly given to the first five books of the Old Testament',
    answers: [
      {answer: {letter: 'A', text: 'the Pentateuch'}, correct: true},
      {answer: {letter: 'B', text: ' the Doxology'}, correct: false},
      {answer: {letter: 'C', text: 'the Apocrypha'}, correct: false},
      {answer: {letter: 'D', text: 'the Septuagint'}, correct: false},
    ]
  },
  {
    id: 39,
    question: 'In Revelation, Jesus says: “Do not be afraid. I am the ____ and the ____',
    answers: [
      {answer: {letter: 'A', text: 'First and the Last'}, correct: true},
      {answer: {letter: 'B', text: 'the Way and the Truth'}, correct: false},
      {answer: {letter: 'C', text: 'the Life and the Truth'}, correct: false},
      {answer: {letter: 'D', text: 'he Lion and the Lamb'}, correct: false},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
  {
    id: 21,
    question: 'Name one of the five books in the Bible that contain only one chapter',
    answers: [
      {answer: {letter: 'A', text: 'John'}, correct: false},
      {answer: {letter: 'B', text: 'Titus'}, correct: false},
      {answer: {letter: 'C', text: 'Habakkuk '}, correct: false},
      {answer: {letter: 'D', text: 'Obadiah'}, correct: true},
    ]
  },
]

export default quizData;