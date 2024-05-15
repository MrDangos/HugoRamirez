let myAnswers = ["The Alchemis", "Clannad", "no", "J Cole", "Kendrick Lamar"];
let correctAnswers = 0;
function grabValue(event) {


    const selectedAnswer1 = document.querySelector('input[name="quest1"]:checked');
    const selectedAnswer2 = document.querySelector('input[name="quest2"]:checked');
    const selectedAnswer3 = document.querySelector('input[name="quest3"]:checked');
    const selectedAnswer4 = document.querySelector('input[name="quest4"]:checked');
    const selectedAnswer5 = document.querySelector('input[name="quest5"]:checked');

    if (selectedAnswer1 && selectedAnswer2 && selectedAnswer3 && selectedAnswer4 && selectedAnswer5) {
        if (selectedAnswer1.value === myAnswers[0]) {
            correctAnswers++;
            answerParagraph("1. Guess you looked at the song credits", "feedback1");
        } else {
            answerParagraph("1. Its The Alchemis! Probaly will never be on another BBL Dizzy song but probaly for the best", "feedback1");
        }

        if (selectedAnswer2.value === myAnswers[1]) {
            correctAnswers++;
            answerParagraph("2 .WOW you have good taste. Im so proud of you", "feedback2");

        } else {
            answerParagraph("2 .WOw yOu DarE To SaY thAt CLANNAD ISn'T thE bESt AniMe. I'M DiSappOiNteD jUst liKE yOur fAthEr WAs :(", "feedback2");
        }

        if (selectedAnswer3.value === myAnswers[2]) {
            correctAnswers++;
            answerParagraph("3. You know your stuff! I think?", "feedback3");

        } else {
            answerParagraph("3. I mean that was its main selling point beside the story yet it wasnt taken in one shot?", "feedback3");
        }

        if (selectedAnswer4.value === myAnswers[3]) {
            correctAnswers++;
            answerParagraph("4. Are you also a J Cole fan? Cuase and I am I was so disappointed when this was realesed, but don't even get me started on the appolagy, THAT M*****F****** APOLOGY!!?? >:[", "feedback4");
        } else {
            answerParagraph("4. You guessed incorrectly but for once I'm not disappointed. PS. don't look up who wrote the lyrics might save you some sadness and disappointment", "feedback4");
        }

        if (selectedAnswer5.value === myAnswers[4]) {
            correctAnswers++;
            answerParagraph("5. Wise choice you shall be spared", "feedback5");
        } else {
            answerParagraph("5. I mean you should have seen this coming. The 1st question was about the diss that KDOT made and I also keep calling him 'BBL Drizzy' that didn't set off at least 1 flag?", "feedback5");
        }


        if (correctAnswers === 5){
            answerParagraph("Your total score is: " + correctAnswers + "/5. WOW you did great :] but does that mean you like J Cole? I hope not for your own sake." , "feedback6");
            event.preventDefault();
        } else if (correctAnswers === 0){
            answerParagraph("Your total score is: " + correctAnswers + "/5. " + " WOW you got 0/5... I'm not even disappointed anymore I'm just worried about you" + "IS WHAT I WOULD SAY IF I WAS YOUR DAD BUT UNLIKE HIM I CAME BACK AND I HAVE SOME MILK!!!!!!!!", "feedback6");
            event.preventDefault();
        } else {
            answerParagraph("Your total score is: " + correctAnswers + "/5. I would have gotten 5/5 but thats just me", "feedback6");
            event.preventDefault();
        }

    } else {
        alert("Please answer all questions before submitting idoit.", "missingAnswer");
    }
}

function answerParagraph(message) {
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
}

const timer = new Date().getTime() + 0.2 * 60 * 1000; 
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    const currentTime = new Date().getTime();
    const timeDifference = timer - currentTime;

    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = `Time Remaining: ${minutes} minutes ${seconds} seconds`;

    const submitButton = document.querySelector('button[type="button"]');

    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "Time's up!";
        submitButton.style.display = 'none';
        
        answerParagraph("U kinda slow but as my mom would say 'Your not slow your special'.", "timeout");
    }
}