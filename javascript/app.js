//make question object with answers and images for the correct answers and so on
//the correct answer is in '0' index
let questions  = [
    {
        question: "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
        images: "assets/images/harry-underwater.jpg",
        correctAnswer: "He eats gillyweed",
    },
    {
        question: "What is the name of Fred and George's joke shop?",
        images: "assets/images/jokeshop.jpg",
        correctAnswer: "Weasley's Wizard Wheezes",
    },
    {
        question: "Which of these is NOT one of the Unforgivable Curses?",
        images: "assets/images/curse.jpg",
        correctAnswer: "Sectumsempra",
    },
    {
        question: "Who guards the entrance to the Gryffindor common room?",
        images: "assets/images/fatLady.jpg",
        correctAnswer: "The Fat Lady",
    },
    {
        question: "What does O.W.L. stand for?",
        images: "assets/images/owlexam.jpg",
        correctAnswer: "Ordinary Wizarding Level",
    },
    {
        question: "A wizard who cannot do magic is known as a:",
        images: "assets/images/squib.png",
        correctAnswer: "Squib",
    },
    {
        question: "What does one say to close the Marauder's Map and make it blank again?",
        images: "assets/images/map.jpg",
        correctAnswer: "Mischief managed",
    },
    {
        question: "The three kinds of balls used in Quidditch are Bludgers, Snitches, and...",
        images: "assets/images/harryGame.jpg",
        correctAnswer: "Quaffles",
    },
    {
        question: "Who has been stealing Harry's letters from Ron and Hermione at the beginning of 'Harry Potter and the Chamber of Secrets'?",
        images: "assets/images/dobby.jpeg",
        correctAnswer: "Dobby",
    },
    {
        question: "How many Weasley siblings are there?",
        images: "assets/images/weasley.jpg",
        correctAnswer: "7",
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

let theRightOnes = ["He eats gillyweed", "Weasley's Wizard Wheezes", "Sectumsempra", "The Fat Lady", "Ordinary Wizarding Level", "Squib", "Mischief managed", "Quaffles", "Dobby", "7"];


//Global variables
let correctAnswers = 0;
let wrongAnswers = 0;
let noResponse = 0;

let questionsAsked = 0;

let currentQuestion;

let usedQuestions;

let answers = [];

let usedAnswers;

let image;

let randomNumber;

let randomAnswers = [];

let guess ;

let btnClicked ;

let clockRunning = false;

let newDiv = $("<div>");
let newDiv2 = $("<div>");
let newDiv3 = $("<div>");
let newDiv4 = $("<div>");
let newDiv5 = $("<div>");
let newDiv6 = $("<div>");
let newDiv7 = $("<div>");
let newDiv8 = $("<div>");
let newDiv9 = $("<div>");

let newImage = $("<img>");
let btn = $("<button>") ;
let span = $("<span>");


// window.onload = function() {
    $(".startBtn").on("click", setGame);

// };


    //sets the game at the beginning and resets at the end
    function setGame() {
        correctAnswers = 0;
        wrongAnswers = 0;
        noResponse = 0;
        questionsAsked = 0;
        currentQuestion ;
        usedQuestions = [];
        answers ;

        $("#gameArea").empty();

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

      

        $(".choices").remove();
        $(".choices").removeAttr();
            
        $(".choices").text("");


        currentQuestion = questions[0];
        image = currentQuestion.images;
        usedQuestions = questions.splice(0, 1);
    

        $(".question").text(currentQuestion.question);

        
        answers = options[0];
        usedAnswers = options.splice(0,1);
        randomAnswers = answers.shuffle();
        console.log(answers);
 
//pushes the random answers to the screen
        randomAnswers.forEach(function(element) {
            button = $("<button>");
            button.addClass("choices");
            button.attr("text", element);
            button.text(element);
            $(".answers").append(button);
        });


        $(".choices").on("click", function() {
        btnClicked = $(this).attr("text");

            questionsAsked ++;
        
            if (theRightOnes.includes(btnClicked) == 1) {
                response.correct();
               
                if (questionsAsked === 10) {
                    setTimeout(response.gameOver, 5000);
                    
                } else {
                
                
                setTimeout(nextQuestion, 5000);
                };
            };

            if (!theRightOnes.includes(btnClicked)) {
                response.wrong();

                if (questionsAsked === 10) {
                    setTimeout(response.gameOver, 5000);
                    
                } else {
                
                
                setTimeout(nextQuestion, 5000);
                };
            };
            
        });
    
    };

    //clears the old question and puts in the next time.
    //also pushes the answers into the correct array based on if it was right or not
    function nextQuestion() {
        $("#gameArea").empty();
        
        answers = [];
        randomAnswers = [];
    
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

  //function that hides the questions, answers, and timer. that also displays the correct guess or not
  let response = {

    correct: function() {
    
        $("#gameArea").empty()
        timer.stop();
        timer.time = 30;
        
        $("#gameArea").append(newDiv4);
        newDiv4.addClass("answerResponse");
        $(".answerResponse").text("Correct!");
        
        $("#gameArea").append(newImage);
        newImage.addClass("answerImage");
        newImage.attr("src", image);

        correctAnswers ++;
       
        
    },
    wrong: function() {
        $("#gameArea").empty();
        timer.stop();
        

        $("#gameArea").append(newDiv4);
        newDiv4.addClass("answerResponse");
        $(".answerResponse").text("Wrong. The correct answer was: " + currentQuestion.correctAnswer + ".");

        $("#gameArea").append(newImage);
        newImage.addClass("answerImage");
        newImage.attr("src", image);

        wrongAnswers ++;
    },

    timeOut: function() {
        $("#gameArea").empty();
        timer.stop();
        

        $("#gameArea").append(newDiv4);
        newDiv4.addClass("answerResponse");
        $(".answerResponse").text("Times up! The correct answer was: " + currentQuestion.correctAnswer + ".");

        $("#gameArea").append(newImage);
        newImage.addClass("answerImage");
        newImage.attr("src", image);

        noResponse ++;
        questionsAsked ++;

    },

    gameOver: function() {
        $("#gameArea").empty();
        timer.stop();

        newDiv7.addClass("end");
        newDiv7.append("Correct guesses: " + correctAnswers);
        $("#gameArea").append(newDiv7);

        newDiv8.addClass("end2");
        newDiv8.append("Wrong guesses: " + wrongAnswers);
        $("#gameArea").append(newDiv8);

        newDiv9.addClass("end3");
        newDiv9.append("No responses: " + noResponse);
        $("#gameArea").append(newDiv9);


        btn.addClass("restartBtn");
        btn.text("Wanna try again?");
        $("#gameArea").append(btn);

        $(".restartBtn").on("click", setGame);


    }

  };


    let timer = {

        time: 15,

        //make function that will start the timer and if another button is clicked will respond
        start: function() {
            $(".timer").show();
            timer.time = 15;
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true;
        },

        stop: function() {
            
            clearInterval(intervalId);
            clockRunning = false;

            timer.time = 15;
            $(".timer").hide();
            

        },

        count: function() {
            let runningCount = timer.time--;
            $(".counter").text(runningCount);

            if(runningCount === 0) {
                response.timeOut();

                setTimeout(nextQuestion, 5000);
                
            };    
             
        },

    };

  




    //after the question was answered correctly show the  correct screen and then move to the next question

    //if they don't answer time out the question and  add that to the notAnswered array.

    //at the end show the correct and incorrect number of answers and a button to restart the game

