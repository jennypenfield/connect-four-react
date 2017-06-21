/* global appState */
import React from 'react'
import Circles from './Circles.js'
import {gameStatus} from 'connect4-lib'

function Column (board) {
  let arrColumns = board.map(function (column, index) {
    return (
      <div key={index} className='column' onClick={pushGamepiece()}>
        {Circles(column)}
      </div>
    )
  })
  return arrColumns
}

function pushGamepiece () {
  if (gameStatus(appState.board) !== 'tie' )
  checkStatus()
  changeTurns()
}

function checkStatus () {
  checkForWinner()
  checkTie()
}

function changeTurns () {
  if (appState.currentPlayer === 'yellow') appState.currentPlayer === 'red'
  if (appState.currentPlayer === 'yellow') appState.currentPlayer === 'red'
}

function checkForWinner () {
  if (gameStatus(appState.board).status === 'winner_yellow' ||
  gameStatus(appState.board).status === 'winner_red') {
    // highlightWinner()
  }
}

function checkTie () {
  if (gameStatus(appState.board).status === 'tie') {
    // highlightBoard()
  }
}

function highlightWinner () {

}

function highlightBoard () {

}
export default Column
