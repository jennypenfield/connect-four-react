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
      let winningCoords = gameStatus(appState.board).coordinates
      winningCoords.forEach(function (coord) {
        console.log(coord[0], coord[1], indexRow, index)
        if (coord[0] === index && coord[1] === indexRow) {
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

export default Circles
