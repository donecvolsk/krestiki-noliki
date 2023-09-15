let players = ['x', 'o'];
let activePlayer = 0; 
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]; 

function startGame() {
// определение активного игрока случайным образом 
  activePlayer = Math.floor(Math.random() * players.length);
  alert('Первый ходит игрок: ' + '\"' + players[activePlayer] + '\"');
  //отрисовка поля при открытии страницы
  renderBoard (board);  
}

function click(lineNumber, columnNumber) {
  //присвоение символа игроку в зависимости от активного игрока и смена хода игроков на поле.
  let playerSymbol;  
  if(activePlayer === 0) {
    playerSymbol = 'x';
    activePlayer = 1;
  } else {
    playerSymbol = '0';
    activePlayer = 0;
  }

  //присвоение символа элементам поля, в зависимости от клика на поле
  board [lineNumber] [columnNumber] = playerSymbol;
  renderBoard (board); // отрисовка поля

    //проверка выйгрышной ситуации на поле и вызов функции showWinner
  if(board [0][0] == (playerSymbol) && board [0][1] ==(playerSymbol) && board [0][2] == (playerSymbol) || board [1][0] == (playerSymbol) && board [1][1] == (playerSymbol) && board [1][2] == (playerSymbol) || board [2][0] == (playerSymbol) && board [2][1] == (playerSymbol) && board [2][2] == (playerSymbol) || board [0][0] == (playerSymbol) && board [1][0] == (playerSymbol) && board [2][0] == (playerSymbol) || board [0][1] == (playerSymbol) && board [1][1] == (playerSymbol) && board [2][1] == (playerSymbol) || board [0][2] == (playerSymbol) && board [1][2] == (playerSymbol) && board [2][2] == (playerSymbol) || board [0][0] == (playerSymbol) && board [1][1] == (playerSymbol) && board [2][2] == (playerSymbol) || board [0][2] == (playerSymbol) && board [1][1] == (playerSymbol) && board [2][0] == (playerSymbol)) {
    showWinner(activePlayer);   
  } 
}
