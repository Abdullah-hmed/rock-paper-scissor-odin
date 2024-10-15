moveSet = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice() {
    let random = parseInt(Math.random()*3);
    console.log('Computer Chose: ', moveSet[random]);
    computerChoice.innerHTML = "Computer's Choice: <u><b>"+moveSet[random]+"</b></u>"; 
    return random;
}


scoreCard = [0, 0];

const rockBtn = document.getElementById('rock-button');
const paperBtn = document.getElementById('paper-button');
const scissorBtn = document.getElementById('scissor-button');
const humanScoreCard = document.getElementById('human-score');
const computerScoreCard = document.getElementById('computer-score');
const humanChoice = document.getElementById('human-choice');
const computerChoice = document.getElementById('computer-choice');


rockBtn.addEventListener('click', () => {
    console.log('Human Chose: Rock');
    
    humanMove = 0;
    humanChoice.innerHTML = "Your Choice: <u><b>"+moveSet[humanMove]+"</b></u>"; 
    checkWinner(humanMove);
});

paperBtn.addEventListener('click', () => {
    console.log('Human Chose: Paper');
    humanMove = 1;
    humanChoice.innerHTML = "Your Choice: <u><b>"+moveSet[humanMove]+"</b></u>"; 
    checkWinner(humanMove);
});

scissorBtn.addEventListener('click', () => {
    console.log('Human Chose: Scissor');
    humanMove = 2;
    humanChoice.innerHTML = "Your Choice: <u><b>"+moveSet[humanMove]+"</b></u>"; 
    checkWinner(humanMove);
});


function checkWinner(humanMove) {
    let computerMove = getComputerChoice();
    if (humanMove === computerMove) {
        console.log('Draw');
    } else if ((humanMove+1)%3 === computerMove) {
        scoreCard[1] = scoreCard[1] + 1;
        console.log('Computer Wins');
    } else {
        scoreCard[0] = scoreCard[0] + 1;
        console.log('Human Wins');
    }
    // console.log('Score Card:\nHuman: ',scoreCard[0],'\nComputer:',scoreCard[1]);
    humanScoreCard.innerHTML = scoreCard[0];
    computerScoreCard.innerHTML = scoreCard[1];
}