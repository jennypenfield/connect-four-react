/* global appState */
import React from 'react'
import {gameStatus} from 'connect-four-lib'
import KeepPlayingBtn from './KeepPlayingBtn.js'

function DisplayGameOver (board) {
  return (
    <div className='winner-background'>
      <h2>{displayWinner(board)}</h2>
      {KeepPlayingBtn()}
    </div>
  )
}

function displayWinner (board) {
  let winner = gameStatus(board).status
  if (winner === 'winner_yellow') {
    let winnerName = appState.yellowPlayerName
    return winnerName + ' wins the game! Stellar!'
  } else if (winner === 'winner_red') {
    let winnerName = appState.redPlayerName
    return winnerName + ' wins the game! Magnificent!'
  } else {
    return 'It is a tie game'
  }
}

export default DisplayGameOver
