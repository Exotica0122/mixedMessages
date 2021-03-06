// theme: Riddle

const messages = {
    greetingsMessage: [
        'Whats up',
        'How are you today',
        'Your Dumb',
        '안녕하세요',
        'こんにちは'
    ],
    riddleMessage: [
        'What has to be broken before you can use it?',
        'What kind of band never plays music?',
        'What has words, but never speaks?',
        'I am an odd number. Take away a letter and I become even. What number am I?',
        'What five-letter word becomes shorter when you add two letters to it?',
        'I can be cracked, I can be made. I can be told, I can be played. What am I?'
    ],
    answerMessage: [
        'An Egg',
        'A rubber band',
        'A book',
        'Seven',
        'Short',
        'A Joke'
    ],
    laughingMessage: [
        'HAHAHAHAHAHAHAHAH',
        'LOOOOOOOOOOOOOOOL',
        '...',
        'Funny. Right?',
        'WTF',
        "What? That wasn't that boring",
        'lul',
        'KEKW',
        'PEPEGA',
        'Surely that one was good'
    ]
}

const randomizeWord = array => {
    const wordIndex = Math.floor(Math.random() * array.length)
    return array[wordIndex];
}

const greetings = randomizeWord(messages[greetingsMessage]);
const riddle = randomizeWord(messages[riddleMessage]);
const answer = randomizeWord(messages[answerMessage]);
const laugh = randomizeWord(messages[laughingMessage]);

console.log('Maid Bot says: ', greetings);
console.log('Let me tell you a riddle...', riddle);
console.log('The answer was...', answer);
console.log(laugh);