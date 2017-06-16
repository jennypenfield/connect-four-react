/* global appState */
import React from 'react'
import './index.css'

function Circles (column, indexRow) {
  let className = 'white-circle'
  let columnArray = column.map(function (gamepiece, index) {
    if (gamepiece === 'yellow') className = 'yellow-gamepiece'
    if (gamepiece === 'red') className = 'red-gamepiece'
    return (
      <div key={index} onClick={pushGamepiece.bind(null, index)}
        className={className} />
    )
  })
  return columnArray
}

function pushGamepiece (index) {
  // push currentPlayer into the board array

  // change currentPlayer to the opposite for the next turn
  // appState.board[index].push('yellow')
  console.log(index)
  appState.board[5][5] = 'red'
  if (appState.currentPlayer === 'yellow') appState.currentPlayer === 'red'
  if (appState.currentPlayer === 'yellow') appState.currentPlayer === 'red'
}

export default Circles
