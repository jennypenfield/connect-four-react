/* global appState localStorage */
import React from 'react'
import GetUserInput from './GetUserInput.js'

function saveState () {
  localStorage.state = JSON.stringify(window.appState)
}

function getSavedState () {
  if (typeof (localStorage.state) !== 'undefined') {
    window.appState = JSON.parse(localStorage.state)
  }
}

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

function handlePlayerInput () {
  // set yellow player name
  if (appState.modalP1.length > 0) {
    appState.yellowPlayerName = appState.modalP1
  } else {
    appState.yellowPlayerName = 'Player 1'
  }
    // set red player name
  if (appState.modalP2.length > 0) {
    appState.redPlayerName = appState.modalP2
  } else {
    appState.redPlayerName = 'Player 2'
  }
  window.alert('Touch the column to drop your piece. The piece highlighted in green goes first!')
}

function handleSubmit (evt) {
  evt.preventDefault()
  handlePlayerInput()
  appState.showPlayerInputForm = false
}

export {
  handlePlayerInput,
  handleSubmit,
  StartOverBtn,
  getSavedState,
  saveState
}
