/* global appState */
import React from 'react'
import Circles from './Circles.js'
import {gameStatus} from 'connect4-lib'

function Column (board) {
  let arrColumns = board.map(function (column, index) {
    return (
      <div key={index} className='column' onClick={pushGamepiece.bind(null, index)}>
        {Circles(column)}
      </div>
    )
  })
  return arrColumns
}

function pushGamepiece (index) {
  let columnClicked = appState.board[index]
  for (let i = columnClicked.length - 1; i >= 0; i--) {
    if (columnClicked[i] === null) {
      let player = appState.currentPlayer
      console.log(player)
      columnClicked[i] = appState.currentPlayer
      changeTurns()
      checkStatus()
      return
    }
  }
}

function checkStatus () {
  // let gameState = gameStatus(appState.board).status
  // console.log(gameState)
  // checkForWinner()
  // checkForTie()
}

function changeTurns () {
  if (appState.currentPlayer === 'yellow') {
    appState.currentPlayer = 'red'
  } else {
    appState.currentPlayer = 'yellow'
  }
}

function checkForWinner () {
  let gameState = gameStatus(appState.board).status
  if (gameState === 'winner_yellow' || gameState === 'winner_red') {
    // highlightWinner()
    console.log('checkwinner')
  }
}

function checkForTie (board) {
  let gameState = gameStatus(appState.board).status
  if (gameState === 'tie') {
    // highlightBoard()
    console.log('check tie')
  }
}

function highlightWinner () {

}

function highlightBoard () {

}
export default Column
