const Question = require('../../app/models/question')

const mongoose = require('mongoose')

const db = require('../../config/db')

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const questions = [
  {
    title: 'Michael Scott hits this person with company property on company property in "The Office"',
    answers: [
      {
        answerText: 'Who is Toby Flenderson?',
        isCorrect: false
      },
      {
        answerText: 'Who is Jan Levinson?',
        isCorrect: false
      },
      {
        answerText: 'Who is Meredith Palmer?',
        isCorrect: true
      },
      {
        answerText: 'Who is Dwight Shrute?',
        isCorrect: false
      }
    ],
    category: 'Pop Culture',
    score: 200
  },
  {
    title: 'On the hit show "Friends", Ross Gellar gets divorced this many times:',
    answers: [
      {
        answerText: 'What is one?',
        isCorrect: false
      },
      {
        answerText: 'What is two?',
        isCorrect: false
      },
      {
        answerText: 'What is three?',
        isCorrect: true
      },
      {
        answerText: 'What is four?',
        isCorrect: false
      }
    ],
    category: 'Pop Culture',
    score: 400
  },
  {
    title: 'It is the name of the Fortnite inspired parody of Estelle\'s "American Boy" popularized by TikTok',
    answers: [
      {
        answerText: 'What is "Chug Jug With You"?',
        isCorrect: true
      },
      {
        answerText: 'What is "Dancing On Your Body"?',
        isCorrect: false
      },
      {
        answerText: 'What is "Number One Victory Royale"?',
        isCorrect: false
      },
      {
        answerText: 'What is "Fortnite\'s Kinda Dying"?',
        isCorrect: false
      }
    ],
    category: 'Pop Culture',
    score: 600
  },
  {
    title: 'This type of matter has a definite volume but no definite shape',
    answers: [
      {
        answerText: 'What is solid?',
        isCorrect: false
      },
      {
        answerText: 'What is liquid?',
        isCorrect: true
      },
      {
        answerText: 'What is gas?',
        isCorrect: false
      },
      {
        answerText: 'What is plasma?',
        isCorrect: false
      }
    ],
    category: 'Science',
    score: 200
  },
  {
    title: 'It is the most common element in the human body',
    answers: [
      {
        answerText: 'What is carbon?',
        isCorrect: false
      },
      {
        answerText: 'What is oxygen?',
        isCorrect: true
      },
      {
        answerText: 'What is hydrogen?',
        isCorrect: false
      },
      {
        answerText: 'What is calcium?',
        isCorrect: false
      }
    ],
    category: 'Science',
    score: 400
  },
  {
    title: 'A cold snap in Mexico killed 270 million of these "royal" creatures in 2002',
    answers: [
      {
        answerText: 'What are Goliath Beetles?',
        isCorrect: false
      },
      {
        answerText: 'What are Raspberry Crown Wasps?',
        isCorrect: false
      },
      {
        answerText: 'What are Cardinal Ladybird Beetles?',
        isCorrect: false
      },
      {
        answerText: 'What are Monarch Butterflies?',
        isCorrect: true
      }
    ],
    category: 'Science',
    score: 600
  },
  {
    title: 'This is what HTML stands for',
    answers: [
      {
        answerText: 'What is HyperText Markdown Language?',
        isCorrect: false
      },
      {
        answerText: 'What is Hyperlink Test Model Language?',
        isCorrect: false
      },
      {
        answerText: 'HyperText Model Language?',
        isCorrect: false
      },
      {
        answerText: 'What is HyperText Markup Language?',
        isCorrect: true
      }
    ],
    category: 'Web Dev Abbreviations',
    score: 200
  },
  {
    title: 'This is what CSS stands for',
    answers: [
      {
        answerText: 'What is Computer Style Sheets?',
        isCorrect: false
      },
      {
        answerText: 'What is Cascading Style Sheets?',
        isCorrect: true
      },
      {
        answerText: 'What is Circular Style Sheets?',
        isCorrect: false
      },
      {
        answerText: 'What is Creative Style Sheets?',
        isCorrect: false
      }
    ],
    category: 'Web Dev Abbreviations',
    score: 400
  },
  {
    title: 'It is what SQL, the database language, stands for',
    answers: [
      {
        answerText: 'What is Structured Query Language?',
        isCorrect: true
      },
      {
        answerText: 'What is Standard Query Language?',
        isCorrect: false
      },
      {
        answerText: 'What is Structured Question Language?',
        isCorrect: false
      },
      {
        answerText: 'What is Strong Question Language?',
        isCorrect: false
      }
    ],
    category: 'Web Dev Abbreviations',
    score: 600
  },
  {
    title: 'George Lucas is best known for producing this blockbuster hit of the 70s',
    answers: [
      {
        answerText: 'What is "Raiders of the Lost Ark"?',
        isCorrect: false
      },
      {
        answerText: 'What is "Jaws"?',
        isCorrect: false
      },
      {
        answerText: 'What is "Star Wars"?',
        isCorrect: true
      },
      {
        answerText: 'What is "The Godfather"?',
        isCorrect: false
      }
    ],
    category: 'The 70s Movies & Music',
    score: 200
  },
  {
    title: 'This music type is usually performed in flamboyant clothing, and often had nontraditional gender roles.',
    answers: [
      {
        answerText: 'What is Glam Metal?',
        isCorrect: true
      },
      {
        answerText: 'What is Flam Rock?',
        isCorrect: false
      },
      {
        answerText: 'What is Heavy Metal?',
        isCorrect: false
      },
      {
        answerText: 'What is Cute Punk?',
        isCorrect: false
      }
    ],
    category: 'The 70s Movies & Music',
    score: 400
  },
  {
    title: '"Stayin\' Alive" is by what 70s band',
    answers: [
      {
        answerText: 'Who are the Village People?',
        isCorrect: false
      },
      {
        answerText: 'Who is Queen?',
        isCorrect: false
      },
      {
        answerText: 'Who is ABBA?',
        isCorrect: false
      },
      {
        answerText: 'Who are the Bee Gees?',
        isCorrect: true
      }
    ],
    category: 'The 70s Movies & Music',
    score: 600
  },
  {
    title: 'It is the name of ET\'s favorite candy',
    answers: [
      {
        answerText: 'What is Butterfingers?',
        isCorrect: false
      },
      {
        answerText: 'What are M&Ms?',
        isCorrect: false
      },
      {
        answerText: 'What is Mars Bar?',
        isCorrect: false
      },
      {
        answerText: 'What are Reese\'s Pieces?',
        isCorrect: true
      }
    ],
    category: 'The 80s',
    score: 200
  },
  {
    title: 'A billion people tuned in to watch this 1981 event',
    answers: [
      {
        answerText: 'What was Ronald Reagan\'s presidential inauguration?',
        isCorrect: false
      },
      {
        answerText: 'What was Prince Charles and Princess Diana\'s Wedding?',
        isCorrect: true
      },
      {
        answerText: 'What was NASA\'s launch of Space Shuttle Columbia?',
        isCorrect: false
      },
      {
        answerText: 'What was the debut of "Raiders of the Lost Ark"?',
        isCorrect: false
      }
    ],
    category: 'The 80s',
    score: 400
  },
  {
    title: 'This restaurant often asked "Where\'s the beef?" in their commercials',
    answers: [
      {
        answerText: 'What is Arby\'s?',
        isCorrect: false
      },
      {
        answerText: 'What is McDonald\'s?',
        isCorrect: false
      },
      {
        answerText: 'What is Wendy\'s?',
        isCorrect: true
      },
      {
        answerText: 'What is Burger King?',
        isCorrect: false
      }
    ],
    category: 'The 80s',
    score: 600
  },
  {
    title: 'Since the release of the first novel in 1997, this series of fantasy novels has become an international best-seller and was adapted as a Hollywood film',
    answers: [
      {
        answerText: 'What is "Harry Potter"?',
        isCorrect: true
      },
      {
        answerText: 'What is "Lord of the Rings"?',
        isCorrect: false
      },
      {
        answerText: 'What are "The Chronicles of Narnia"?',
        isCorrect: false
      },
      {
        answerText: 'What is "A Game of Thrones"?',
        isCorrect: false
      }
    ],
    category: 'The 90s',
    score: 200
  },
  {
    title: 'This American rock band sang "Closing Time" in 1998',
    answers: [
      {
        answerText: 'Who is Blur?',
        isCorrect: false
      },
      {
        answerText: 'Who is Semisonic?',
        isCorrect: true
      },
      {
        answerText: 'Who is Nirvana?',
        isCorrect: false
      },
      {
        answerText: 'Who is Oasis?',
        isCorrect: false
      }
    ],
    category: 'The 90s',
    score: 400
  },
  {
    title: 'This top selling game console changed the standard media storage type from cartridges to compact discs',
    answers: [
      {
        answerText: 'What is Sony\'s Playstation?',
        isCorrect: true
      },
      {
        answerText: 'What is Sega\'s Dreamcast?',
        isCorrect: false
      },
      {
        answerText: 'What is Nintendo\'s Gamecube?',
        isCorrect: false
      },
      {
        answerText: 'What is Sega\'s Genesis?',
        isCorrect: false
      }
    ],
    category: 'The 90s',
    score: 600
  }
]

questions.forEach(question => {
  Question.create(question)
    .then(q => console.log('Successfully uploaded questions:', q))
    .catch(err => console.error(err))
})
