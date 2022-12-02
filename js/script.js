function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

function displayResault(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '! ');

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){ 
        printMessage('Ty przegrywasz!');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty przegrywasz!');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ty przegrywasz!');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }else if(cargComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    }

}


let randomNumber = Math.floor(Math.random() * 3 + 1);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
/*
if(playerInput == 1){
  playerMove = 'kamień';
} else if (playerInput == 2){
  playerMove = 'papier';
} else if (playerInput == 3){
  playerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + argPlayerMove);



console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + argComputerMove);

displayResault (argComputerMove, argPlayerMove);