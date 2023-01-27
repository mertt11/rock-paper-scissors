let humanWin=0,computerWin=0;
let playerChoice,compChoice;


function getComputerChoice(){
    let num=Math.floor(Math.random()*3);
    if(num==0){
        return "rock";
    }else if(num==1){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if(computerSelection==="rock"){
        if(playerSelection==="rock"){
            return "Draw!";
        }else if(playerSelection==="paper"){
            humanWin++;
            return "You Win! Paper beats Rock";
        }else if(playerSelection==="scissors"){
            computerWin++;
            return "You Lose! Rock beats Scissors";
        }
    }else if(computerSelection==="paper"){
        if(playerSelection==="rock"){
            computerWin++;
            return "You Lose! Paper beats Rock";
        }else if(playerSelection==="paper"){
            return "Draw!";
        }else if(playerSelection==="scissors"){
            humanWin++;
            return "You Win! Scissors beats Paper";
        }
    }else if(computerSelection==="scissors"){
        if(playerSelection==="rock"){
            humanWin++;
            return "You Win! Rock beats Scissors";
        }else if(playerSelection==="paper"){
            computerWin++;
            return "You Lose! Scissors beats Paper";
        }else if(playerSelection==="scissors"){
            return "Draw!";
        }
    }
}
    const res=document.querySelector(".desc2");
    const playerScore=document.querySelector(".playerScore");
    const computerScore=document.querySelector(".computerScore");

    const buttonRock=document.querySelector(".but1");
    const buttonPaper=document.querySelector(".but2");
    const buttonScissors=document.querySelector(".but3");

    const quest1=document.querySelector(".question1");
    const quest2=document.querySelector(".question2");

    const rockImg=document.querySelector(".img1");
    const paperImg=document.querySelector(".img2");
    const scissorsImg=document.querySelector(".img3");

    const modal=document.querySelector(".modal");
    const playAgainBut=document.querySelector(".play-again-but");

    const modalTitle=document.querySelector(".title2");

    buttonRock.addEventListener("click",event=>rockButton());
    buttonPaper.addEventListener("click",event=>paperButton());
    buttonScissors.addEventListener("click",event=>scissorsButton());
    playAgainBut.addEventListener("click",event=>resetToGame());


    function rockButton(){
        playerChoice="rock";
        compChoice=getComputerChoice();
        res.textContent=playRound(playerChoice,compChoice);
        playerScore.textContent=humanWin;
        computerScore.textContent=computerWin;
        changeImg(playerChoice,compChoice);
        alertMsg();
    }
    function paperButton(){
        playerChoice="paper";
        compChoice=getComputerChoice();
        res.textContent=playRound(playerChoice,compChoice);
        playerScore.textContent=humanWin;
        computerScore.textContent=computerWin;
        changeImg(playerChoice,compChoice);
        alertMsg();
    }
    function scissorsButton(){
        playerChoice="scissors";
        compChoice=getComputerChoice();
        res.textContent=playRound(playerChoice,compChoice);
        playerScore.textContent=humanWin;
        computerScore.textContent=computerWin;
        changeImg(playerChoice,compChoice);
        alertMsg();
    }
    function alertMsg(){
        if(playerScore.textContent==5){
            modal.style.display="block";
            modalTitle.textContent="You Won!";
        }else if(computerScore.textContent==5){
            modal.style.display="block";
            modalTitle.textContent="You Lose!";
        }
        
    }
    function changeImg(playerChoice,compChoice){
        if(playerChoice==="rock"){
            quest1.textContent="✊";
        }else if(playerChoice==="paper"){
            quest1.textContent="✋";
        }else if(playerChoice==="scissors"){
            quest1.textContent="✌";
        }
        if(compChoice==="rock"){
            quest2.textContent="✊";
        }else if(compChoice==="paper"){
            quest2.textContent="✋";
        }else if(compChoice==="scissors"){
            quest2.textContent="✌";
        }
    }
    function resetToGame(){
        modal.style.display="none";
        humanWin=0;
        computerWin=0;
        playerScore.textContent=humanWin;
        computerScore.textContent=computerWin;
        res.textContent="First one who scores 5 points wins the game";
        quest1.textContent="❔";
        quest2.textContent="❔";
    }
