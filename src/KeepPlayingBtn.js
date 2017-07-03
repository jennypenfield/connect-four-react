/* global appState */
import React from 'react'
import {gameStatus, createEmptyBoard} from 'connect-four-lib'

function KeepPlayingBtn () {
  return (
    <button className='game-btn' onClick={keepPlaying}>Keep Playing</button>
  )
}

// loser goes first
function keepPlaying () {
  let winner = gameStatus(appState.board).status
  if (winner === 'winner_yellow') {
    window.appState = {
      board: createEmptyBoard(),
      yellowPlayerName: appState.yellowPlayerName,
      redPlayerName: appState.redPlayerName,
      yellowTotalWins: appState.yellowTotalWins,
      redTotalWins: appState.redTotalWins,
      currentPlayer: 'r',
      isGameOver: false
    }
  } else {
    window.appState = {
      board: createEmptyBoard(),
      yellowPlayerName: appState.yellowPlayerName,
      redPlayerName: appState.redPlayerName,
      yellowTotalWins: appState.yellowTotalWins,
      redTotalWins: appState.redTotalWins,
      currentPlayer: 'y',
      isGameOver: false
    }
  }
}

export default KeepPlayingBtn
