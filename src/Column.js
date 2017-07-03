/* global appState */
import React from 'react'
import Circles from './Circles.js'
import {gameStatus} from 'connect4-lib'

function Column (board) {
  let arrColumns = board.map(function (column, index) {
    let gameState = gameStatus(appState.board).status
    if (gameState === 'in_progress') {
      return (
        <div key={index} className='column' onClick={pushGamepiece.bind(null, index)}>
          {Circles(column, index)}
        </div>
      )     // if there is a tie or winner, show board (columns) as gray, no onClick if game over
    } else {
      return (
        <div key={index} className='game-over-column'>
          {Circles(column, index)}
        </div>
      )
    }
  })
  return arrColumns
}

function pushGamepiece (index) {
  let columnClicked = appState.board[index]
  for (let i = columnClicked.length - 1; i >= 0; i--) {
    if (columnClicked[i] === null) {
      columnClicked[i] = appState.currentPlayer
      let gameState = gameStatus(appState.board).status
      if (gameState === 'in_progress') {
        changeTurns()
      } else if (gameState === 'winner_red' || gameState === 'winner_yellow') {
        updateTotalWins()
      }
      return
    }
  }
}

function changeTurns () {
  if (appState.currentPlayer === 'y') {
    appState.currentPlayer = 'r'
  } else {
    appState.currentPlayer = 'y'
  }
}

function updateTotalWins () {
  if (gameStatus(appState.board).status === 'winner_yellow') {
    appState.yellowTotalWins++
    appState.isGameOver = true
    return
  } else {
    appState.redTotalWins++
    appState.isGameOver = true
    return
  }
}

export default Column
