// class Question {
//     #id;
//     #question;
//     #answer;

//     constructor(id, question, answer) {
//         this.#id = id;
//         this.#question = question,
//         this.#answer = answer;
//     }

//     get getId() {
//         return this.#id;
//     }

//     /**
//      * @param {any} id
//      */
//     set setId(id) {
//         this.#id = id;
//     }

//     get getQuestion() {
//         return this.#question;
//     }

//     /**
//      * @param {any} question
//      */
//     set setQuestion(question) {
//         this.#question = question;
//     }

//     get getAnswer() {
//         return this.#answer;
//     }

//     /**
//      * @param {any} answer
//      */
//     set setAnswer(answer) {
//         this.#answer = answer;
//     }

// }

let questionsList = [{id: 1, question: 'How many hearts does an octopus have?', answers: '0, 3, 1, 2' , correctAnswer: '3'},
{id: 2, question: 'What country has the highest life expectancy?', answers: 'Hong Kong, Tokyo, Seoul, Beijing', correctAnswer: 'Hong Kong'},
{id: 3, question: 'Where would you be if you were standing on the Spanish Steps? ', answers: 'Madrid, Rome, Paris, London', correctAnswer: 'Rome'},
{id: 4, question: 'Which language has the more native speakers: English or Spanish?', answers: 'English, Spanish, Both of them, None', correctAnswer: 'Spanish'},
{id: 5, question: 'What is the most common surname in the United States? ', answers: '', correctAnswer:'Smith'},
{id: 6, question: 'Who was the Ancient Greek God of the Sun? ', answers: '', correctAnswer: 'Apollo'},
{id: 7, question: 'What was the name of the crime boss who was head of the feared Chicago Outfit?', answers: 'Al Capone, Al Pacino, Robert De Niro, Lewis Hamilton', correctAnswer: 'Al Capone'},
{id: 8, question: 'What year was the United Nations established?', answers: '1940, 1955, 1945, 1942', correctAnswer: '1945'}, 
{id: 9, question: 'Who has won the most total Academy Awards? ', answers: 'Tim Burton, Walt Disney, Albert Einstein, Michael Jackson'}, 
{id: 10, question: 'What artist has the most streams on Spotify? ', answers: 'Ed Sheeran, Avicii, Drake, Snoop Dogg', correctAnswer: 'Drake'},
{id: 11, question: 'How many minutes are in a full week?', answers: '18000, 10080, 3600, 12356', correctAnswer: '10080'},
{id: 12, question: 'What car manufacturer had the highest revenue in 2020?', answers: 'Tesla, Volkswagen, BMW, Toyota', correctAnswer: 'Volkswagen' },
{id: 13, question: 'How many elements are in the periodic table?', answers: '118, 119, 240, 100', correctAnswer: '118'},
{id: 14, question: 'What company was originally called "Cadabra"?', answers: "Microsoft, Apple, Amazon, Xiaomi", correctAnswer: 'Amazon'},
{id: 15, question: 'How many faces does a Dodecahedron have?', answers: '12, 13, 56, 34', correctAnswer: '12'},
{id: 16, question: 'Queen guitarist Brian May is also an expert in what scientific field?', answers: 'Astronomy, Astrophysics, Physics, Experimental Physics', correctAnswer: 'Astrophysics'},
{id: 17, question: 'Aureolin is a shade of what color?', answers: 'Yellow, Red, Blue, Green', correctAnswer: 'Yellow'},
{id: 18, question: 'How many ghosts chase Pac-Man at the start of each game? ', answers: '3, 5, 2, 4', correctAnswer: '4'},
{id: 19, question: 'What Renaissance artist is buried in Rome\'s Pantheon?', answers: 'Raphael, Leonardo DaVinci, Michelangelo, Donatello', correctAnswer: 'Raphael'},
{id: 20, question: 'What shoe brand makes the "Mexico 66"?', answers: 'Nike, Adidas, Onitsuka Tiger, Puma', correctAnswer: 'Onitsuka Tiger'}, 
{id: 21, question: 'What game studio makes the Red Dead Redemption series? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'}, 
{id: 22, question: 'Who was the last Tsar of Russia? ', answers: 'Rockstar Games, Mickael II, Andrew I, Nicholas II', correctAnswer: 'Nicholas II'}, 
{id: 23, question: 'What character have both Robert Downey Jr. and Benedict Cumberbatch played? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'}, 
{id: 24, question: 'What country drinks the most coffee per capita?', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 25, question: 'Which planet in the Milky Way is the hottest? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 26, question: 'What is the 4th letter of the Greek alphabet? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 27, question: 'What sports car company manufactures the 911? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 28, question: 'What city is known as "The Eternal City"? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 29, question: 'Roald Amundsen was the first man to reach the South Pole, but where was he from?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 30, question: 'What is the highest-rated film on IMDb as of January 1st, 2022?', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 31, question: 'Who discovered that the earth revolves around the sun?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 32, question: 'What company was initially known as "Blue Ribbon Sports"? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'}, 
{id: 33, question: 'What art form is described as "decorative handwriting or handwritten lettering"?', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'}, 
{id: 34, question: 'Which planet has the most moons? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 35, question: 'What country has won the most World Cups? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 36, question: 'Complete the following lyrics - "I should have changed that stupid lock....."', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 37, question: 'Kratos is the main character of what video game series?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 38, question: 'In what country would you find Mount Kilimanjaro?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 39, question: 'What is a group of pandas known as?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 40, question: 'What European country experienced the highest rate of population decline from 2015 - 2020?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 41, question: 'How many bones do we have in an ear?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 42, question: 'Who famously crossed the Alps with elephants on the way to war with the Romans? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'}, 
{id: 43, question: 'True or False: Halloween originated as an ancient Irish festival.', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'}, 
{id: 44, question: 'What Netflix show had the most streaming views in 2021? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 45, question: 'Which grammy-nominated New York rapper died in April of 2021?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 46, question: 'What software company is headquartered in Redmond, Washington? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 47, question: 'What is the largest Spanish-speaking city in the world?', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 48, question: 'What is the world\'s fastest bird?  ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 49, question: 'In what country is the Chernobyl nuclear plant located? ', answers: 'Rockstar Games, Rockstar Games 2, Rockstar Games 3, Rockstar Games 4', correctAnswer: 'Rockstar Games'},
{id: 50, question: 'The Parthenon Marbles are controversially located in what museum? ', answers: 'The British Museum, The New York Museum, The Histopry Museum of Bucharest, The Spanish Museum', correctAnswer: 'The British Museum'}];
let isTaken = [false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false];

function generateQuestions() {
    let listOfQuestions = document.getElementById('questionsList');
    let question = document.createElement('h3');
    for (let i = 0; i < 10; ++i) {
        let id = Math.floor(Math.random() * 10);
        while (isTaken[id] === true) {
            id = Math.floor(Math.random() * 10);
        }
        console.log(id);
        let variants = '';
        for (let j = 0; j < 10; ++j) {
            if (id === questionsList[j].id && isTaken[id] === false) {
                question.textContent = '' + (i + 1) + '. ' + questionsList[j].question + '';
                console.log( questionsList[j].question);
                variants = questionsList[j].answers.split(', ');
                question.innerHTML += '<div>'
                for (let j = 0; j < variants.length; ++j) {
                    let input = document.createElement('input');
                    input.type = 'radio';
                    input.checked = false;
                    console.log(input.checked);
                    let label = document.createElement('label');
                    label.textContent = variants[j];
                    question.appendChild(input);
                    question.appendChild(label);
                }
                question.innerHTML += '</div>'
                isTaken[id] = true;
                break;
            }
        }
        listOfQuestions.appendChild(question);
        // if (isTaken[id] === false) {
        //     // question.innerHTML += '<div>'
        //     // for (let j = 0; j < variants.length; ++j) {
        //     //     let input = document.createElement('input');
        //     //     input.type = 'radio';
        //     //     input.checked = false;
        //     //     console.log(input.checked);
        //     //     let label = document.createElement('label');
        //     //     label.textContent = variants[j];
        //     //     question.appendChild(input);
        //     //     question.appendChild(label);
        //     // }
        //     // question.innerHTML += '</div>'
        //     // listOfQuestions.appendChild(question);
        //     // isTaken[id] = true;
        // }
    }    
}

generateQuestions();