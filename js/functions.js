
function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var diceimage = document.getElementById('diceimage');
    diceimage.src = './kuvat/' + randomNumber + '.png';
    
}
document.querySelector('#dice').addEventListener('click', rollDice);
