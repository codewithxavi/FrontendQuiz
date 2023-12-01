const Test1 = {
    questions: [
        {
            id: 1,
            question: "What is the purpose of the HTML 'data' attribute?",
            options: [
                "To store custom data for an HTML element.",
                "To define a dataset in HTML.",
                "To link external data sources to an HTML document.",
                "To validate input fields in HTML forms.",
            ],
            answer: "To store custom data for an HTML element.",
        },
        {
            id: 2,
            question:
                "Explain the functionality of the 'figure' and 'figcaption' elements in HTML.",
            options: [
                "They are used for embedding videos in HTML.",
                "They create images with captions in HTML.",
                "They structure forms and input elements in HTML.",
                "They are utilized for audio playback in HTML.",
            ],
            answer: "They create images with captions in HTML.",
        },
        {
            id: 3,
            question:
                "Describe the use of the 'details' and 'summary' elements in HTML5.",
            options: [
                "They are used for defining mathematical formulas in HTML.",
                "They provide a summary of a web page's content.",
                "They structure data tables in HTML.",
                "They create collapsible content sections in HTML.",
            ],
            answer: "They create collapsible content sections in HTML.",
        },
        {
            id: 4,
            question: "What does the 'download' attribute do in HTML?",
            options: [
                "It initiates a file upload when clicked.",
                "It triggers an automatic download of a linked resource.",
                "It enables dynamic content loading in HTML documents.",
                "It defines the font used for text in HTML elements.",
            ],
            answer: "It triggers an automatic download of a linked resource.",
        },
        {
            id: 5,
            question: "Explain the purpose of the HTML 'hidden' attribute.",
            options: [
                "To hide content from specific browsers.",
                "To conceal data from search engines.",
                "To prevent content from being displayed on the web page.",
                "To encrypt sensitive information in HTML forms.",
            ],
            answer: "To prevent content from being displayed on the web page.",
        },
        {
            id: 6,
            question: "How is the 'sandbox' attribute used in HTML?",
            options: [
                "To create a secure environment for executing scripts in HTML documents.",
                "To restrict the types of images that can be displayed in HTML.",
                "To define storage limitations for cookies in HTML forms.",
                "To prevent user interaction within an HTML document.",
            ],
            answer: "To create a secure environment for executing scripts in HTML documents.",
        },
        {
            id: 7,
            question: "What role does the 'pre' tag serve in HTML?",
            options: [
                "It formats text exactly as it appears in the HTML code.",
                "It specifies the preferred language for the content in HTML.",
                "It enables printing of the HTML document.",
                "It adjusts the font size of text in HTML elements.",
            ],
            answer: "It formats text exactly as it appears in the HTML code.",
        },
        {
            id: 8,
            question:
                "Describe the functionality of the 'meter' element in HTML5.",
            options: [
                "It measures the temperature of the web page.",
                "It displays scalar measurements within a known range.",
                "It calculates the performance metrics of an HTML document.",
                "It formats text content based on measurement units in HTML.",
            ],
            answer: "It displays scalar measurements within a known range.",
        },
        {
            id: 9,
            question:
                "What does the 'required' attribute do in HTML forms?",
            options: [
                "It ensures the user's browser meets specific requirements for displaying HTML content.",
                "It verifies the validity of the submitted data in HTML forms.",
                "It imposes a mandatory field in an HTML form that must be filled out.",
                "It limits the file size for attachments in HTML form submissions.",
            ],
            answer: "It imposes a mandatory field in an HTML form that must be filled out.",
        },
        {
            id: 10,
            question:
                "Explain the purpose of the 'autocomplete' attribute in HTML forms.",
            options: [
                "It auto-suggests possible values for an input field in HTML forms.",
                "It completes HTML code syntax automatically.",
                "It authenticates user credentials in HTML forms.",
                "It optimizes the display of autocomplete options in dropdown menus.",
            ],
            answer: "It auto-suggests possible values for an input field in HTML forms.",
        },
    ],
};

const questionContainer = document.getElementById("question-text");
const questionNumberContainer = document.getElementById("question-number");
const optionsContainer = document.getElementById("options-container");

const questionParagraph = document.getElementById("question-paragraph");

const quizContainer = document.getElementById("quiz-container");

let currentQuestionIndex = 0;
let correctAnswers = 0;

// Function to initialize the quiz
function initializeQuiz() {
    // Shuffle the array of questions randomly
    Test1.questions.sort(() => Math.random() - 0.5);

    displayQuestion(currentQuestionIndex);
}

// Function to display a question and its options
function displayQuestion(index) {
    const currentQuestion = Test1.questions[index];

    // Update question text
    questionContainer.innerText = currentQuestion.question;

    // Update question number
    questionNumberContainer.innerText = index + 1;

    // Clear options container
    optionsContainer.innerHTML = "";

    // Create option elements for each option
    currentQuestion.options.forEach((option) => {
        const optionElement = createOptionElement(option, currentQuestion);
        optionsContainer.appendChild(optionElement);
    });
}

// Function to create an option element
function createOptionElement(option, currentQuestion) {
    const optionElement = document.createElement("a");
    optionElement.classList.add(
        "block",
        "dark:bg-[#3C4D67]",
        "dark:hover:bg-[#199AFC]",
        "bg-[#F3F4F6]",
        "hover:bg-[#FFFBFF]",
        "dark:text-stone-200",
        "text-[#7e7e7e]",
        "font-semibold",
        "p-4",
        "rounded-lg",
        "my-2",
        "transition",
        "duration-200",
    );
    optionElement.innerText = option;

    optionElement.addEventListener("click", () =>
        handleOptionClick(option, currentQuestion),
    );

    return optionElement;
}

// Function to handle option click
function handleOptionClick(option, currentQuestion) {
    // Check if option is correct
    if (option === currentQuestion.answer) {
        correctAnswers++;
    }

    // Increment current question index
    currentQuestionIndex++;

    // Check if there are more questions or quiz is finished
    if (currentQuestionIndex < Test1.questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        // Display quiz results or perform any final actions
        displayResults();
    }
}

// Function to display quiz results
function displayResults() {
    // Clear the options container
    optionsContainer.innerHTML = "";

    questionContainer.innerText = "Quiz Completed!";
    questionContainer.classList.add(
        "dark:text-stone-200",
        "text-3xl",
        "text-[#7e7e7e]",
        "font-semibold",
        "p-4",
        "rounded-lg",
        "my-2",
        "dark:hover:bg-[#199AFC]",
        "rounded-lg",
        "my-2",
    );

    questionParagraph.style.display = "none";

    questionNumberContainer.innerText = "";

    // Display quiz results or perform any final actions
    const resultText = document.createElement("p");
    resultText.innerText = `Total Correct Answers: ${correctAnswers}`;
    resultText.classList.add(
        "dark:text-stone-200",
        "text-3xl",
        "text-[#7e7e7e]",
        "font-semibold",
        "p-4",
        "rounded-lg",
        "my-2",
        "transition",
        "duration-200",
        "text-center",
        "bg-[#F3F4F6]",
        "dark:bg-[#3C4D67]",
        "dark:hover:bg-[#199AFC]",
        "rounded-lg",
        "my-2",
    );
    optionsContainer.appendChild(resultText);

    // Create a "Play Again" button
    const playAgainButton = document.createElement("button");
    playAgainButton.innerText = "Play Again";
    playAgainButton.classList.add(
        "w-full",
        "bg-purple-400",
        "dark:text-stone-200",
        "text-3xl",
        "text-[white]",
        "font-semibold",
        "p-4",
        "rounded-lg",
        "my-2",
        "transition",
    );
    playAgainButton.addEventListener("click", startQuizAgain);
    optionsContainer.appendChild(playAgainButton);
}

// Function to start the quiz again
function startQuizAgain() {
    // Reset quiz variables
    currentQuestionIndex = 0;
    correctAnswers = 0;

    // Make question-paragraph visible
    questionParagraph.style.display = "block";

    // Initialize the quiz again
    initializeQuiz();
}

// Initialize the quiz when the page loads
initializeQuiz();