import React from 'react'
import connect4Lib from 'connect4-lib'

function StartOverBtn () {
  return (
    <button className='game-btn' onClick={matchReset}>Start Over</button>
  )
}

function matchReset () {
  window.appState = {
    board: connect4Lib.EMPTY_BOARD,
    yellowPlayerName: 'Player 1',
    redPlayerName: 'Player 2',
    yellowTotalWins: 0,
    redTotalWins: 0,
    currentPlayer: 'y',
    gameOver: false
  }

  getPlayerInput()
}

function getPlayerInput () {
  let yellowPlayerInput = window.prompt('Enter Player 1 Name')
  if (yellowPlayerInput !== '') {
    window.appState.yellowPlayerName = yellowPlayerInput
  }
  if (yellowPlayerInput === null) {
    window.appState.yellowPlayerName = 'Player 1'
  }
  // red (player 2) input
  let redPlayerInput = window.prompt('Enter Player 2 Name')
  if (redPlayerInput !== '') {
    window.appState.redPlayerName = redPlayerInput
  }
  if (redPlayerInput === null) {
    window.appState.redPlayerName = 'Player 2'
  }
  window.alert('Have Fun!')
}

export default StartOverBtn
