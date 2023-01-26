let humanWin=0,computerWin=0;

function getComputerChoice(){
    let num=Math.floor(Math.random()*3);
    if(num==0){
        return "Rock";
    }else if(num==1){
        return "Paper";
    }else{
        return "Scissors"
    }
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if(computerSelection==="Rock"){
        if(playerSelection==="rock"){
            return "Draw!";
        }else if(playerSelection==="paper"){
            computerWin++;
            return "You Lose! Paper beats Rock";
        }else if(playerSelection==="scissors"){
            humanWin++;
            return "You Win! Rock beats Scissors";
        }
    }else if(computerSelection==="Paper"){
        if(playerSelection==="rock"){
            computerWin++;
            return "You Lose! Paper beats Rock";
        }else if(playerSelection==="paper"){
            return "Draw!";
        }else if(playerSelection==="scissors"){
            humanWin++;
            return "You Win! Scissors beats Paper";
        }
    }else if(computerSelection==="Scissors"){
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

function game(){
    
    
    for(let i=0;i<5;i++){
        let yourChoice=prompt("Your turn: ");
        let computerChoice=getComputerChoice();
        let outcome=playRound(yourChoice,computerChoice);
        alert(outcome);
    }
    console.log("Computer: "+computerWin+" Human: "+humanWin);
    if(computerWin>humanWin){
        console.log("Computer Win");
    }else if(humanWin>computerWin){
        console.log("Human Win");
    }else {
        console.log("Draw");
    }
}

game();
