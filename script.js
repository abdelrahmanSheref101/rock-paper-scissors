//
//, ,
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

function getHumanChoice() {
        let input = prompt("Enter your choice: (rock , paper , scissors)");

        return choices.find((choice) => choice.name == input.toLowerCase());
}

function playRound(humanChoice, computerChoice) {
        if (!humanChoice || !computerChoice) return;

        if (humanChoice.name == computerChoice.name)
                console.log(
                        `Draw! Human Choice ${humanChoice.name} Computer Choice ${computerChoice.name}`,
                );

        if (humanChoice.defeats == computerChoice.name) {
                ++humanScore;
                console.log(
                        `You Win! ;)  ${humanChoice.name} beats ${computerChoice.name}`,
                );
        } else {
                ++computerScore;
                console.log(`You lose! ${computerChoice.name} beats ${humanChoice.name}`);
        }
}

function playGame(n = 5) {
        for (let i = 0; i < n; ++i) {
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();

                console.log("Hselection : ", humanSelection);
                console.log("Cselection : ", computerSelection);
                playRound(humanSelection, computerSelection);
        }
}
