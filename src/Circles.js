/* global appState */
import React from 'react'
import {gameStatus} from 'connect4-lib'

function Circles (column, indexRow) {
  let className = 'white-circle'
  let columnArray = column.map(function (gamepiece, index) {
    if (gamepiece === 'y') className = 'yellow-gamepiece'
    if (gamepiece === 'r') className = 'red-gamepiece'
    // check for winner and set class of the winning coords
    let gameState = gameStatus(appState.board).status
    if (gameState === 'winner_yellow' || gameState === 'winner_red') {
      setWinningCoords()
      if (gamepiece === 'ywinner') className = 'yellow-gamepiece-winner'
      if (gamepiece === 'rwinner') className = 'red-gamepiece-winner'
    }
    return (
      <div key={index} className={className} />
    )
  })
  return columnArray
}

// coordinates look like (from connect4-lib):
// [[0, 0], [0, 1], [0, 2], [0, 3]]

function setWinningCoords () {
  let gameState = gameStatus(appState.board).status
  let winningCoords = gameStatus(appState.board).coordinates
  console.log(winningCoords)
  if (gameState === 'winner_yellow') {
    appState.board[winningCoords[0][0]][winningCoords[0][1]] = 'ywinner'
    appState.board[winningCoords[1][0]][winningCoords[1][1]] = 'ywinner'
    appState.board[winningCoords[2][0]][winningCoords[2][1]] = 'ywinner'
    appState.board[winningCoords[3][0]][winningCoords[3][1]] = 'ywinner'
  }
  if (gameState === 'winner_red') {
    appState.board[winningCoords[0][0]][winningCoords[0][1]] = 'rwinner'
    appState.board[winningCoords[1][0]][winningCoords[1][1]] = 'rwinner'
    appState.board[winningCoords[2][0]][winningCoords[2][1]] = 'rwinner'
    appState.board[winningCoords[3][0]][winningCoords[3][1]] = 'rwinner'
  }
}

export default Circles
