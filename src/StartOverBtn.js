/* global appState */
import React from 'react'
import GetUserInput from './GetUserInput.js'

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
    isGameOver: false,
    showPlayerInputForm: true
  }
  GetUserInput(appState)
}

export default StartOverBtn
