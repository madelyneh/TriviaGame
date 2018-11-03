//make question object with answers and images for the correct answers and so on
//the correct answer is in '0' index
let questions  = [
    {
        question: "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
        images: "assets/images/harry-underwater.jpg"
    },
    {
        question: "What is the name of Fred and George's joke shop?",
        images: "assets/images/jokeshop.jpg"
    },
    {
        question: "Which of these is NOT one of the Unforgivable Curses?",
        images: "assets/images/curse.jpg"
    },
    {
        question: "Who guards the entrance to the Gryffindor common room?",
        images: "assets/images/fatLady.jpg"
    },
    {
        question: "What does O.W.L. stand for?",
        images: "assets/images/owlexam.jpg"
    },
    {
        question: "A wizard who cannot do magic is known as a:",
        images: "assets/images/squib.png"
    },
    {
        question: "What does one say to close the Marauder's Map and make it blank again?",
        images: "assets/images/map.jpg"
    },
    {
        question: "The three kinds of balls used in Quidditch are Bludgers, Snitches, and...",
        images: "assets/images/harryGame.jpg"
    },
    {
        question: "Who has been stealing Harry's letters from Ron and Hermione at the beginning of 'Harry Potter and the Chamber of Secrets'?",
        images: "assets/images/dobby.jpeg"
    },
    {
        question: "How many Weasley siblings are there?",
        images: "assets/images/weasley.jpg"
    }

];

let options = [
    ["He eats gillyweed", "He transforms into a shark", "He kisses a mermaid", "He performs a bubble-head charm"],

    ["Weasley's Wizard Wheezes", "Fred and George's Wonder Emporium", "Zonko's Joke Shop", "Weasley Joke Emporium"],

    ["Sectumsempra", "Cruciatus Curse", "Imoerius Curse", "Avada Kedavra"],

    ["The Fat Lady", "The Fat Friar", "The Bloody Baron", "The Grey Lady"],

    ["Ordinary Wizarding Level", "Outstanding Wonderful Luck", "Outstanding Wizard Learning", "Official Wizarding Level"],

    ["Squib", "Bleaker", "Duddle", "Wizont"],

    ["Mischief managed", "Nothing to see here", "All done", "Hello Professor"],

    ["Quaffles", "Wiffles", "Boccis", "Foozles"],

    ["Dobby", "Dumbledore", "Draco Malfoy", "The Dursley's"],

    ["7", "3", "5", "10"],


]


//Global variables
let correctAnswers = [];

let wrongAnswers = [];

let noResponse = [];

let currentQuestion;

let usedQuestions;

let answers = [];

let usedAnswers;

let image;

let randomNumber;

let randomAnswers = [];

let intervalId;

let clockRunning = false;

let newDiv = $("<div>");
let newDiv2 = $("<div>");
let newDiv3 = $("<div>");
let span = $("<span>");


//Make a button to start out
//make a  function to loop through the questions object and give the questions
//make a question timer only 30 sec per question
//make  a function to set the game. Have a start game button to start the game.
window.onload = function() {
    $("#startBtn").on("click", setGame);



    //sets the game at the beginning and resets at the end
    function setGame() {
        correctAnswers = [];
        wrongAnswers = [];
        noResponse = [];
        currentQuestion ;
        usedQuestions = [];
        answers ;

        $("#btnContainer").hide();

        $("#gameArea").append(newDiv);
        newDiv.addClass("timer").text("Guessing time remaining: ");
        $(".timer").append(span);
        span.addClass("counter");

        $("#gameArea").append(newDiv2);
        newDiv2.addClass("question");

        $("#gameArea").append(newDiv3);
        newDiv3.addClass("answers");


        setQuestion();
        timer.start();
        
    };


    function setQuestion() {

        currentQuestion = questions[0];
        image = currentQuestion.images;
        usedQuestions = questions.splice(0,1);
        console.log(currentQuestion);

        $(".question").text(currentQuestion.question);

        answers = options[0];
        usedAnswers = options.splice(0,1);
        randomAnswers = answers.shuffle();
 
//pushes the random answers to the screen
        randomAnswers.forEach(function(element) {
            let button = $("<button>");
            button.addClass("choices");
            button.attr("text", element);
            button.text(element);
            $(".answers").append(button);
        
        });
           
    };
    
//function that shuffles my answers array
    Array.prototype.shuffle = function() {
        let input = this;
         
        for (let i = input.length-1; i >=0; i--) {
         
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex]; 
             
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
        return input;
    };

};    

    let timer = {

        time: 30,

        //make function that will start the timer and if another button is clicked will respond
        start: function() {
            if (!clockRunning) {
                intervalId = setInterval(timer.count, 1000);
                clockRunning = true;
                console.log(intervalId);
                
            }
        },

        stop: function() {

        },

        reset: function() {

        },

        count: function() {
            let runningCount = 1++;
             let runningTime = timer.time - runningCount;
             $(".counter").text(runningTime);
        },


        //if not clicked will time out and "loose"
    };




    //after the question was answered correctly show the  correct screen and then move to the next question

    //if they don't answer time out the question and  add that to the notAnswered array.

    //at the end show the correct and incorrect number of answers and a button to restart the game

