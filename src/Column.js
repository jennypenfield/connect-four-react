/* global appState */
import React from 'react'
import Circles from './Circles.js'
import {gameStatus} from 'connect4-lib'

function Column (board) {
  let arrColumns = board.map(function (column, index) {
    let gameState = gameStatus(appState.board).status
    // if there is a tie, show board (columns) as gray, no onClick if game over
    if (gameState === 'tie') {
      return (
        <div key={index} className='game-over'>
          {Circles(column)}
        </div>
      )
    } else if (gameState === 'in_progress') {
      return (
        <div key={index} className='column' onClick={pushGamepiece.bind(null, index)}>
          {Circles(column)}
        </div>
      )
    } else {
      // Show win in Circles. Columns display normally. No onClick if there is a winner.
      return (
        <div key={index} className='column'>
          {Circles(column)}
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
      changeTurns()
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

export default Column
