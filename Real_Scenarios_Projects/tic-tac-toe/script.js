let currentPlayer = 'X';
let isGameActive = true;
const tiles = document.querySelectorAll('.tile');
const playerDisplay = document.querySelector('.display-player');
const announcer = document.querySelector('.announcer');
const changePlayer = () => {
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    playerDisplay.innerText = currentPlayer;
  };
  /*
  [
   0 1 2
   3 4 5
   6 7 8 
  ]
  */
const winingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];
const checkWinner = () => {
    let roundWon = false;
    for(let i = 0; i <= 7 ; i++){
        let winCondition = winingConditions[i];
        let a = tiles[winCondition[0]].innerText;
        let b = tiles[winCondition[1]].innerText;
        let c = tiles[winCondition[2]].innerText;
        if(a ==='' || b=== '' || c === ''){
            continue
        }
        if(a!='' && a==b && b == c){
            announcer.innerText = tiles[winCondition[0]].innerText + " Won";
            roundWon = true;
            isGameActive = false;
            break;         

        }
    }
    
}

Array.from(tiles).forEach((elem) => {
    elem.addEventListener('click',()=>{
        if (elem.innerText == "" && isGameActive ) {
            elem.innerText = currentPlayer;
            checkWinner();
            changePlayer();            
        }
    })
})
