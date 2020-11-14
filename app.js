const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')  
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')  
}

const resetButton = document.querySelector('#reset')
const winningScoreSelector = document.querySelector('#limit');
let winningScore = parseInt(winningScoreSelector.value);


winningScoreSelector.addEventListener('input', function(){
    winningScore = parseInt(winningScoreSelector.value);
    reset();
})

p1.button.addEventListener('click', function(e){
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function(e){
    updateScores(p2, p1)
})

resetButton.addEventListener('click', reset)

function reset(){
    for (let p of [p1,p2]){
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        p.score = 0;
        p.display.textContent = p.score;  
    }
}

function updateScores(player, opponent){
    player.score++;
    player.display.textContent = player.score;    
    if (player.score === winningScore){
        if (player.score >= opponent.score+2){
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        else{
            winningScore++;
        }
    } 
}

