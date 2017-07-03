/* global appState */
import React from 'react'
import GetUserInput from './GetUserInput.js'
import connectFourLib from 'connect-four-lib'

function saveState () {
  window.localStorage.state = JSON.stringify(window.appState)
}

function getSavedState () {
  let local = window.localStorage.state
  window.appState = safelyParseJSON(local)
}

function safelyParseJSON (local) {
  try {
    return JSON.parse(local)
  } catch (e) {
    return window.appState
  }
}

function StartOverBtn () {
  return (
    <button className='game-btn' onClick={matchReset}>Start Over</button>
  )
}

function matchReset () {
  console.log(connectFourLib.gameStatus(appState.board).status)
  window.localStorage.clear()
  window.appState = {
    board: connectFourLib.createEmptyBoard(),
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

export {
  StartOverBtn,
  getSavedState,
  saveState
}
