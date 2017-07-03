/* global appState localStorage */
import React from 'react'
import GetUserInput from './GetUserInput.js'
import connect4Lib from 'connect4-lib'

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
  console.log(connect4Lib.gameStatus(appState.board).status)
  window.localStorage.clear()
  window.appState = {
    board: createEmptyBoard(),
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

function createEmptyBoard () {
  let board = []
  for (let colIndex = 0; colIndex < 7; colIndex++) {
    let columns = []
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
      columns.push(null)
    }
    board.push(columns)
  }
  return board
}

export {
  createEmptyBoard,
  StartOverBtn,
  getSavedState,
  saveState
}
