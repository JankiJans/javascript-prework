{
  const playGame = function (playerInput) {
    clearMessages();

    const getMoveName = function(argMoveId) {
      if(argMoveId == 1) {
        return 'kamień';
      } else if(argMoveId == 2) {
          return 'papier';
      } else if(argMoveId == 3) {
          return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    const displayResult = function (argComputerMove, argPlayerMove) {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '! ');
      console.log('moves:', argComputerMove, argPlayerMove)

        if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') { 
        printMessage('przegrywasz!');
      } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('przegrywasz!');
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('przegrywasz!');
      } else if(argComputerMove == argPlayerMove) {
        printMessage('Remis!');
      } else if(argPlayerMove == 'nieznany ruch') {
        printMessage('gra nierozstrzygnięta!')
      } else {
        printMessage('Wygrywasz!');
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    displayResult(computerMove, playerMove);
    
    console.log(getMoveName('1'));
  }

  document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
  });

}

/*
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
*/

/*
  if(playerInput == 1){
    playerMove = 'kamień';
  } else if (playerInput == 2){
    playerMove = 'papier';
  } else if (playerInput == 3){
    playerMove = 'nożyce';
  }
*/

/*
  if(randomNumber == 1){
    computerMove = 'kamień';
  } else if(randomNumber == 2){
    computerMove = 'papier';
  } else if(randomNumber == 3){
    computerMove = 'nożyce';
  }
*/