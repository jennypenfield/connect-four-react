/* global appState */
import React from 'react'

function handleChange (evt) {
  if (evt.target.name === 'player1') appState.modalP1 = evt.target.value
  if (evt.target.name === 'player2') appState.modalP2 = evt.target.value
}

function GetUserInput (state) {
  return (
    <div className='user-input-box'>
      <h2>Enter player names:</h2>
      <form onSubmit={submitUserInput}>
        <input name='player1' className='player-box'
          value={state.modalP1} onChange={handleChange} placeholder='Player 1' type='text' />
        <input name='player2' className='player-box'
          value={state.modalP2} onChange={handleChange} placeholder='Player 2' type='text' />
        <input type='submit' className='start-game-btn' value='Start Game' />
      </form>
      <div />
    </div>
  )
}

function submitUserInput (evt) {
  evt.preventDefault()
  handlePlayerInput()
  appState.showPlayerInputForm = false
}

function handlePlayerInput () {
  // set yellow player name
  if (appState.modalP1.length > 0) {
    appState.yellowPlayerName = appState.modalP1
  } else {
    appState.yellowPlayerName = 'Player 1'
  }
    // set red player name
  if (appState.modalP2.length > 0) {
    appState.redPlayerName = appState.modalP2
  } else {
    appState.redPlayerName = 'Player 2'
  }
}

export default GetUserInput
