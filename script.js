const questions = [
    //Multiple Choice
     {
         question: "What is the *first* thing you should do before using a box cutter or utility knife?",
         options: ["Sharpen the blade.", "Inspect the tool for damage and ensure the blade is secure.", "Put on your gloves.", "Inform your supervisor."],
         correctAnswer: "Inspect the tool for damage and ensure the blade is secure."
     },
     {
         question: "When cutting, which direction should you *always* cut?",
         options: ["Towards your body.", "Away from your body and other people.", "In a circular motion.", "Whichever direction is fastest."],
         correctAnswer: "Away from your body and other people."
     },
     {
         question: "What type of gloves are *best* for protecting your hands while using a cutting tool?",
         options: ["Thin latex gloves.", "Cut-resistant gloves made of materials like Kevlar or Dyneema.", "Leather work gloves.", "Any type of glove is fine."],
         correctAnswer: "Cut-resistant gloves made of materials like Kevlar or Dyneema."
     },
     {
         question: "If a box cutter blade becomes dull, you should:",
         options: ["Continue using it, applying more pressure.", "Sharpen it immediately.", "Safely replace the blade with a new, sharp one.", "Throw it away in the regular trash."],
         correctAnswer: "Safely replace the blade with a new, sharp one."
     },
     {
         question: "What is the proper way to carry a box cutter when not actively using it?",
         options: ["Blade extended, held loosely in your hand.", "Blade retracted, in a designated pouch or holder.", "Blade extended, tucked into your pocket.", "Blade retracted, placed on a nearby shelf."],
         correctAnswer: "Blade retracted, in a designated pouch or holder."
     },
     {
         question: "When cutting through thick cardboard, what technique should you use?",
         options: ["Use maximum force in one long stroke.", "Make several shallow cuts, gradually increasing pressure.", "Saw back and forth rapidly.", "Use a different tool, like a saw."],
         correctAnswer: "Make several shallow cuts, gradually increasing pressure."
     },
     {
         question: "Before cutting a strapped box, what should you check for?",
         options: ["The color of the straps.", "The weight of the box.", "Potential tension in the straps and the possibility of them snapping back.", "The time of day."],
         correctAnswer: "Potential tension in the straps and the possibility of them snapping back."
     },
     {
         question: "What is the safest way to dispose of used blades?",
         options: ["Throw them in the regular trash can.", "Place them in a designated sharps container.", "Leave them on a workbench for someone else to handle.", "Wrap them in paper towels and throw them away."],
         correctAnswer: "Place them in a designated sharps container."
     },
     {
         question: "If you find a damaged box cutter, you should:",
         options: ["Try to fix it yourself.", "Tag it out of service and report it to your supervisor.", "Continue using it carefully.", "Hide it so no one else uses it."],
         correctAnswer: "Tag it out of service and report it to your supervisor."
     },
     {
         question: "What should you do if you accidentally cut yourself, even slightly?",
         options: ["Ignore it; it's just a small cut.", "Immediately report the incident to your supervisor and seek first aid.", "Wrap it with a paper towel and continue working.", "Tell a coworker, but don't report it officially."],
         correctAnswer: "Immediately report the incident to your supervisor and seek first aid."
     },
     {
         question: "What is a good practice for maintaining a clear cutting area?",
         options: ["Ensure there are no obstructions, debris, or tripping hazards.", "Keep the area dimly lit to reduce glare.", "Place all your tools on the floor around you.", "Work in a crowded area to get help quickly if needed."],
         correctAnswer: "Ensure there are no obstructions, debris, or tripping hazards."
     },
     {
         question: "When cutting open boxes, what should you be aware of regarding the contents?",
         options: ["The contents might be fragile or shift unexpectedly.", "The contents are always securely packed.", "You can cut as deeply as you want without worrying about the contents.", "It's okay to use the box cutter to pry open the box."],
         correctAnswer: "The contents might be fragile or shift unexpectedly."
     },
     // True/False converted to Multiple Choice
     {
         question: "You should always use the sharpest blade possible for cutting tasks.",
         options: ["True", "False"],
         correctAnswer: "True"
     },
     {
         question: "It's okay to use a box cutter with a slightly loose blade if you're careful.",
         options: ["True", "False"],
         correctAnswer: "False"
     },
     {
         question: "You should always wear safety glasses when using any type of cutting tool.",
         options: ["True", "False"],
         correctAnswer: "True"
     },
     {
         question: "It's acceptable to leave a box cutter with the blade extended on a workbench if you're coming right back.",
         options: ["True", "False"],
         correctAnswer: "False"
     },
     {
         question: "If a coworker is using a cutting tool incorrectly, it's best to ignore it to avoid conflict.",
         options: ["True", "False"],
         correctAnswer: "False"
     },
     {
         question: "Using a cutting tool on an unstable surface is safe as long as you are careful.",
         options: ["True", "False"],
         correctAnswer: "False"
     },
     {
        question: "You should always inspect the area *beneath* your cutting surface before cutting.",
         options: ["True", "False"],
         correctAnswer: "True"
     },
     {
         question: "A retractable blade is generally safer than a fixed blade.",
         options: ["True", "False"],
         correctAnswer: "True"
     },

      // Short Answer converted to Multiple Choice
      {
         question: "What does PPE stand for, and what PPE is essential when using cutting tools?",
         options: [
             "Personal Protective Equipment; Cut-resistant gloves and safety glasses",
             "Proper Placement Essentials; Hard hat and steel-toed boots",
             "Possible Problem Evaluation; Hearing protection and a respirator",
             "Preventative Procedure Execution; A high-visibility vest and gloves"
         ],
         correctAnswer: "Personal Protective Equipment; Cut-resistant gloves and safety glasses"
     },
     {
         question: "Why is it important to keep your non-cutting hand away from the cutting path?",
         options: [
             "To prevent accidental cuts.",
             "To maintain balance.",
             "To keep the tool clean.",
             "To look professional."
         ],
         correctAnswer: "To prevent accidental cuts."
     },
     {
         question: "Which describes the proper stance when using a cutting tool?",
         options: [
             "Stable footing, body positioned to cut away from yourself, clear cutting path.",
             "Standing on one leg, leaning towards the cut.",
             "Sitting down, with the cutting surface on your lap.",
             "Holding the tool with both hands, close to your body."
         ],
         correctAnswer: "Stable footing, body positioned to cut away from yourself, clear cutting path."
     },
     {
         question: "Why should you *not* use excessive force when cutting?",
         options: [
             "Increased risk of losing control of the tool, blade breakage, and injury.",
             "It makes the blade sharper.",
             "It saves time.",
             "It's more comfortable."
         ],
         correctAnswer: "Increased risk of losing control of the tool, blade breakage, and injury."
     },
     {
         question: "Why know the location of the first aid kit and how to report an injury?",
         options: [
             "To ensure prompt treatment and proper documentation in case of an accident.",
             "To impress your supervisor.",
             "It's not important.",
             "Only the supervisor needs to know."
         ],
         correctAnswer: "To ensure prompt treatment and proper documentation in case of an accident."
     },
      {
         question: "What is a safe alternative to a box cutter for opening a plastic-wrapped pallet?",
         options: [
             "Safety knife with a shrouded blade, film cutter, or appropriate scissors",
             "A regular kitchen knife",
             "Your bare hands",
             "A hammer"
         ],
         correctAnswer: "Safety knife with a shrouded blade, film cutter, or appropriate scissors"
     },
     {
         question: "What is a hazard of using a box cutter near electrical wiring?",
         options: [
             "Risk of cutting through insulation, causing electrocution or short circuit.",
             "The box cutter might get magnetized.",
             "There is no hazard.",
             "It will dull the blade faster."
         ],
         correctAnswer: "Risk of cutting through insulation, causing electrocution or short circuit."
     },
     {
         question: "Why is good lighting important in a cutting area?",
         options: [
             "To improve visibility and reduce the chance of errors and injuries.",
             "To make the area look nicer.",
             "To keep the area warm.",
             "It doesn't matter."
         ],
         correctAnswer: "To improve visibility and reduce the chance of errors and injuries."
     },
      {
         question: "How often should cutting tools be inspected for safe use?",
         options: ["Before each use", "Once a week", "Once a month", "Only when they seem damaged"],
         correctAnswer: "Before each use"
     },
     {
         question: "What is the benefit of having a designated cutting station or area?",
         options: [
             "Reduces clutter, provides a stable surface, minimizes distractions, and promotes safety.",
             "It's faster.",
             "It uses fewer tools.",
             "There is no benefit."
         ],
         correctAnswer: "Reduces clutter, provides a stable surface, minimizes distractions, and promotes safety."
     }

];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const startButton = document.getElementById('start-button');
const resultElement = document.getElementById('result');
const nextButton = document.createElement('button');
nextButton.textContent = 'Next Question';
nextButton.id = 'next-button';
nextButton.style.display = 'none';
nextButton.addEventListener('click', showQuestion);
document.querySelector('.quiz-container').appendChild(nextButton);

let currentQuestionIndex = 0;
let score = 0;
const numQuestionsToAsk = 10; // Ask only 10 questions
let shuffledQuestions = [];

// Function to select a subset of questions randomly
function selectRandomQuestions(allQuestions, count) {
    const shuffled = shuffle(allQuestions); // Shuffle all questions
    return shuffled.slice(0, count); // Take the first 'count' questions
}

//shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Starts the quizz
function startQuiz() {
    shuffledQuestions = selectRandomQuestions(questions, numQuestionsToAsk); // Select 10 random questions
    currentQuestionIndex = 0;
    score = 0;
    startButton.style.display = 'none'; // Hide the start button
    nextButton.style.display = 'block'; // Show the next button
    document.getElementById('question-container').style.display = 'block';//shows the question container
    document.getElementById('main-title').style.display = 'none'; // Hide the main title
    document.getElementById('quiz-description').style.display = 'none'; // Hide description
    document.getElementById('user-name').style.display = 'none'; // Hide the name input
    resultElement.textContent = '';
    showQuestion();
    updateBackground(); // Set the initial background *before* showing the first question
}

//Function to show the question
function showQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        let currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = ''; // Clear previous options

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectAnswer(option, button));
            optionsElement.appendChild(button);
        });
        updateBackground(); // Update background every two questions
    } else {
        showScore();
    }
}

//Function for selecting an answer
function selectAnswer(selectedOption, button) {
    const correct = shuffledQuestions[currentQuestionIndex].correctAnswer;
      // Disable all option buttons
    const allOptions = optionsElement.querySelectorAll('.option');
    allOptions.forEach(opt => {
        opt.disabled = true;
        //Check to see if it is correct and apply classes
        if(opt.textContent === correct){
            opt.classList.add('correct')
        }
    });

    if (selectedOption === correct) {
        score++;
        button.classList.add('correct');

    } else {
        button.classList.add('incorrect');
    }

    currentQuestionIndex++;

}

// Function to send results to Google Sheet
function sendResults(score, totalQuestions) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwL4doI2S8hv_f2Zn-yRojOfz76V5JibiPp-MHC9iexdpB6RYTbCfzgiNM3erj1h0ha/exec'; //  !!! REPLACE THIS WITH YOUR WEB APP URL !!!

    // Get the user's name from the input field.  If it's empty, use 'Anonymous'.
    const userName = document.getElementById('user-name').value || 'Anonymous';


    // Create the data object to be sent.
    const data = {
        score: score,
        totalQuestions: totalQuestions,
        user: userName //  Include the user's name
    };

    // Use fetch to send a POST request to the Google Apps Script.
    fetch(https://script.google.com/macros/s/AKfycbwL4doI2S8hv_f2Zn-yRojOfz76V5JibiPp-MHC9iexdpB6RYTbCfzgiNM3erj1h0ha/exec, {
        method: 'POST',
        mode: 'cors', // Important for cross-origin requests
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Convert the data object to a JSON string
    })
    .then(response => response.json()) // Parse the JSON response from the Apps Script
    .then(data => {
        if (data.result === 'success') {
            console.log('Data sent successfully!');
            // You could display a success message to the user here.
        } else {
            console.error('Error sending data:', data.error);
            // Display an error message to the user.
            alert('There was an error saving your results. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error sending data:', error);
        alert('There was an error saving your results. Please try again later.');
    });
}


//Function to display the score
function showScore() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none'; // Hide next button
    resultElement.textContent = `You scored ${score} out of ${shuffledQuestions.length}!`;

    // Send results to Google Sheet
    sendResults(score, shuffledQuestions.length);


     const restartButton = document.createElement('button');
    restartButton.id = 'restart-button';
    resultElement.appendChild(restartButton);

      // Style the restart button
    restartButton.style.backgroundColor = '#333'; // Or any color you prefer
    restartButton.style.color = 'white';
    restartButton.style.padding = '10px 15px';
    restartButton.style.border = 'none';
    restartButton.style.borderRadius = '6px'; // Add rounded corners
    restartButton.style.cursor = 'pointer';
    restartButton.style.marginTop = '15px'; // Add some space above the button
    restartButton.style.fontSize = '1em'; // Consistent font size

    if (score < 10) {
        restartButton.textContent = 'Please Try Again';
        restartButton.onclick = () => {
            location.reload(); // Reload the entire page
        };
    } else {
        restartButton.textContent = 'Restart Quiz';
        restartButton.onclick = startQuiz; // Call startQuiz to restart
    }

}
// Function to update the background image.  IMPORTANT!
function updateBackground() {
    if (currentQuestionIndex % 2 === 0) {
        // Change every two questions
        const imageIndex = Math.floor(currentQuestionIndex / 2) % 5 + 1; // Cycle through images 1 to 5

        // VERY IMPORTANT:  Adjust the path if your images are in a subdirectory!
        document.body.style.backgroundImage = `url('images/background${imageIndex}.jpg')`;  // Correct path
    }
}
// Event listener for the start button
startButton.addEventListener('click', startQuiz);
