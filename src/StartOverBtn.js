import React from 'react'

function StartOverBtn () {
  return (
    <button className='game-btn' onClick={matchReset}>Start Over</button>
  )
}

function matchReset () {
  window.appState = {
    board:  [[null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]],
    yellowPlayerName: 'Player 1',
    redPlayerName: 'Player 2',
    yellowTotalWins: 0,
    redTotalWins: 0,
    currentPlayer: 'y',
    gameOver: false,
    getUserInput: true
  }

  // getPlayerInput()
}

export default StartOverBtn
