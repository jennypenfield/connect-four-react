/* global appState */
import React from 'react'
import {gameStatus} from 'connect4-lib'

function Circles (column, indexRow) {
  let className = 'white-circle'
  let columnArray = column.map(function (gamepiece, index) {
    if (gamepiece === 'y') className = 'yellow-gamepiece'
    if (gamepiece === 'r') className = 'red-gamepiece'
    // check for winner and set class of winning coords
    let gameState = gameStatus(appState.board).status
    if (gameState === 'winner_yellow' || gameState === 'winner_red') {
      if (!appState.isGameOver) updateTotalWins()
      let winningCoords = gameStatus(appState.board).coordinates
      winningCoords.forEach(function (coord) {
        if (coord[0] === indexRow && coord[1] === index) {
          className += '-winner'
        }
      })
    }
    return (
      <div key={index} className={className} />
    )
  })
  return columnArray
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
export default Circles
