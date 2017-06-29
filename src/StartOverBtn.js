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
    yellowPlayerName: '',
    redPlayerName: '',
    yellowTotalWins: 0,
    redTotalWins: 0,
    currentPlayer: 'y',
    isGameOver: false,
    showPlayerInputForm: true,
    modalP1: '',
    modalP2: ''
  }
  GetUserInput(appState)
}

export default StartOverBtn
