import React from 'react'
import {gameStatus} from 'connect4-lib'

function Scoreboard (yellowPlayerName, redPlayerName, yellowPlayerTotalWins, redPlayerTotalWins) {
  return (
    <div className='scoreboard-container'>
      <div className='inner-scoreboard-containers'>
        <div className={getYellowGamepieceClass()} />
        <h2 className='player-fonts'>{yellowPlayerName}</h2>
        <h2 className='player-fonts'>Total Wins: {yellowPlayerTotalWins}</h2>
      </div>
      <div className='inner-scoreboard-containers'>
        <div className={getRedGamepieceClass()} />
        <h2 className='player-fonts'>{redPlayerName}</h2>
        <h2 className='player-fonts'>Total Wins: {redPlayerTotalWins}</h2>
      </div>
    </div>
  )
}

// highlight current player gamepiece in scoreboard container
function getYellowGamepieceClass () {
  if (window.appState.currentPlayer === 'y' &&
  gameStatus(window.appState.board).status === 'in_progress') {
    return 'yellow-gamepiece-active'
  } else return 'yellow-gamepiece'
}

function getRedGamepieceClass () {
  if (window.appState.currentPlayer === 'r' &&
  gameStatus(window.appState.board).status === 'in_progress') {
    return 'red-gamepiece-active'
  } else return 'red-gamepiece'
}

export default Scoreboard
