//

//
const choices = [
        { name: "rock", defeats: "scissors" },
        { name: "paper", defeats: "rock" },
        { name: "scissors", defeats: "paper" },
];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
        return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(input) {
        return choices.find((choice) => choice.name == input.toLowerCase());
}

function playRound(humanChoice, computerChoice) {
        if (!humanChoice || !computerChoice) return;

        if (humanChoice.name == computerChoice.name) return "draw";

        if (humanChoice.defeats == computerChoice.name) {
                return "human";
        } else {
                return "computer";
        }
}

function playGame(hmnChoice) {
        const humanSelection = getHumanChoice(hmnChoice);
        const computerSelection = getComputerChoice();

        console.log(computerSelection);
        console.log(humanSelection);

        let roundRes = playRound(humanSelection, computerSelection);

        console.log("round results: ", roundRes);

        if (roundRes == "human") ++humanScore;
        else if (roundRes == "computer") ++computerScore;

        if (humanScore == 5 || computerScore == 5) {
                displayWinner(humanScore == 5 ? "human" : "computer");
        }
}

const btnsContainer = document.querySelector(".btns");

const btns = Array.from(btnsContainer.children);

console.log(btns);

btns.forEach((btn) => {
        btn.addEventListener("click", () => {
                if (humanScore == 5 || computerScore == 5) flushScore();

                playGame(btn.id);
        });

        btn.addEventListener("click", () => {
                editScore();
        });
});

function displayWinner(winner) {
        let resContainer = document.querySelector(".current-result .res");

        if (winner == "draw") setContainer(resContainer, "Draw!", "color:#783253;");
        if (winner == "computer")
                setContainer(resContainer, "Computer wins!", "color:#783253;");

        if (winner == "human")
                setContainer(resContainer, "Human wins!", "color:#783253;");
}

function setContainer(container, string, style) {
        container.textContent = string;
        if (style) container.style = style;
}

function editScore(hScore = humanScore, cScore = computerScore) {
        const humanScoreDashboard = document.querySelector(".scores .human .score");
        const computerScoreDashboard = document.querySelector(
                ".scores .computer .score",
        );

        setContainer(humanScoreDashboard, hScore);
        setContainer(computerScoreDashboard, cScore);
}

function flushScore() {
        if (humanScore == 5 || computerScore == 5) {
                ((humanScore = 0), (computerScore = 0));
                editScore(0, 0);
                displayWinner("draw");
        }
}
